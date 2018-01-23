using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Retrieve
{
    public class BetForRetrieveDto
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int GameId { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ScoreTeam1 { get; set; }
        public int? ScoreTeam2 { get; set; }
        public int? AwardedPoints { get; set; }

        public string UserName { get; set; }
        public string GameTitle { get; set; }
    }
}
