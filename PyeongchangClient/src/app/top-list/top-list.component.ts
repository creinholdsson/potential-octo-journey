import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { User } from '../domain/auth/user';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  topList: User[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getTopList();
  }

  getTopList() {
    this.gameService.getTopList().subscribe(toplist => {
      this.topList = toplist;
    });
  }

}
