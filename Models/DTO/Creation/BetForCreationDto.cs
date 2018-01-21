using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Creation
{
    public class BetForCreationDto
    {
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public int GameId { get; set; }
    }
}
