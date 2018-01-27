using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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
        private DateTime _StartsOn;
        public DateTime StartsOn
        {
            get { return _StartsOn.Kind == DateTimeKind.Unspecified ? new DateTime(_StartsOn.Ticks, DateTimeKind.Utc) : _StartsOn; }
            set { _StartsOn = value; }

        }
        public GameType GameType { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }

        public int PointsResult { get; set; }
        public int? PointsWinner { get; set; }

        [NotMapped]
        public bool IsOpenForBets { get { return DateTime.Now < StartsOn; } }
    }

    public enum GameType
    {
        Result,
        Placement
    }

}
