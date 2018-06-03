using Microsoft.EntityFrameworkCore;
using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public class TeamRepository: ITeamRepository
    {
        private ApplicationDbContext _DbContext; 
        public TeamRepository(ApplicationDbContext dbContext)
        {
            _DbContext = dbContext;
        }
        public async Task<IEnumerable<Team>> GetTeams()
        {
            return await _DbContext.Teams.ToListAsync();
        }

        public async Task<IEnumerable<Team>> GetTeams(int sportId, int leagueId)
        {
            var result = await _DbContext.TeamLeagues
                .Include(x => x.Team)
                .Where(x => x.LeagueId == leagueId)
                .Select(x=>x.Team)
                .ToListAsync();
            return result.Where(x => x.SportId == sportId);
        }
    }
}
