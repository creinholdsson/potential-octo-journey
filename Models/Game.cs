using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class Game
    {
        public int Id { get; set; }
        public Sport Sport { get; set; }
        public League League { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartsOn { get; set; }
        public GameType GameType { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
    }

    public enum GameType
    {
        Result,
        Placement
    }

}
