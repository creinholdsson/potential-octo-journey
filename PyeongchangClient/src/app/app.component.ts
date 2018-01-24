import {Component, OnInit} from '@angular/core';

import { OpenGamesComponent } from './open-games/open-games.component';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor() { }
    
    ngOnInit() {
        
    }
    
    
}
