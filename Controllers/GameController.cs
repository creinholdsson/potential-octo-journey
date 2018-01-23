using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PyeongchangKampen.Models;
using PyeongchangKampen.Models.DTO.Creation;
using PyeongchangKampen.Models.DTO.Retrieve;
using PyeongchangKampen.Repostory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("/api/games")]
    public class GameController : Controller
    {
        private IGameRepository _Repository;
        private ILogger<GameController> _Logger;

        public GameController(IGameRepository repository, ILogger<GameController> logger)
        {
            _Repository = repository;
            _Logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetGames()
        {
            var games = await _Repository.GetGamesAsync();
            return Ok(Mapper.Map<IEnumerable<GameForRetrieveDto>>(games));
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

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddGame([FromBody]GameForCreationDto gameDto)
        {
            var game = Mapper.Map<Game>(gameDto);
            game = await _Repository.AddGameAsync(game);
            return CreatedAtRoute("GetGame", new { gameId = game.Id }, Ok(Mapper.Map<GameForRetrieveDto>(game)));
        }

    }
}
