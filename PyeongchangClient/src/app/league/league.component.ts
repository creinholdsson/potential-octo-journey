import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { LeagueService } from '../services/league.service';
import { ActivatedRoute } from '@angular/router';
import { League } from '../domain/league';

@Component({
  selector: 'league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  msgs: any[];
  league: League;
  constructor(private leagueService: LeagueService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let leagueUrl = this.route.snapshot.paramMap.get('leagueUrl');
    this.leagueService.getLeague(leagueUrl).subscribe(league => this.league = league);
  }


}
