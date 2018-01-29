using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class Bet
    {
        public int Id { get; set; }
        public ApplicationUser User { get; set; }
        public Game Game { get; set; }

        private DateTime _CreatedOn;
        public DateTime CreatedOn
        {
            get { return _CreatedOn.Kind == DateTimeKind.Unspecified ? new DateTime(_CreatedOn.Ticks, DateTimeKind.Utc) : _CreatedOn; }
            set { _CreatedOn = value; }
        }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public int? AwardedPoints { get; set; }
    }
}
