import { Injectable, EventEmitter } from '@angular/core';
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


@Injectable()
export class AuthenticationService {
  dispatcher : EventEmitter<any> =  new EventEmitter();

  private usersBaseUrl = environment.apiBaseUrl + 'api/auth/';

  constructor(private httpClient: HttpClient, private messageService: MessageService, private router: Router) { }

  createUser(user: UserForCreation) {
    return this.httpClient.post<User>(this.usersBaseUrl + '/register', user).subscribe(result=> {
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/']);
      this.messageService.add({severity: 'success', summary:'Välkommen', detail: 'Registering lyckades, du har blivit inloggad'});
      
    }, error=> {
      this.messageService.add({severity: 'error', summary:'Fel', detail: JSON.stringify(error)})
    });
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

  getEmitter() {
    return this.dispatcher;
  }

  checkUsername(username: string): Promise<boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      this.httpClient.get<UsernameAvailableResponse>(this.usersBaseUrl + 'check/?username'+username).toPromise().then(result=> {
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
          resolve(true);
        }, reject => {
          reject(false);
        }
      );
    });
    return promise;
  }

}
