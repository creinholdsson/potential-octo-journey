import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Game } from '../domain/game';
import { CardModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GameService } from '../services/game.service';
import { HasPermissionDirective } from '../directives/has-permission.directive';
import { League } from '../domain/league';

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
  @Input() league: League;
  games: Game[];
  hasMoreItems: boolean = false;

  constructor(private gameService: GameService) { }

  getOpenGames(): void {
    this.gameService.getGames(this.league.id, this.gameType).subscribe(games => {
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
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.league) {
      this.getOpenGames();
    }
  }
}
