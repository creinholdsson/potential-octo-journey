import { Component, OnInit } from '@angular/core';
import { League } from '../domain/league';
import { LeagueService } from '../services/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public league: League;
  constructor(private leagueService: LeagueService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
    });
  }

}
