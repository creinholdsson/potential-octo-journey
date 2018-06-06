import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OptionValue } from '../domain/option-value';
import { Sport } from '../domain/sport';
import { GameService } from '../services/game.service';
import { GameForCreation } from '../domain/game-for-creation';
import { MessageService } from 'primeng/components/common/messageservice';
import { League } from '../domain/league';
import { LeagueService } from '../services/league.service';
import { GameType } from '../domain/gameType';
import { TeamService } from '../services/team.service';
import { Team } from '../domain/team';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  league: League;
  teams: OptionValue<string>[] = [];
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
  game : GameForCreation = new GameForCreation();

  constructor(
    private gameService: GameService,
    private messageSerive: MessageService,
    private leagueService: LeagueService,
    private teamService: TeamService) {
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
      this.gameTypes = [{ label: 'Resultat', value: 0 }, { label: 'Placering', value: 1 }, { label: 'Lagspel', value: GameType.TeamGame }];
    })
  }

  addGame(value) {
    console.log(this.game);
    this.gameService.addGame(this.game).subscribe(game => {
      this.messageSerive.add({ severity: 'success', summary: 'Spel skapat', detail: 'Spelet har lagts till' });
      this.initializeNewGame();
    });
  }

  ngOnInit() {
    this.leagueService.getCurrentLeague().subscribe(league => {
      this.league = league;
      this.initializeNewGame();
      this.getSports();
    });
  }

  initializeNewGame() {
    this.game = new GameForCreation();
    this.game.leagueId = this.league.id;
  }


  onSportChange() {
    this.teams = [];
    this.teamService.getTeams(this.league.id, this.game.sportId).subscribe(teams => {
      for (let team of teams) {
        var t = new OptionValue<string>(team.id, team.name);
        this.teams.push(t);
      }
    });
  }

  onTeamsChanged() {
    this.game.title = `${this.getTeamNameFromId(this.game.team1Id)}-${this.getTeamNameFromId(this.game.team2Id)}`
  }

  private getTeamNameFromId(id: number): string {
    for (let team of this.teams) {
      if (team.value == id) {
        return team.label;
      }
    }
    return '?';
  }
}
