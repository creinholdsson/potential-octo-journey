﻿using AutoMapper;
using PyeongchangKampen.Models;
using PyeongchangKampen.Models.DTO.Creation;
using PyeongchangKampen.Models.DTO.Retrieve;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Mapping
{
    public class MappingConfiguration
    {
        public static void ConfigureMapping()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<League, LeagueForRetrieveDto>()
                    .ForMember(dest => dest.Id, context => context.MapFrom(src => src.Id))
                    .ForMember(dest => dest.Name, context => context.MapFrom(src => src.Name));

                config.CreateMap<LeagueForCreationDto, League>()
                    .ForMember(dest => dest.Name, context => context.MapFrom(src => src.Name))
                    .ForMember(dest => dest.Id, context => context.Ignore())
                    .ForMember(dest => dest.Games, context => context.Ignore())
                    .ForMember(dest => dest.LeagueSports, context => context.Ignore());

                config.CreateMap<Sport, SportForRetrieveDto>()
                    .ForMember(dest => dest.Id, context => context.MapFrom(src => src.Id))
                    .ForMember(dest => dest.Name, context => context.MapFrom(src => src.Name))
                    .ForMember(dest => dest.Icon, context => context.MapFrom(src => src.Icon));

                config.CreateMap<SportForCreationDto, Sport>()
                    .ForMember(dest => dest.Name, context => context.MapFrom(src => src.Name))
                    .ForMember(dest => dest.Icon, context => context.MapFrom(src => src.Icon))
                    .ForMember(dest => dest.Games, context => context.Ignore())
                    .ForMember(dest => dest.Id, context => context.Ignore())
                    .ForMember(dest => dest.LeagueSports, context => context.Ignore());

                config.CreateMap<Game, GameForRetrieveDto>()
                    .ForMember(dest=>dest.Description, context=>context.MapFrom(src=>src.Description))
                    .ForMember(dest => dest.Id, context => context.MapFrom(src => src.Id))
                    .ForMember(dest => dest.LeagueId, context => context.ResolveUsing(src => src.League == null ? default(int) : src.League.Id))
                    .ForMember(dest => dest.ScoreTeam1, context => context.MapFrom(src => src.ScoreTeam1))
                    .ForMember(dest => dest.ScoreTeam2, context => context.MapFrom(src => src.ScoreTeam2))
                    .ForMember(dest => dest.SportId, context => context.ResolveUsing(src => src.Sport == null ? default(int) : src.Sport.Id))
                    .ForMember(dest => dest.StartsOn, context => context.MapFrom(src => src.StartsOn))
                    .ForMember(dest => dest.Title, context => context.MapFrom(src => src.Title));

                config.CreateMap<GameForCreationDto, Game>()
                    .ForMember(dest => dest.Description, context => context.MapFrom(src => src.Description))
                    .ForMember(dest => dest.GameType, context => context.ResolveUsing(src => (GameType)src.GameType))
                    .ForMember(dest => dest.Title, context => context.MapFrom(src => src.Title))
                    .ForMember(dest => dest.StartsOn, context => context.MapFrom(src => src.StartsOn))
                    .ForMember(dest => dest.Sport, context => context.ResolveUsing(src => new Sport { Id = src.SportId }))
                    .ForMember(dest => dest.League, context => context.ResolveUsing(src => new League { Id = src.LeagueId }))
                    .ForMember(dest => dest.ScoreTeam1, context => context.Ignore())
                    .ForMember(dest => dest.ScoreTeam2, context => context.Ignore())
                    .ForMember(dest => dest.Id, context => context.Ignore());

                config.CreateMap<Bet, BetForRetrieveDto>()
                    .ForMember(dest => dest.AwardedPoints, context => context.MapFrom(src => src.AwardedPoints))
                    .ForMember(dest => dest.CreatedOn, context => context.MapFrom(src => src.CreatedOn))
                    .ForMember(dest => dest.GameId, context => context.ResolveUsing(src => src.Game == null ? default(int) : src.Game.Id))
                    .ForMember(dest => dest.Id, context => context.MapFrom(src => src.Id))
                    .ForMember(dest => dest.ScoreTeam1, context => context.MapFrom(src => src.ScoreTeam1))
                    .ForMember(dest => dest.ScoreTeam2, context => context.MapFrom(src => src.ScoreTeam2))
                    .ForMember(dest => dest.UserId, context => context.ResolveUsing(src => src.User == null ? null : src.User.Id))
                    .ForMember(dest => dest.GameTitle, context => context.ResolveUsing(src => src.Game == null ? null : src.Game.Title))
                    .ForMember(dest => dest.UserName, context => context.ResolveUsing(src => src.User == null ? null : src.User.UserName));

                config.CreateMap<BetForCreationDto, Bet>()
                    .ForMember(dest => dest.AwardedPoints, context => context.Ignore())
                    .ForMember(dest => dest.CreatedOn, context => context.ResolveUsing(src => DateTime.Now))
                    .ForMember(dest => dest.Game, context => context.ResolveUsing(src => new Game { Id = src.GameId }))
                    .ForMember(dest => dest.ScoreTeam1, context => context.MapFrom(src => src.ScoreTeam1))
                    .ForMember(dest => dest.ScoreTeam2, context => context.MapFrom(src => src.ScoreTeam2))
                    .ForMember(dest => dest.User, context => context.Ignore())
                    .ForMember(dest => dest.Id, context => context.Ignore());

                config.CreateMap<ApplicationUser, UserForRetrieve>()
                    .ForMember(dest => dest.Id, context => context.MapFrom(src => src.Id))
                    .ForMember(dest => dest.Username, context => context.MapFrom(src=>src.UserName));
            });

            

            Mapper.AssertConfigurationIsValid();
        }
    }
}
