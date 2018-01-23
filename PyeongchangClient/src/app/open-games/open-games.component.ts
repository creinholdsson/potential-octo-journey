import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';
import { CardModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-open-games',
  templateUrl: './open-games.component.html',
  styleUrls: ['./open-games.component.css']
})
export class OpenGamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  getOpenGames(): void {
    this.gameService.getOpenGames().subscribe(games=> this.games = games);
  }

  ngOnInit() {
    this.getOpenGames();
  }

}
