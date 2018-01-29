using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PyeongchangKampen.Models;

namespace PyeongchangKampen.Repostory
{
    public class BetRepository : IBetRepository
    {
        private ApplicationDbContext _DbContext;

        public BetRepository(ApplicationDbContext context)
        {
            _DbContext = context;
        }
        public async Task<Bet> AddBet(Bet bet)
        {
            var user = await _DbContext.Users.FirstOrDefaultAsync(x => x.Id == bet.User.Id);
            var game = await _DbContext.Game.FirstOrDefaultAsync(x => x.Id == bet.Game.Id);

            var existingBet = await _DbContext.Bets.FirstOrDefaultAsync(x => x.Game.Id == bet.Game.Id && x.User.Id == bet.User.Id);

            if(existingBet != null)
            {
                existingBet.ScoreTeam1 = bet.ScoreTeam1;
                existingBet.ScoreTeam2 = bet.ScoreTeam2;
                return await UpdateBet(existingBet);
            }

            _DbContext.Bets.Add(bet);
            await _DbContext.SaveChangesAsync();
            return bet;
        }

        public async Task<Bet> UpdateBet(Bet bet)
        {
            _DbContext.Bets.Update(bet);
            await _DbContext.SaveChangesAsync();
            return bet;
        }

        public async Task DeleteBet(Bet bet)
        {
            _DbContext.Bets.Remove(bet);
            await _DbContext.SaveChangesAsync();
        }

        public async Task<Bet> GetBet(int id)
        {
            return await _DbContext.Bets.FindAsync(id);
        }

        public async Task<IEnumerable<Bet>> GetBets()
        {
            return await _DbContext.Bets
                .Include(x=>x.Game)
                .Include(x=>x.User)
                .ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBets(Game game)
        {
            return await _DbContext.Bets
                .Where(x => x.Game.Id == game.Id)
                .Include(x => x.Game)
                .Include(x => x.User)
                .ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBets(ApplicationUser user)
        {
            return await _DbContext.Bets
                .Include(x => x.User)
                .Include(x => x.Game)
                .Where(x => x.User.Id == user.Id)
                .ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBetsForUserName(ApplicationUser user, int leagueId)
        {
            return await _DbContext.Bets
                .Include(x => x.User)
                .Include(x => x.Game)
                .ThenInclude(x => x.League)
                .Where(x => x.User.UserName == user.UserName 
                    && x.Game.League.Id == leagueId
                    && x.Game.ScoreTeam1.HasValue)
                .ToListAsync();
        }

        public async Task UpdateBets(IEnumerable<Bet> bets)
        {
            _DbContext.Bets.UpdateRange(bets);
            await _DbContext.SaveChangesAsync();
        }
    }
}
