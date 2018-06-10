using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public interface IBet
    {
        int? ScoreTeam1 { get; }
        int? ScoreTeam2 { get; }
    }
}
