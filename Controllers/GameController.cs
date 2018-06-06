using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using PyeongchangKampen.Models;
using PyeongchangKampen.Models.DTO.Creation;
using PyeongchangKampen.Models.DTO.Retrieve;
using PyeongchangKampen.Models.DTO.Update;
using PyeongchangKampen.Repostory;
using PyeongchangKampen.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("/api/games")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public class GameController : Controller
    {
        public static readonly string CACHE_KEY_GAME = "CACHE_KEY_GAME";
        private IGameRepository _Repository;
        private ILogger<GameController> _Logger;
        private IBetRepository _BetRepository;
        private ISportRepository _SportRepository;
        private ITeamRepository _TeamRepository;
        private IMemoryCache _Cache;

        public GameController(IGameRepository repository, ILogger<GameController> logger, IBetRepository betRepository, 
            ISportRepository sportRepository, ITeamRepository teamRepository, IMemoryCache cache)
        {
            _Repository = repository;
            _Logger = logger;
            _BetRepository = betRepository;
            _SportRepository = sportRepository;
            _TeamRepository = teamRepository;
            _Cache = cache;
        }

        [HttpGet("league/{leagueId:int}")]
        public async Task<IActionResult> GetGames(int leagueId, string filter = null)
        {
            IEnumerable<GameForRetrieveDto> gamesToRetrieve;
            

            if(filter == "open")
            {
                var cacheKey = CACHE_KEY_GAME + leagueId + "open";
                if (_Cache.TryGetValue(cacheKey, out gamesToRetrieve) == false 
                    || (gamesToRetrieve != null && HasGameChangedStatus(gamesToRetrieve) == true))
                {
                    var games = await _Repository.GetGamesAsync(leagueId);
                    games = games.Where(x => x.IsOpenForBets == true);
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    var firstToExpire = gamesToRetrieve.OrderBy(x => x.StartsOn).FirstOrDefault();
                    if (firstToExpire != null)
                    {
                        _Cache.Set(cacheKey, gamesToRetrieve, new DateTimeOffset(firstToExpire.StartsOn));
                    }
                    else
                    {
                        _Cache.Set(cacheKey, gamesToRetrieve);
                    }
                }
            }
            else if(filter == "closed")
            {
                var cacheKey = CACHE_KEY_GAME + leagueId + "closed";
                if (_Cache.TryGetValue(cacheKey, out gamesToRetrieve) == false)
                {
                    var games = await _Repository.GetGamesAsync(leagueId);
                    games = games.Where(x => x.IsOpenForBets == false && x.ScoreTeam1.HasValue);
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    _Cache.Set(cacheKey, gamesToRetrieve);
                }
            }
            else
            {
                var cacheKey = CACHE_KEY_GAME + leagueId;
                if (_Cache.TryGetValue(cacheKey, out gamesToRetrieve) == false)
                {
                    var games = await _Repository.GetGamesAsync(leagueId);
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    _Cache.Set(cacheKey, gamesToRetrieve);
                }
            }

            var currentUserId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            if (currentUserId != null)
            {
                foreach (var game in gamesToRetrieve)
                {
                    if(game.Bets.Contains(currentUserId.Value))
                    {
                        game.HasUserPlacedBet = true;
                    }
                }
            }

            return Ok(gamesToRetrieve);
        }

        [HttpGet("{gameId}", Name = "GetGame")]
        public async Task<IActionResult> GetGame(int gameId)
        {
            var game = await _Repository.GetGameAsync(gameId);
            
            if (game == null)
            {
                return NotFound();
            }

            var currentUserId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            var mapped = Mapper.Map<GameForRetrieveDto>(game);
            if (currentUserId != null && mapped.Bets.Contains(currentUserId.Value))
            {
                mapped.HasUserPlacedBet = true;
            }

            return Ok(mapped);
        }

        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<IActionResult> AddGame([FromBody]GameForCreationDto gameDto)
        {
            var game = Mapper.Map<Game>(gameDto);
            if(game.GameType == GameType.Placement)
            {
                game.PointsWinner = null;
            }

            game = await _Repository.AddGameAsync(game);
            _Logger.LogInformation($"{User.Identity.Name} created game {gameDto.Title} with sport {gameDto.SportId}");

            _Cache.Remove(CACHE_KEY_GAME + gameDto.LeagueId);
            _Cache.Remove(CACHE_KEY_GAME + gameDto.LeagueId + "closed");
            _Cache.Remove(CACHE_KEY_GAME + gameDto.LeagueId + "open");
            return CreatedAtRoute("GetGame", new { gameId = game.Id }, Ok(Mapper.Map<GameForRetrieveDto>(game)));
        }

        [Authorize(Roles = "Administrator")]
        [HttpPut("{gameId:int}")]
        public async Task<IActionResult> UpdateGame(int gameId, [FromBody]GameForUpdateDto gameDto)
        {
            if(ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var game = await _Repository.GetGameAsync(gameId);
            if(game.Sport.Id != gameDto.SportId)
            {
                game.Sport = await _SportRepository.GetSportAsync(gameDto.SportId);
            }

            
            Mapper.Map(gameDto, game, typeof(GameForUpdateDto), typeof(Game));
            if (gameDto.Team1Id.HasValue)
            {
                var teams = await _TeamRepository.GetTeams();
                game.Team1 = teams.FirstOrDefault(x => x.Id == gameDto.Team1Id.Value);
                game.Team2 = teams.FirstOrDefault(x => x.Id == gameDto.Team2Id.Value);
            }

            if ((game.GameType == GameType.Placement && game.ScoreTeam1.HasValue == true) || 
                (
                    (game.GameType == GameType.Result || game.GameType == GameType.TeamGame) 
                    && game.ScoreTeam1.HasValue == true && game.ScoreTeam2.HasValue == true)
                )
            {
                var bets = await _BetRepository.GetBets(game);
                if(game.GameType == GameType.Placement)
                {
                    AwardPointsForPlacement(bets, game.ScoreTeam1.Value, game.PointsResult.Value, game.ScoreType == ScoreType.Odds);
                }
                else
                {
                    AwardPointsForResult(bets, game.ScoreTeam1.Value, game.ScoreTeam2.Value, game.PointsResult.Value, game.PointsWinner, game.ScoreType == ScoreType.Odds);
                }
                await _BetRepository.UpdateBets(bets);
            }
            else
            {
                var bets = await _BetRepository.GetBets(game);
                foreach(var bet in bets)
                {
                    bet.AwardedPoints = null;
                }
                await _BetRepository.UpdateBets(bets);
            }

            await _Repository.UpdateGame(game);

            _Cache.Remove(CACHE_KEY_GAME);
            _Cache.Remove(CACHE_KEY_GAME + "closed");
            _Cache.Remove(CACHE_KEY_GAME + "open");
            _Cache.Remove(BetController.CACHE_KEY_BETS_GAME + gameId);
            _Cache.Remove(LeagueController.CACHE_KEY_TOP_LIST + 1);
            _Logger.LogInformation($"{User.Identity.Name} updated game {gameDto.Title} with sport {gameDto.SportId}");
            return Ok(Mapper.Map<GameForRetrieveDto>(game));
        }

        

        private void AwardPointsForPlacement(IEnumerable<Bet> bets, int result, int pointsResult, bool useScoreCalculation)
        {
            var correctBet = new Bet() { ScoreTeam1 = result };
            var scoreCalculator = new ScoreCalculationService();
            var awardedScore = useScoreCalculation ? scoreCalculator.GetScoreForCorrectBet(bets, correctBet) : pointsResult;
            foreach(var bet in bets)
            {
                if(bet.ScoreTeam1.HasValue && bet.ScoreTeam1.Value == result)
                {
                    bet.AwardedPoints = awardedScore;
                }
                else
                {
                    bet.AwardedPoints = 0;
                }
            }
        }

        private void AwardPointsForResult(IEnumerable<Bet> bets, int scoreTeam1, int scoreTeam2, int pointsResult, int? pointsWinner, bool useScoreCalculation)
        {
            var correctBet = new Bet() { ScoreTeam1 = scoreTeam1, ScoreTeam2 = scoreTeam2 };
            var scoreCalculator = new ScoreCalculationService();
            var awardedPointsResult = useScoreCalculation ? scoreCalculator.GetScoreForCorrectBet(bets, correctBet) : pointsResult;
            var awardedPointsWinner = useScoreCalculation ? scoreCalculator.GetScoreForCorrectWinner(bets, correctBet) : pointsWinner.HasValue ? pointsWinner.Value : 0;

            foreach(var bet in bets)
            {
                if (bet.ScoreTeam1.HasValue == true && bet.ScoreTeam2.HasValue == true)
                {
                    if(bet.ScoreTeam1.Value == scoreTeam1 && bet.ScoreTeam2.Value == scoreTeam2)
                    {
                        bet.AwardedPoints = awardedPointsResult;
                    }
                    else if(scoreTeam1 == scoreTeam2 && bet.ScoreTeam1.Value == bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = awardedPointsWinner;
                    }
                    else if(scoreTeam1 < scoreTeam2 && bet.ScoreTeam1.Value < bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = awardedPointsWinner;
                    }
                    else if(scoreTeam1 > scoreTeam2 && bet.ScoreTeam1.Value > bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = awardedPointsWinner;
                    }
                }
                else
                {
                    bet.AwardedPoints = 0;
                }
            }
        }

        private bool HasGameChangedStatus(IEnumerable<GameForRetrieveDto> games)
        {
            foreach(var game in games)
            {
                if(game.StartsOn >= DateTime.UtcNow)
                {
                    return true;
                }
            }
            return false;
        }

    }
}
