using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Services
{
    public interface IScoreCalculationService
    {
        double GetScoreForCorrectBet(IEnumerable<Bet> bets, Bet correctBet);
        double GetScoreForCorrectWinner(IEnumerable<Bet> bets, Bet correctBet);
    }
}
