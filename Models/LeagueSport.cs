using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class LeagueSport
    {
        public Sport Sport { get; set; }
        public int SportId { get; set; }
        public League League { get; set; }
        public int LeagueId { get; set; }
    }
}
