using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PyeongchangKampen.Models;
using PyeongchangKampen.Models.DTO.Creation;
using PyeongchangKampen.Models.DTO.Retrieve;
using PyeongchangKampen.Repostory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("/api/bets")]
    public class BetController: Controller
    {
        private IBetRepository _Repository;
        private IGameRepository _GameRepository;
        private ILogger<BetController> _Logger;

        public BetController(IBetRepository repository, ILogger<BetController> logger, IGameRepository gameRepository)
        {
            _Repository = repository;
            _GameRepository = gameRepository;
            _Logger = logger;
        }

        [HttpGet("{betId:int}", Name = "GetBet")]
        public async Task<IActionResult> GetBet(int betId)
        {
            var bet = await _Repository.GetBet(betId);
            if(bet == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<BetForRetrieveDto>(bet));
        }

        [HttpGet]
        public async Task<IActionResult> GetBets()
        {
            var bets = await _Repository.GetBets();
            return Ok(Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets));
        }

        [HttpGet("game/{gameId:int}")]
        public async Task<IActionResult> GetBets(int gameId)
        {
            var bets = await _Repository.GetBets(new Models.Game { Id = gameId });
            return Ok(Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets));
        }

        [Authorize]
        [HttpGet("user")]
        public async Task<IActionResult> GetBetsForCurrentUser()
        {
            var currentUserId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            if (currentUserId == null)
            {
                return BadRequest("Supplied token lacks information");
            }
            var bets = await _Repository.GetBets(new ApplicationUser { Id = currentUserId.Value });
            return Ok(Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets));
        }


        [HttpGet("user/{username}")]
        public async Task<IActionResult> GetBetsForUser(string username, int leagueId)
        {
            var bets = await _Repository.GetBetsForUserName(new ApplicationUser { UserName = username }, leagueId);
            var mapped = Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets).OrderBy(x => x.GameStartedOn);
            var accumulated = 0;
            foreach(var bet in mapped)
            {
                accumulated += bet.AwardedPoints.HasValue ? bet.AwardedPoints.Value : 0;
                bet.AccumulatedScore = accumulated;                
            }

            return Ok(mapped);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddBet([FromBody]BetForCreationDto betDto)
        {
            var game = await _GameRepository.GetGameAsync(betDto.GameId);

            if(game == null)
            {
                ModelState.AddModelError(nameof(betDto.GameId), "Not a valid game id");
                return BadRequest(ModelState);
            }
            if(game.IsOpenForBets == false)
            {
                ModelState.AddModelError(nameof(betDto.GameId), "Not open for bets");
            }
            
            var bet = Mapper.Map<Bet>(betDto);
            var currentUserId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            if (currentUserId == null)
            {
                return BadRequest("Supplied token lacks information");
            }
            bet.User = new ApplicationUser { Id = currentUserId.Value };
            bet = await _Repository.AddBet(bet);
            return CreatedAtRoute("GetBet", new { betId = bet.Id }, Mapper.Map<BetForRetrieveDto>(bet));
        }

    }
}
