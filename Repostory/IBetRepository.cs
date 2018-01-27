using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public interface IBetRepository
    {
        Task<Bet> GetBet(int id);
        Task<IEnumerable<Bet>> GetBets();
        Task<IEnumerable<Bet>> GetBets(Game game);
        Task<IEnumerable<Bet>> GetBets(ApplicationUser user);
        Task<IEnumerable<Bet>> GetBetsForUserName(ApplicationUser user);
        Task<Bet> AddBet(Bet bet);
        Task DeleteBet(Bet bet);
        Task<Bet> UpdateBet(Bet bet);
        Task UpdateBets(IEnumerable<Bet> bets);
    }
}
