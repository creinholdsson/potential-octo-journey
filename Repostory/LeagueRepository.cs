using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PyeongchangKampen.Models;

namespace PyeongchangKampen.Repostory
{
    public class LeagueRepository : ILeagueRepository
    {
        private ApplicationDbContext _DbContext;

        public LeagueRepository(ApplicationDbContext context)
        {
            _DbContext = context;
        }
        public async Task<League> AddLeagueAsync(League league)
        {
            _DbContext.Leagues.Add(league);
            var result = await _DbContext.SaveChangesAsync();
            return league;
        }

        public async Task DeleteLeagueAsync(League league)
        {
            _DbContext.Leagues.Remove(league);
            await _DbContext.SaveChangesAsync();
        }

        public Task<League> GetLeagueAsync(int id)
        {
            return _DbContext.Leagues.FindAsync(id);
        }

        public Task<League> GetLeagueAsync(string url)
        {
            return _DbContext.Leagues.FirstOrDefaultAsync(x => x.Url.Equals(url, StringComparison.InvariantCultureIgnoreCase));
        }

        public async Task<IEnumerable<League>> GetLeaguesAsync()
        {
            return await _DbContext.Leagues.ToListAsync();
        }

        
        public async Task<IEnumerable<ApplicationUser>> GetTopList(League league)
        {
            var userWithBets = _DbContext.Users.Include(x => x.Bets).Where(x=> x.Bets.Where(y => y.Game.League.Id == league.Id).Any());
            return await userWithBets.Select(x => new ApplicationUser { Id = x.Id, UserName = x.UserName, TotalPoints = x.Bets.Where(y=>y.Game.League.Id == league.Id).Sum(y => y.AwardedPoints.HasValue ? y.AwardedPoints.Value : 0) }).ToListAsync();
        }
    }
}
