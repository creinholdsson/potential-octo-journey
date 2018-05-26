import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameService } from '../services/game.service';
import { User } from '../domain/auth/user';
import { League } from '../domain/league';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {
  @Input() league: League;
  topList: User[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    
  }

  getTopList() {
    this.gameService.getTopList().subscribe(toplist => {
      this.topList = toplist;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.league) {
      this.getTopList();
    }
  }
}
