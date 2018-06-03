using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PyeongchangKampen.Migrations
{
    public partial class addedteams : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Team1Id",
                table: "Game",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Team2Id",
                table: "Game",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ImageUrl = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SportId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Teams_Sports_SportId",
                        column: x => x.SportId,
                        principalTable: "Sports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TeamLeagues",
                columns: table => new
                {
                    LeagueId = table.Column<int>(nullable: false),
                    TeamId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeamLeagues", x => new { x.LeagueId, x.TeamId });
                    table.ForeignKey(
                        name: "FK_TeamLeagues_Leagues_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "Leagues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TeamLeagues_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Game_Team1Id",
                table: "Game",
                column: "Team1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Game_Team2Id",
                table: "Game",
                column: "Team2Id");

            migrationBuilder.CreateIndex(
                name: "IX_TeamLeagues_TeamId",
                table: "TeamLeagues",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_Teams_SportId",
                table: "Teams",
                column: "SportId");

            migrationBuilder.AddForeignKey(
                name: "FK_Game_Teams_Team1Id",
                table: "Game",
                column: "Team1Id",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Game_Teams_Team2Id",
                table: "Game",
                column: "Team2Id",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Game_Teams_Team1Id",
                table: "Game");

            migrationBuilder.DropForeignKey(
                name: "FK_Game_Teams_Team2Id",
                table: "Game");

            migrationBuilder.DropTable(
                name: "TeamLeagues");

            migrationBuilder.DropTable(
                name: "Teams");

            migrationBuilder.DropIndex(
                name: "IX_Game_Team1Id",
                table: "Game");

            migrationBuilder.DropIndex(
                name: "IX_Game_Team2Id",
                table: "Game");

            migrationBuilder.DropColumn(
                name: "Team1Id",
                table: "Game");

            migrationBuilder.DropColumn(
                name: "Team2Id",
                table: "Game");
        }
    }
}
