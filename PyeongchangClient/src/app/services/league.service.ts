import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { League } from '../domain/league';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeagueService {
  private leagueApiBase: string = environment.apiBaseUrl + '/leagues'

  constructor(private httpClient: HttpClient) { }

  public getLeague(url: string): Observable<League> {
    return this.httpClient.get<League>(this.leagueApiBase + '/' + url);
  }
}
