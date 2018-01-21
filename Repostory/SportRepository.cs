using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PyeongchangKampen.Models;

namespace PyeongchangKampen.Repostory
{
    public class SportRepository : ISportRepository
    {
        private ApplicationDbContext _DbContext;

        public SportRepository(ApplicationDbContext context)
        {
            _DbContext = context;
        }
        public async Task<Sport> AddSportAsync(Sport sport)
        {
            _DbContext.Sports.Add(sport);
            await _DbContext.SaveChangesAsync();
            return sport;
        }

        public async Task DeleteSportAsync(Sport sport)
        {
            _DbContext.Sports.Remove(sport);
            await _DbContext.SaveChangesAsync();
        }

        public async Task<Sport> GetSportAsync(int sportId)
        {
            return await _DbContext.Sports.FindAsync(sportId);
        }

        public async Task<IEnumerable<Sport>> GetSportsAsync()
        {
            return await _DbContext.Sports.ToListAsync();
        }

        public async Task<IEnumerable<Sport>> GetSportsAsync(int leagueId)
        {
            return await _DbContext.LeagueSports
                .Include(x => x.Sport)
                .Where(x => x.LeagueId == leagueId)
                .Select(x => x.Sport)
                .ToListAsync();
        }
    }
}
