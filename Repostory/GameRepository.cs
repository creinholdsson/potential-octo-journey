using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PyeongchangKampen.Models;

namespace PyeongchangKampen.Repostory
{
    public class GameRepository : IGameRepository
    {
        private ApplicationDbContext _DbContext;

        public GameRepository(ApplicationDbContext context)
        {
            _DbContext = context;
        }
        public async Task<Game> AddGameAsync(Game game)
        {
            game.League = _DbContext.Leagues.FirstOrDefault(x => x.Id == game.League.Id);
            game.Sport = _DbContext.Sports.FirstOrDefault(x => x.Id == game.Sport.Id);

            _DbContext.Game.Add(game);
            await _DbContext.SaveChangesAsync();
            return game;
        }

        public async Task DeleteGameAsync(Game game)
        {
            _DbContext.Game.Remove(game);
            await _DbContext.SaveChangesAsync();
        }

        public async Task<Game> GetGameAsync(int gameId)
        {
            return await _DbContext.Game.FindAsync(gameId);
        }

        public async Task<IEnumerable<Game>> GetGamesAsync()
        {
            return await _DbContext.Game.ToListAsync();
        }

        public async Task<IEnumerable<Game>> GetGamesAsync(int leagueId)
        {
            return await _DbContext.Game.Where(x => x.League.Id == leagueId).ToListAsync();
        }
    }
}
