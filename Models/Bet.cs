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
        public DateTime CreatedOn { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public int? AwardedPoints { get; set; }
    }
}
