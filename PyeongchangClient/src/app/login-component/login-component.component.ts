import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication-service.service';
import { User } from '../domain/auth/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  username: string = null;
  password: string = null;
  isLoggedIn: boolean = false;
  user: User = null;
  logonFailed: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }



  login() {
    this.logonFailed = false;
    this.authenticationService.signIn(this.username, this.password).then(result=> {
      this.user = this.authenticationService.getUser();
    }, rejected => {
      this.logonFailed = true;
      this.user = null;
    });
  }

  ngOnInit() {
    this.user = this.authenticationService.getUser();
    this.authenticationService.getEmitter().asObservable().subscribe(x=> {
      this.user = this.authenticationService.getUser();
    })
  }

  signOut() {
    this.authenticationService.signOut();
    this.user = null;
  }

}
