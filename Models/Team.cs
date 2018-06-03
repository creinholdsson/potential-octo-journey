using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public int SportId { get; set; }
        public Sport Sport { get; set; }
        public ICollection<TeamLeague> TeamLeagues { get; set; }
    }
}
