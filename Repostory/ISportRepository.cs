using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public interface ISportRepository
    {
        Task<Sport> AddSportAsync(Sport sport);
        Task<Sport> GetSportAsync(int sportId);
        Task<IEnumerable<Sport>> GetSportsAsync();
        Task<IEnumerable<Sport>> GetSportsAsync(int leagueId);
        Task DeleteSportAsync(Sport sport);

    }
}
