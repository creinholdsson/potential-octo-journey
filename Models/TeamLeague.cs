using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class TeamLeague
    {
        public int TeamId { get; set; }
        public int LeagueId { get; set; }
        public Team Team { get; set; }
        public League League { get; set; }
    }
}
