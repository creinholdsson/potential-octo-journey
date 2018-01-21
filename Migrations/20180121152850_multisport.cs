using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PyeongchangKampen.Migrations
{
    public partial class multisport : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sports_Leagues_LeagueId",
                table: "Sports");

            migrationBuilder.DropIndex(
                name: "IX_Sports_LeagueId",
                table: "Sports");

            migrationBuilder.DropColumn(
                name: "LeagueId",
                table: "Sports");

            migrationBuilder.CreateTable(
                name: "LeagueSports",
                columns: table => new
                {
                    LeagueId = table.Column<int>(nullable: false),
                    SportId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeagueSports", x => new { x.LeagueId, x.SportId });
                    table.ForeignKey(
                        name: "FK_LeagueSports_Leagues_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "Leagues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LeagueSports_Sports_SportId",
                        column: x => x.SportId,
                        principalTable: "Sports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LeagueSports_SportId",
                table: "LeagueSports",
                column: "SportId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LeagueSports");

            migrationBuilder.AddColumn<int>(
                name: "LeagueId",
                table: "Sports",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sports_LeagueId",
                table: "Sports",
                column: "LeagueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sports_Leagues_LeagueId",
                table: "Sports",
                column: "LeagueId",
                principalTable: "Leagues",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
