using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PyeongchangKampen.Migrations
{
    public partial class AddedOdds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PointsResult",
                table: "Game",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "ScoreType",
                table: "Game",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ScoreType",
                table: "Game");

            migrationBuilder.AlterColumn<int>(
                name: "PointsResult",
                table: "Game",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
