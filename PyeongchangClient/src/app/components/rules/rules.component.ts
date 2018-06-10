import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules: string = '';
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.leagueService.getRules(league.id).subscribe(rules => {
        this.rules = rules.rules;
      })
    })
  }

}
