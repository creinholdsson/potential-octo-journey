using AutoMapper;
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
    [Route("/api/sports")]
    public class SportController: Controller
    {
        private ISportRepository _Repository;
        private ILogger<SportController> _Logger;

        public SportController(ISportRepository repository, ILogger<SportController> logger)
        {
            _Repository = repository;
            _Logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetSports()
        {
            var sports = await _Repository.GetSportsAsync();
            return Ok(Mapper.Map<IEnumerable<SportForRetrieveDto>>(sports));
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
