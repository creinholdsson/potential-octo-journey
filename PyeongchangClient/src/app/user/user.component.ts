import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../domain/auth/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(username).subscribe(user => this.user = user);

  }

}
