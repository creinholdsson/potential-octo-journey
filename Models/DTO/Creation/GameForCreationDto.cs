using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Creation
{
    public class GameForCreationDto
    {
        public int SportId { get; set; }
        public int LeagueId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartsOn { get; set; }
        public int GameType { get; set; }
    }
}
