using PyeongchangKampen.Models;
using PyeongchangKampen.Services;
using System;
using System.Collections.Generic;
using Xunit;

namespace PyeongchangKampen.Test
{
    public class ScoreCalculationServiceTests
    {
        [Fact]
        public void TestSimpleCalculationScore()
        {
            var bets = new List<Bet>();
            bets.Add(new Bet { ScoreTeam1 = 1, ScoreTeam2 = 0 });
            bets.Add(new Bet { ScoreTeam1 = 0, ScoreTeam2 = 1 });

            var correctBet = new Bet { ScoreTeam1 = 1, ScoreTeam2 = 0 };

            var scoreCalculationService = new ScoreCalculationService();

            var pointsForScore = scoreCalculationService.GetScoreForCorrectBet(bets, correctBet);

            Assert.Equal(2, pointsForScore);
        }

        [Fact]
        public void TestSimpleCalculationNoScore()
        {
            var bets = new List<Bet>();
            bets.Add(new Bet { ScoreTeam1 = 1, ScoreTeam2 = 0 });
            bets.Add(new Bet { ScoreTeam1 = 0, ScoreTeam2 = 1 });

            var correctBet = new Bet { ScoreTeam1 = 2, ScoreTeam2 = 0 };

            var scoreCalculationService = new ScoreCalculationService();

            var pointsForScore = scoreCalculationService.GetScoreForCorrectBet(bets, correctBet);

            Assert.Equal(0, pointsForScore);
        }

        [Fact]
        public void TestSimpleCalculationWinner()
        {
            var bets = new List<Bet>();
            bets.Add(new Bet { ScoreTeam1 = 1, ScoreTeam2 = 0 });
            bets.Add(new Bet { ScoreTeam1 = 0, ScoreTeam2 = 1 });

            var correctBet = new Bet { ScoreTeam1 = 2, ScoreTeam2 = 0 };

            var scoreCalculationService = new ScoreCalculationService();

            var pointsForScore = scoreCalculationService.GetScoreForCorrectWinner(bets, correctBet);

            Assert.Equal(2, pointsForScore);
        }
    }
}
