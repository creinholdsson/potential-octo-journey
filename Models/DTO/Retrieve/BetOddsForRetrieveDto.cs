using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Retrieve
{
    public class BetOddsForRetrieveDto
    {
        public double OddsResult { get; set; }
        public double? OddsWinner { get; set; }
    }
}
