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
            return await _DbContext.Game.Include(x=>x.Sport).Include(x=>x.League).FirstOrDefaultAsync(x=>x.Id == gameId);
        }

        public async Task<IEnumerable<Game>> GetGamesAsync()
        {
            return await _DbContext.Game.Include(x=>x.Sport).Include(x=>x.Bets).ToListAsync();
        }

        public async Task<IEnumerable<Game>> GetGamesAsync(int leagueId)
        {
            return await _DbContext.Game.Where(x => x.League.Id == leagueId).ToListAsync();
        }

        public async Task UpdateGame(Game game)
        {
            //var sport = _DbContext.Sports.Find(game.Sport.Id);
            //var league = _DbContext.Leagues.Find(game.League.Id);
            //game.Sport = sport;
            //game.League = league;
            //_DbContext.Attach(game);
            _DbContext.Game.Update(game);
            await _DbContext.SaveChangesAsync();
        }
    }
}
