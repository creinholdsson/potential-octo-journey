import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OptionValue } from '../domain/option-value';
import { Sport } from '../domain/sport';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  gameTypes: OptionValue<string>[] = [{label: 'Resultat', value: 0 }, {label: 'Placering', value: 2 }]
  sports: OptionValue<string>[] = [];
  selectedSport: number = 1;
  selectedGameTypes: number = 0;
  selectedStartTime: Date = null;


  constructor(private gameService: GameService) { }
  
  getSports() {
    this.gameService.getSports().subscribe(sports => {
      this.sports = [];
      for (let sport of sports) {
        var newSport = new OptionValue<string>();
        newSport.label = sport.name;
        newSport.value = sport.id;
        this.sports.push(newSport);
      }
    })
  }

  ngOnInit() {
    this.getSports();
  }

}
