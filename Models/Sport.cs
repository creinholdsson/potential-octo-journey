using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class Sport
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public ICollection<Game> Games { get; set; }
        public ICollection<LeagueSport> LeagueSports { get; set; }
        public ICollection<Team> Teams { get; set; }
    }
}
