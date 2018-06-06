using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Retrieve
{
    public class GameForRetrieveDto
    {
        public int Id { get; set; }
        public int SportId { get; set; }
        public int LeagueId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartsOn { get; set; }
        public int GameType { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public bool IsOpenForBets { get { return DateTime.Now < StartsOn; } }

        public int PointsResult { get; set; }
        public int? PointsWinner { get; set; }

        public string SportName { get; set; }
        public string SportIcon { get; set; }
        public IEnumerable<string> Bets { get; set; }
        public bool HasUserPlacedBet { get; set; }
        public bool IsConcluded { get; set; }

        public TeamForRetrieve Team1 { get; set; }
        public TeamForRetrieve Team2 { get; set; }

    }
}
