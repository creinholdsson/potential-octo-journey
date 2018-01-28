using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public interface ILeagueRepository
    {
        Task<IEnumerable<League>> GetLeaguesAsync();
        Task<League> GetLeagueAsync(int id);
        Task<League> AddLeagueAsync(League league);
        Task DeleteLeagueAsync(League leage);
        Task<IEnumerable<ApplicationUser>> GetTopList(League league);
    }
}
