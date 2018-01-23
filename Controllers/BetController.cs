﻿using AutoMapper;
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
        private ILogger<BetController> _Logger;

        public BetController(IBetRepository repository, ILogger<BetController> logger)
        {
            _Repository = repository;
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
            if(currentUserId == null)
            {
                return BadRequest("Supplied token lacks information");
            }
            var bets = await _Repository.GetBets(new ApplicationUser { Id = currentUserId.Value });
            return Ok(Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets));
        }

        
        [HttpGet("user/{username}")]
        public async Task<IActionResult> GetBetsForUser(string username)
        {
            var bets = await _Repository.GetBetsForUserName(new ApplicationUser { UserName = username });
            return Ok(Mapper.Map<IEnumerable<BetForRetrieveDto>>(bets));
        }

        [Authorize]
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> AddBet([FromBody]BetForCreationDto betDto)
        {
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
