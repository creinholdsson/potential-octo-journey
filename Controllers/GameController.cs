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
        private IMemoryCache _Cache;

        public GameController(IGameRepository repository, ILogger<GameController> logger, IBetRepository betRepository, 
            ISportRepository sportRepository, IMemoryCache cache)
        {
            _Repository = repository;
            _Logger = logger;
            _BetRepository = betRepository;
            _SportRepository = sportRepository;
            _Cache = cache;
        }

        [HttpGet]
        public async Task<IActionResult> GetGames(string filter = null)
        {
            IEnumerable<GameForRetrieveDto> gamesToRetrieve;
            

            if(filter == "open")
            {
                if(_Cache.TryGetValue(CACHE_KEY_GAME+"open", out gamesToRetrieve) == false 
                    || (gamesToRetrieve != null && HasGameChangedStatus(gamesToRetrieve) == true))
                {
                    var games = await _Repository.GetGamesAsync();
                    games = games.Where(x => x.IsOpenForBets == true);
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    var firstToExpire = gamesToRetrieve.OrderBy(x => x.StartsOn).FirstOrDefault();
                    if (firstToExpire != null)
                    {
                        _Cache.Set(CACHE_KEY_GAME + "open", gamesToRetrieve, new DateTimeOffset(firstToExpire.StartsOn));
                    }
                    else
                    {
                        _Cache.Set(CACHE_KEY_GAME + "open", gamesToRetrieve);
                    }
                }
            }
            else if(filter == "closed")
            {
                if (_Cache.TryGetValue(CACHE_KEY_GAME + "closed", out gamesToRetrieve) == false)
                {
                    var games = await _Repository.GetGamesAsync();
                    games = games.Where(x => x.IsOpenForBets == false && x.ScoreTeam1.HasValue);
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    _Cache.Set(CACHE_KEY_GAME + "closed", gamesToRetrieve);
                }
            }
            else
            {
                if (_Cache.TryGetValue(CACHE_KEY_GAME, out gamesToRetrieve) == false)
                {
                    var games = await _Repository.GetGamesAsync();
                    gamesToRetrieve = Mapper.Map<IEnumerable<GameForRetrieveDto>>(games);
                    _Cache.Set(CACHE_KEY_GAME, gamesToRetrieve);
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
            return Ok(Mapper.Map<GameForRetrieveDto>(game));
        }

        [HttpGet("league/{leagueId:int}")]
        public async Task<IActionResult> GetGames(int leagueId)
        {
            var games = await _Repository.GetGamesAsync(leagueId);
            return Ok(Mapper.Map<IEnumerable<GameForRetrieveDto>>(games));
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

            _Cache.Remove(CACHE_KEY_GAME);
            _Cache.Remove(CACHE_KEY_GAME+"closed");
            _Cache.Remove(CACHE_KEY_GAME+"open");
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


            if((game.GameType == GameType.Placement && game.ScoreTeam1.HasValue == true) || 
                (game.GameType == GameType.Result && game.ScoreTeam1.HasValue == true && game.ScoreTeam2.HasValue == true))
            {
                var bets = await _BetRepository.GetBets(game);
                if(game.GameType == GameType.Placement)
                {
                    AwardPointsForPlacement(bets, game.ScoreTeam1.Value, game.PointsResult);
                }
                else
                {
                    AwardPointsForResult(bets, game.ScoreTeam1.Value, game.ScoreTeam2.Value, game.PointsResult, game.PointsWinner);
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

        

        private void AwardPointsForPlacement(IEnumerable<Bet> bets, int result, int pointsResult)
        {
           foreach(var bet in bets)
            {
                if(bet.ScoreTeam1.HasValue && bet.ScoreTeam1.Value == result)
                {
                    bet.AwardedPoints = pointsResult;
                }
                else
                {
                    bet.AwardedPoints = 0;
                }
            }
        }

        private void AwardPointsForResult(IEnumerable<Bet> bets, int scoreTeam1, int scoreTeam2, int pointsResult, int? pointsWinner)
        {
            var pointsForWinnerResult = pointsWinner.HasValue ? pointsWinner.Value : 0;

            foreach(var bet in bets)
            {
                if (bet.ScoreTeam1.HasValue == true && bet.ScoreTeam2.HasValue == true)
                {
                    if(bet.ScoreTeam1.Value == scoreTeam1 && bet.ScoreTeam2.Value == scoreTeam2)
                    {
                        bet.AwardedPoints = pointsResult;
                    }
                    else if(scoreTeam1 == scoreTeam2 && bet.ScoreTeam1.Value == bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = pointsForWinnerResult;
                    }
                    else if(scoreTeam1 < scoreTeam2 && bet.ScoreTeam1.Value < bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = pointsForWinnerResult;
                    }
                    else if(scoreTeam1 > scoreTeam2 && bet.ScoreTeam1.Value > bet.ScoreTeam2.Value)
                    {
                        bet.AwardedPoints = pointsForWinnerResult;
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
