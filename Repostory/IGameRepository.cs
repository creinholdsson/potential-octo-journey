using PyeongchangKampen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Repostory
{
    public interface IGameRepository
    {
        Task<Game> AddGameAsync(Game game);
        Task<IEnumerable<Game>> GetGamesAsync();
        Task<IEnumerable<Game>> GetGamesAsync(int leagueId);
        Task<Game> GetGameAsync(int gameId);
        Task DeleteGameAsync(Game game);
        Task UpdateGame(Game game);
    }
}
