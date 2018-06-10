import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../services/game.service';
import { Game } from '../domain/game';
import { getDebugNode } from '@angular/core/src/debug/debug_node';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BetForCreation } from '../domain/bet-for-creation';
import { Bet } from '../domain/bet';
import { LeagueService } from '../services/league.service';
import { League } from '../domain/league';
import { GameType } from '../domain/gameType';
import { BetOdds } from '../domain/bet-odds';

interface BetOption {
  label: string,
  value: number
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  league: League;
  game: Game;
  bet: Bet;
  bets: Bet[];
  isBettingOpen: boolean = false;
  availableOptionsPlacement: BetOption[] = [];
  availableOptionsResult: BetOption[] = [];
  selectedResult1: number = 0;
  selectedResult2: number = 0;
  betOdds: BetOdds = null;


  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
    private leagueService: LeagueService
  ) {
    for (let i: number = 0; i <= 50; i++) {
      if (i > 0) {
        this.availableOptionsPlacement.push({ label: i.toString(), value: i });
      }

      this.availableOptionsResult.push({ label: i.toString(), value: i });
    }
  }

  getGame(id: number): void {
    this.gameService.getGame(id).subscribe(game => { 
      this.game = game;
      
      this.isBettingOpen = new Date(game.startsOn) > new Date();
      if (game.gameType == GameType.Result.valueOf()
        || game.gameType == GameType.TeamGame.valueOf()) {
        this.selectedResult1 = 0;
        this.selectedResult2 = 0;
      }
      else {
        this.selectedResult1 = 1;
        this.selectedResult2 = null;
      }
      this.onBetChanged(null);
    } );
  }

  getBetsForGame(gameId: number) {
    this.gameService.getBets(gameId).subscribe(bets=> {
      this.bets = bets;
    })
  }

  placeBet(): void {
    var bet = new BetForCreation();
    bet.scoreTeam1 = this.selectedResult1;
    bet.scoreTeam2 = this.selectedResult2;
    bet.gameId = this.game.id;
    
    console.log(bet);
    console.log(this.selectedResult1);
    this.gameService.placeBet(bet).subscribe(createdBet => {
      this.getBetsForGame(this.game.id);
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGame(id);
    this.getBetsForGame(id);
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
    });
  }

  onBetChanged($event: any) {
    this.gameService.getOddsForBet(this.game.id, this.selectedResult1, this.selectedResult2).subscribe(betOdds => {
      this.betOdds = betOdds;
    });

  }

}
