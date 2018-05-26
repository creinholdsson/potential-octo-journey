import { Component, OnInit, Input } from '@angular/core';
import { League } from '../domain/league';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  isNavbarCollapsed: boolean;
  @Input() league: League;

  constructor() { }

  ngOnInit() {
  }

}
