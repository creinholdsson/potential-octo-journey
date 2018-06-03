using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public interface ITeamRepository
    {
        Task<IEnumerable<Team>> GetTeams();
        Task<IEnumerable<Team>> GetTeams(int sportId, int leagueId);
    }
}
