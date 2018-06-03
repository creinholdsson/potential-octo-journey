using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PyeongchangKampen.Models.DTO.Retrieve;
using PyeongchangKampen.Repostory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("api/teams")]
    public class TeamController: Controller
    {
        private ITeamRepository _TeamRepository;

        public TeamController(ITeamRepository teamRepository)
        {
            _TeamRepository = teamRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetTeams(int leagueId, int sportId)
        {
            var teams = await _TeamRepository.GetTeams(sportId, leagueId);
            return Ok(Mapper.Map<IEnumerable<TeamForRetrieve>>(teams));
        }
    }
}
