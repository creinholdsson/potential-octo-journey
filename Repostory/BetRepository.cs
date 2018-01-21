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
            bet.User = _DbContext.Users.FirstOrDefault(x => x.Id == bet.User.Id);
            bet.Game = _DbContext.Game.FirstOrDefault(x => x.Id == bet.Game.Id);

            _DbContext.Bets.Add(bet);
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
            return await _DbContext.Bets.ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBets(Game game)
        {
            return await _DbContext.Bets.Where(x => x.Game.Id == game.Id).ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBets(ApplicationUser user)
        {
            return await _DbContext.Bets.Where(x => x.User.Id == user.Id).ToListAsync();
        }

        public async Task<IEnumerable<Bet>> GetBetsForUserName(ApplicationUser user)
        {
            return await _DbContext.Bets.Where(x => x.User.UserName == user.UserName).ToListAsync();
        }
    }
}
