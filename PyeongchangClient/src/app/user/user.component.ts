import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../domain/auth/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Bet } from '../domain/bet';
import { LeagueService } from '../services/league.service';
import { League } from '../domain/league';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  league: League;
  user: User = null;
  bets: Bet[] = null;

  data : any = {
    labels: [],
    datasets: []
  }

  options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day'
      }
    }]
    },
    title: {
        display: false,
        text: 'My Title',
        fontSize: 16
    },
    legend: {
        position: 'none'
    },
    elements: {
      line: {
          tension: 0, // disables bezier curves
      }
  }
};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private leagueService: LeagueService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
      this.userService.getUser(username).subscribe(user => {
        this.user = user;
        this.userService.getUserBets(username, league.id).subscribe(bets => {
          this.initializeGraph(bets);
          this.bets = bets;
        });
      });
    })
    
    
  }

  initializeGraph(bets: Bet[]): void {
    var labels = [];
    var dataset = [{label: this.user.username, data: [], borderColor: '#4bc0c0', fill: false}];

    for(let bet of bets) {
      labels.push(new Date(bet.gameStartedOn));
      dataset[0].data.push(bet.accumulatedScore);
    }

    this.data = { labels: labels, datasets: dataset };
  }

  makeAdministrator() {
    this.userService.makeAdministrator(this.user.username).subscribe(x=>{
      this.messageService.add({severity: 'success', summary:'Användaren är administratör', detail: x});
    }, error => {
      this.messageService.add({severity: 'error', summary:'Fel', detail: `Status: ${error.status}. Detaljer: ${error.error}`});
    })
  }

}
