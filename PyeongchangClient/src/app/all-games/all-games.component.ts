import { Component, OnInit, Input } from '@angular/core';
import { League } from '../domain/league';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  league: League = null;
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
    });
  }

}
