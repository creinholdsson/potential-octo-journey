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
            if (game.Team1 != null)
            {
                game.Team1 = _DbContext.Teams.FirstOrDefault(x => x.Id == game.Team1.Id);
                game.Team2 = _DbContext.Teams.FirstOrDefault(x => x.Id == game.Team2.Id);
            }

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
            return await _DbContext.Game
                .Include(x=>x.Sport)
                .Include(x=>x.League)
                .Include(x=>x.Bets)
                .Include(x => x.Team1)
                .Include(x => x.Team2)
                .FirstOrDefaultAsync(x=>x.Id == gameId);
        }

        public async Task<IEnumerable<Game>> GetGamesAsync()
        {
            return await _DbContext.Game.Include(x=>x.Sport).Include(x=>x.Bets).ToListAsync();
        }

        public async Task<IEnumerable<Game>> GetGamesAsync(int leagueId)
        {
            return await _DbContext.Game
                .Where(x => x.League.Id == leagueId)
                .Include(x=>x.Sport)
                .Include(x=>x.Bets)
                .Include(x=>x.Team1)
                .Include(x=>x.Team2).ToListAsync();
        }

        public async Task UpdateGame(Game game)
        {
            _DbContext.Game.Update(game);
            await _DbContext.SaveChangesAsync();
        }
    }
}
