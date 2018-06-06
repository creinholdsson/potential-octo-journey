using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PyeongchangKampen.Models;

namespace PyeongchangKampen.Services
{
    public class ScoreCalculationService : IScoreCalculationService
    {
        public double GetScoreForCorrectBet(IEnumerable<Bet> bets, Bet correctBet)
        {
            var maximumPoints = bets.Count();
            var correctBetsCount = bets.Count(x => x.ScoreTeam1 == correctBet.ScoreTeam1 && x.ScoreTeam2 == correctBet.ScoreTeam2);
            if (correctBetsCount == 0)
            {
                return 0;
            }
            return maximumPoints / (double)correctBetsCount;
        }

        public double GetScoreForCorrectWinner(IEnumerable<Bet> bets, Bet correctBet)
        {
            var maximumPoints = bets.Count();
            int correctBetsCount;
            if (correctBet.ScoreTeam1.Value > correctBet.ScoreTeam2.Value)
            {
                correctBetsCount = bets.Count(x => x.ScoreTeam1.Value > x.ScoreTeam2.Value);
            }
            else if (correctBet.ScoreTeam1.Value == correctBet.ScoreTeam2.Value)
            {
                correctBetsCount = bets.Count(x => x.ScoreTeam1.Value == x.ScoreTeam2.Value);
            }
            else
            {
                correctBetsCount = bets.Count(x => x.ScoreTeam1.Value < x.ScoreTeam2.Value);
            }

            if(correctBetsCount == 0)
            {
                return 0;
            }

            return maximumPoints / (double)correctBetsCount;
        }
    }
}
