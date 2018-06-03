import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { OptionValue } from '../domain/option-value';
import { GameForUpdate } from '../domain/game-for-update';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { LeagueService } from '../services/league.service';
import { League } from '../domain/league';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  league: League;
  gameTypes: OptionValue<string>[] = [];
  sports: OptionValue<string>[] = [];
  points: OptionValue<string>[] = [
    { label: '0',  value: 0 }, 
    { label: '1',  value: 1 },
    { label: '2',  value: 2 },
    { label: '3',  value: 3 },
    { label: '4',  value: 4 },
    { label: '5',  value: 5 },
    { label: '6',  value: 6 },
    { label: '7',  value: 7 },
    { label: '8',  value: 8 },
    { label: '9',  value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 }, 
    { label: '13', value: 13 }, 
    { label: '14', value: 14 }, 
    { label: '15', value: 15 }, 
    { label: '16', value: 16 }, 
  ];

  possibleResults: OptionValue<string>[] = [
    { label: 'Inget', value: null }
  ]

  possiblePlacements: OptionValue<string>[] = [
    { label: 'Inget', value: null }
  ]
  game : GameForUpdate = new GameForUpdate();
  gameId: number;

  constructor(private gameService: GameService, 
    private route: ActivatedRoute, 
    private router: Router,
    private messageService: MessageService,
    private leagueService: LeagueService) {
    for (let i: number = 0; i <= 50; i++) {
      if (i > 0) {
        this.possiblePlacements.push({ label: i.toString(), value: i });
      }

      this.possibleResults.push({ label: i.toString(), value: i });
    }
    this.possiblePlacements.push({ label: 'DNS', value: -2 });
    this.possiblePlacements.push({ label: 'DNF', value: -1 });
  }

  getGame(id: number) {
    this.gameService.getGame(id).subscribe(game => {
      this.game = GameForUpdate.copyFrom(game);
      this.game.startsOn = new Date(this.game.startsOn);
    });
  }
  getSports() {
    this.gameService.getSports(this.league.id).subscribe(sports => {
      this.sports = [];
      for (let sport of sports) {
        var newSport = new OptionValue<string>(0,'');
        newSport.label = sport.name;
        newSport.value = sport.id;
        this.sports.push(newSport);
      }
      this.gameTypes = [{label: 'Resultat', value: 0 }, {label: 'Placering', value: 1 }];
      
    })
  }

  ngOnInit() {
    this.gameId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
      this.getSports();
      this.getGame(this.gameId);
    })

    
  }

  updateGame() {
    this.gameService.updateGame(this.game).subscribe(game => {
      this.messageService.add({severity: 'success', summary:'Spel uppdaterat', detail: 'Spelet har uppdaterats'});
      this.router.navigate(['/game/'+this.game.id.toString()]);
    })
  }

}
