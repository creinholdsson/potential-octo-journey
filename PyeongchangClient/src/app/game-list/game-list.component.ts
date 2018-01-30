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
  @Input() orderBy: string = 'startsOn';
  @Input() reverseOrder: boolean = false;
  @Input() itemsShown: number = 5;
  games: Game[];
  hasMoreItems: boolean = false;

  constructor(private gameService: GameService) { }

  getOpenGames(): void {
    this.gameService.getGames(this.gameType).subscribe(games=> {
      this.games = games;
      if(this.games.length > this.itemsShown) {
        this.hasMoreItems = true;
      }
    });
  }

  showMoreItems(): void {
    this.itemsShown += 5;
    if(this.itemsShown >= this.games.length) {
      this.hasMoreItems = false;
    }
  }

  ngOnInit() {
    this.getOpenGames();
  }

}
