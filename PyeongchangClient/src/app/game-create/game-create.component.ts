import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OptionValue } from '../domain/option-value';
import { Sport } from '../domain/sport';
import { GameService } from '../services/game.service';
import { GameForCreation } from '../domain/game-for-creation';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  gameTypes: OptionValue<string>[] = []
  sports: OptionValue<string>[] = [];
  game : GameForCreation = new GameForCreation();

  constructor(private gameService: GameService, private messageSerive: MessageService) {
   }
  
  getSports() {
    this.gameService.getSports().subscribe(sports => {
      this.sports = [];
      for (let sport of sports) {
        var newSport = new OptionValue<string>();
        newSport.label = sport.name;
        newSport.value = sport.id;
        this.sports.push(newSport);
      }
      this.gameTypes = [{label: 'Resultat', value: 0 }, {label: 'Placering', value: 1 }];
    })
  }

  addGame(value) {
    console.log(this.game);
    this.gameService.addGame(this.game).subscribe(game => {
      this.messageSerive.add({severity: 'success', summary:'Spel skapat', detail: 'Spelet har lagts till'});
      this.game = new GameForCreation();
    });
  }

  ngOnInit() {
    this.getSports();
  }

}
