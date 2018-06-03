using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Update
{
    public class GameForUpdateDto
    {
        public int SportId { get; set; }
        public int LeagueId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int GameType { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public int PointsResult { get; set; }
        public int? PointsWinner { get; set; }
        public DateTime StartsOn { get; set; }
        public int? Team1Id { get; set; }
        public int? Team2Id { get; set; }
    }
}
