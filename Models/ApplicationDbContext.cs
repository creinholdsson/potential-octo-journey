using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<LeagueSport>().HasKey(x => new { x.LeagueId, x.SportId });

            builder.Entity<LeagueSport>()
                .HasOne(x => x.Sport)
                .WithMany(s => s.LeagueSports)
                .HasForeignKey(y => y.SportId);

            builder.Entity<LeagueSport>()
                .HasOne(x => x.League)
                .WithMany(l => l.LeagueSports)
                .HasForeignKey(y => y.LeagueId);

            builder.Entity<TeamLeague>().HasKey(x => new { x.LeagueId, x.TeamId });

            builder.Entity<TeamLeague>()
                .HasOne(x => x.Team)
                .WithMany(t => t.TeamLeagues)
                .HasForeignKey(y => y.TeamId);

            builder.Entity<TeamLeague>()
                .HasOne(l => l.League)
                .WithMany(l => l.TeamLeagues)
                .HasForeignKey(l => l.LeagueId);

        }

        public DbSet<Bet> Bets { get; set; }
        public DbSet<Game> Game { get; set; }
        public DbSet<League> Leagues { get; set; }
        public DbSet<Sport> Sports { get; set; }
        public DbSet<LeagueSport> LeagueSports { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<TeamLeague> TeamLeagues { get; set; }
    }
}
