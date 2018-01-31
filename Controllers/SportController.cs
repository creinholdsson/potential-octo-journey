using AutoMapper;
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
    [Route("/api/sports")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public class SportController: Controller
    {
        public static readonly string CACHE_KEY_SPORT;
        private ISportRepository _Repository;
        private ILogger<SportController> _Logger;
        private IMemoryCache _Cache;

        public SportController(ISportRepository repository, ILogger<SportController> logger, IMemoryCache memoryCache)
        {
            _Repository = repository;
            _Logger = logger;
            _Cache = memoryCache;
        }

        [HttpGet]
        public async Task<IActionResult> GetSports()
        {
            IEnumerable<SportForRetrieveDto> sportsForRetrieve;
            if(_Cache.TryGetValue(CACHE_KEY_SPORT, out sportsForRetrieve) == false)
            {
                var sports = await _Repository.GetSportsAsync();
                sportsForRetrieve = Mapper.Map<IEnumerable<SportForRetrieveDto>>(sports);
                _Cache.Set(CACHE_KEY_SPORT, sportsForRetrieve);
            }

            return Ok(sportsForRetrieve);
        }

        [HttpGet("{sportId:int}", Name = "GetSport")]
        public async Task<IActionResult> GetSport(int sportId)
        {
            var sport = await _Repository.GetSportAsync(sportId);

            if(sport == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<SportForRetrieveDto>(sport));
        }

        [HttpPost]
        public async Task<IActionResult> AddSport([FromBody]SportForCreationDto sportDto)
        {
            if(ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var sport = Mapper.Map<Sport>(sportDto);
            sport = await _Repository.AddSportAsync(sport);
            _Cache.Remove(CACHE_KEY_SPORT);
            return CreatedAtRoute("GetSport", new { sportId = sport.Id }, Mapper.Map<SportForRetrieveDto>(sport));
        }

        [HttpGet("league/{leagueId:int}")]
        public async Task<IActionResult> GetSportByLeague(int leagueId)
        {
            var sports = await _Repository.GetSportsAsync(leagueId);
            return Ok(Mapper.Map<IEnumerable<SportForRetrieveDto>>(sports));
        }
    }
}
