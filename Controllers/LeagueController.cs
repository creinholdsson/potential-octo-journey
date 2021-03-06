﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
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
    [Route("/api/leagues")]
    public class LeagueController: Controller
    {
        public static readonly string CACHE_KEY_TOP_LIST = "CACHE_KEY_LEAGUE_TOPLIST";
        public static readonly string CACHE_KEY_LEAGUE = "CACHE_KEY_LEAGUE";
        private ILeagueRepository _Repository;
        private ILogger<LeagueController> _Logger;
        private IMemoryCache _Cache;

        public LeagueController(ILeagueRepository repository, ILogger<LeagueController> logger, IMemoryCache memoryCache)
        {
            _Repository = repository;
            _Logger = logger;
            _Cache = memoryCache;
        }

        [HttpGet]
        public async Task<IActionResult> GetLeagues()
        {
            var leagues = await _Repository.GetLeaguesAsync();

            return Ok(Mapper.Map<IEnumerable<LeagueForRetrieveDto>>(leagues));
        }

        [HttpGet("{leagueId:int}", Name = "GetLeague")]
        public async Task<IActionResult> GetLeague(int leagueId)
        {
            var league = await _Repository.GetLeagueAsync(leagueId);

            if(league == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<LeagueForRetrieveDto>(league));
        }

        [HttpGet("{leagueUrl}")]
        public async Task<IActionResult> GetLeagueByUrl(string leagueUrl)
        {
            LeagueForRetrieveDto leagueDto;
            if(_Cache.TryGetValue(CACHE_KEY_LEAGUE + leagueUrl, out leagueDto) == false)
            {
                var league = await _Repository.GetLeagueAsync(leagueUrl);

                if (league == null)
                {
                    return NotFound();
                }
                leagueDto = Mapper.Map<LeagueForRetrieveDto>(league);
                _Cache.Set(CACHE_KEY_LEAGUE + leagueUrl, leagueDto);
            }
            
            return Ok(leagueDto);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddLeague([FromBody] LeagueForCreationDto leagueDto)
        {
            if(ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var league = Mapper.Map<League>(leagueDto);
            league = await _Repository.AddLeagueAsync(league);

            return CreatedAtRoute("GetLeague", new { leagueId = league.Id }, Ok(Mapper.Map<LeagueForRetrieveDto>(league)));
        }

        [Authorize]
        [HttpDelete("{leagueId:int}")]
        public async Task<IActionResult> DeleteLeague(int leagueId)
        {
            var league = new League { Id = leagueId };
            await _Repository.DeleteLeagueAsync(league);
            return NoContent();
        }

        [HttpGet("{leagueId:int}/rules")]
        public IActionResult GetRules(int leagueId)
        {
            if(leagueId == 2 || leagueId == 1002)
            {
                return Ok(new { Rules =  @"<p>Genom att registrera dig på https://speltips.azurewebsites.net/rysskampen godkänner du att betala 50kr till slutsegraren. 
                            Tävlingen består av att Tippa slutresultat inkl ev avgörande med straffsparkar. Poäng utdelas för både resultat och segrare. Antal poäng bestäms av vilket odds ett visst resultat och vinnare har. </p>
                            <p>Exempel med 10 deltagare: <br />
                            Sve - Dan slutresultat 1 - 0. <br />
                            2 deltagare har tippat 1 - 0 och får 5 poäng plus 2, 5 poäng då 4 deltagare hade Sve som segrare. <br />
                            Samtliga matcher i VM kommer att vara spelbara. <br />
                            Det är möjligt att lägga in eller ändra sitt tips fram till spelstopp. </p>
                            <p>Tävlingen är i form av seriespel, dvs mest poäng när VM avslutas utser vinnaren som håvar in hela potten dvs samtliga medspelares insatser á 50kr. <br />
                            Tävlingsledningen tar inget ansvar för tekniska problem, dopade idrottsutövare och matchfixning.</p>" });
            }

            return Ok("");
        }
    

        [HttpGet("{leagueId:int}/toplist")]
        public async Task<IActionResult> GetToplist(int leagueId)
        {
            IEnumerable<UserForRetrieve> usersForRetrieve;
            var cacheKey = CACHE_KEY_TOP_LIST + leagueId;

            if(_Cache.TryGetValue(cacheKey, out usersForRetrieve) == false)
            {
                var topList = await _Repository.GetTopList(new League { Id = leagueId });
                var topListRanked = topList.Select(s => new ApplicationUser
                {
                    Id = s.Id,
                    UserName = s.UserName,
                    TotalPoints = s.TotalPoints,
                    Rank = topList.Count(x => x.TotalPoints > s.TotalPoints) + 1
                });
                usersForRetrieve = Mapper.Map<IEnumerable<UserForRetrieve>>(topListRanked.OrderBy(x => x.Rank));
                var leader = usersForRetrieve.FirstOrDefault();
                if(leader != null)
                {
                    foreach(var user in usersForRetrieve)
                    {
                        user.TrailingPoints = user.TotalPoints - leader.TotalPoints;
                    }
                }

                _Cache.Set(cacheKey, usersForRetrieve);
            }

            return Ok(usersForRetrieve);
        }

    }
}
