import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserForCreation } from '../domain/auth/user-for-creation';
import { User } from '../domain/auth/user';
import {Observable} from 'rxjs/Observable';
import { $ } from 'protractor';


@Injectable()
export class AuthenticationService {
  private usersBaseUrl = environment.apiBaseUrl + 'api/auth/';

  constructor(private httpClient: HttpClient, ) { }

  createUser(user: UserForCreation) {
    return this.httpClient.post<User>(this.usersBaseUrl + '/register', user);
  }

  getUser() : User {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined) {
      var a = new User();
      Object.assign(a, user);
      return a;
    }
    return null;
  }

  getToken() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined) {
      return user.token;
    }
  }

  signIn(username: string, password: string) : Promise<Boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      this.httpClient.post<User>(this.usersBaseUrl + 'signin/', { 'username': username, 'password': password }).toPromise().then(
        result => {
          localStorage.setItem('user', JSON.stringify(result));
          resolve(true);
        }, reject => {
          reject(false);
        }
      );
    });
    return promise;
  }
}
