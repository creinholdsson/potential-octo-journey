import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserForCreation } from '../domain/auth/user-for-creation';
import { User } from '../domain/auth/user';
import { Observable } from 'rxjs/Observable';
import { $ } from 'protractor';
import { UsernameAvailableResponse } from '../domain/auth/username-available-response';
//import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { AuthenticationEvent } from '../domain/auth/authentication-event';


@Injectable()
export class AuthenticationService {
  dispatcher : EventEmitter<AuthenticationEvent> =  new EventEmitter();
  user : User = null;
  private usersBaseUrl = environment.apiBaseUrl + 'api/auth/';

  constructor(private httpClient: HttpClient, 
    private messageService: MessageService, 
    private router: Router) {
      this.user = this.getUserFromLocalStorage();
    }



  createUser(user: UserForCreation) {
    return this.httpClient.post<User>(this.usersBaseUrl + '/register', user).subscribe(result=> {
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/']);
      this.messageService.add({severity: 'success', summary:'Välkommen', detail: 'Registering lyckades, du har blivit inloggad'});
      this.dispatcher.emit(new AuthenticationEvent(true));
    }, error=> {
      this.messageService.add({severity: 'error', summary:'Fel', detail: JSON.stringify(error)})
    });
  }
  
  private getUserFromLocalStorage() : User {
    var storageUser = JSON.parse(localStorage.getItem('user'));
    let user: User;
      if(storageUser != undefined) {
        user = new User();
        Object.assign(user, storageUser);
      }
    return user;
  }

  getUser() : User {
    if(this.user == null) {
      this.user = this.getUserFromLocalStorage();
    }
    return this.user;    
  }

  getToken() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined) {
      return user.token;
    }
  }

  getEmitter() {
    return this.dispatcher;
  }

  checkUsername(username: string): Promise<boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      this.httpClient.get<UsernameAvailableResponse>(this.usersBaseUrl + 'check/?username='+username).toPromise().then(result=> {
          if(result.isAvailable == true) {
            resolve(true)
          }
          else {
            resolve(false);
          }
        },
        reject => {
          resolve(false);
        });
      });
      return promise;
  }

  signIn(username: string, password: string) : Promise<Boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      this.httpClient.post<User>(this.usersBaseUrl + 'signin/', { 'username': username, 'password': password }).toPromise().then(
        result => {
          localStorage.setItem('user', JSON.stringify(result));
          this.dispatcher.emit(new AuthenticationEvent(true));
          resolve(true);
        }, rejected => {
          reject(false);
        }
      );
    });
    return promise;
  }

  signOut() {
    localStorage.removeItem('user');
    let event = new AuthenticationEvent(false);
    this.user = null;
    this.dispatcher.emit(event);
  }
  
  hasRole(role: string) {
    if(this.getUser() == null) {
      return false;
    }

    if(this.user.roles == null) {
      return false;
    }

    for(let userRole of this.user.roles) {
      if(role.toLowerCase() == userRole.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.getUser() != null;
  }




}
