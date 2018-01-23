import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../services/game.service';
import { Game } from '../domain/game';
import { getDebugNode } from '@angular/core/src/debug/debug_node';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BetForCreation } from '../domain/bet-for-creation';
import { Bet } from '../domain/bet';

interface BetOption {
  label: number,
  value: number
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;
  bet: Bet;
  bets: Bet[];
  isBettingOpen: boolean = false;
  availableOptionsPlacement: BetOption[] = [
    {label: 1,  value: 1},
    {label: 2,  value: 2},
    {label: 3,  value: 3},
    {label: 4,  value: 4},
    {label: 5,  value: 5},
    {label: 6,  value: 6},
    {label: 7,  value: 7},
    {label: 8,  value: 8},
    {label: 9,  value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15}
  ];
  availableOptionsResult: BetOption[] = [
    {label: 1,  value: 1},
    {label: 2,  value: 2},
    {label: 3,  value: 3},
    {label: 4,  value: 4},
    {label: 5,  value: 5},
    {label: 6,  value: 6},
    {label: 7,  value: 7},
    {label: 8,  value: 8},
    {label: 9,  value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15}
  ];
  selectedResult1: number = 1;
  selectedResult2: number = 1;


  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getGame(id: number): void {
    this.gameService.getGame(id).subscribe(game => { 
      this.game = game; 
      this.isBettingOpen = new Date(game.startsOn) > new Date();
      if(game.gameType == 0) {
        this.selectedResult1 = 1;
        this.selectedResult2 = 1;
      }
      else {
        this.selectedResult1 = 1;
        this.selectedResult2 = null;
      }
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
      this.bet = createdBet;
      var hasBeenUpdated = false;
      for (let bet of this.bets) {
        if(bet.userId == createdBet.userId) {
          bet.scoreTeam1 = createdBet.scoreTeam1;
          bet.scoreTeam2 = createdBet.scoreTeam2;
          hasBeenUpdated = true;
          break;
        }
      }

      if(hasBeenUpdated == false) {
        this.bets.push(createdBet);
      }
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGame(id);
    this.getBetsForGame(id);
  }

}
