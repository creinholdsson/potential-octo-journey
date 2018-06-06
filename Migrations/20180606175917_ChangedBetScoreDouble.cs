using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PyeongchangKampen.Migrations
{
    public partial class ChangedBetScoreDouble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "AwardedPoints",
                table: "Bets",
                nullable: true,
                oldClrType: typeof(int),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "AwardedPoints",
                table: "Bets",
                nullable: true,
                oldClrType: typeof(double),
                oldNullable: true);
        }
    }
}
