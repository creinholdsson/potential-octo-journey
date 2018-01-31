using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PyeongchangKampen.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using PyeongchangKampen.Models;
using PyeongchangKampen.Repostory;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using System.IO;
using Serilog;

namespace PyeongchangKampen
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        private IHostingEnvironment _HostingEnvironment;

        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            _HostingEnvironment = env;
        }

        

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            if (_HostingEnvironment.IsProduction())
            {
                //services.Configure<MvcOptions>(options =>
                //{
                //    options.Filters.Add(new RequireHttpsAttribute());
                //});
            }

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                
                options.UseSqlServer(Configuration["DefaultConnectionString"]);
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<ILeagueRepository, LeagueRepository>();
            services.AddTransient<ISportRepository, SportRepository>();
            services.AddTransient<IGameRepository, GameRepository>();
            services.AddTransient<IBetRepository, BetRepository>();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredUniqueChars = 1;

                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);

                options.User.RequireUniqueEmail = true;
                options.SignIn.RequireConfirmedEmail = false;
            });

            services.AddAuthentication(options=>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options=>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = false,
                    ValidIssuer = Configuration["Token:Issuer"],
                    ValidAudience = Configuration["Token:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:SigningKey"]))
                };
            });

            services.Configure<TokenConfigurationParameters>(options => Configuration.GetSection("Token").Bind(options));

            // Add service and create Policy with options
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var seriLogger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.FromLogContext()
                .WriteTo.ApplicationInsightsEvents(Configuration.GetValue<string>("ApplicationInsights:InstrumentationKey"))
                .CreateLogger();

            loggerFactory.AddSerilog();

            seriLogger.Information("Serilog have started");
            seriLogger.Information("Starting up logging for {Name}", typeof(Startup).Namespace);

            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });


            app.UseDefaultFiles();
            app.UseStaticFiles();

            //if (env.IsProduction())
            //{

            //    var options = new RewriteOptions()
            //        .AddRedirectToHttpsPermanent();

            //    app.UseRewriter(options);
            //}

            

            

            Mapping.MappingConfiguration.ConfigureMapping();

            app.UseCors("CorsPolicy");

            app.UseAuthentication();

            
            
            app.UseMvc();
        }
    }
}
