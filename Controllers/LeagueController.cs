using AutoMapper;
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
