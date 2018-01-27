import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../domain/game';
import { CardModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GameService } from '../services/game.service';
import { HasPermissionDirective } from '../directives/has-permission.directive';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() gameType: string;
  games: Game[];

  constructor(private gameService: GameService) { }

  getOpenGames(): void {
    
    this.gameService.getGames(this.gameType).subscribe(games=> this.games = games);
  }

  ngOnInit() {
    this.getOpenGames();
  }

}
