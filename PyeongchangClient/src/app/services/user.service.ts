import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../domain/auth/user';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {
  private userApiBase: string = environment.apiBaseUrl + 'api/auth';
  private gamesApiBase: string = environment.apiBaseUrl + '/games';

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(this.userApiBase + '/user/' + username);
  }

  makeAdministrator(username: string): Observable<string> {
    return this.httpClient.post<string>(this.userApiBase + '/' + username + '/addasadmin', null);
  }
}
