import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../domain/auth/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Bet } from '../domain/bet';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
    }
};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(username).subscribe(user =>  {
      this.user = user;
      this.userService.getUserBets(username).subscribe(bets => {
        this.initializeGraph(bets);
        this.bets = bets;
      });
    });
    
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
