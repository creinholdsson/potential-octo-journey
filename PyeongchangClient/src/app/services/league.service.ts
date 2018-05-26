import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { League } from '../domain/league';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class LeagueService {
  private leagueApiBase: string = environment.apiBaseUrl + 'api/leagues';
  private currentLeagueUrl: string = null;
  private currentLeague: League = null;
  constructor(private httpClient: HttpClient) { }

  public getLeague(url: string): Observable<League> {
    this.currentLeagueUrl = url;
    if (this.currentLeague == null) {
      console.log('league was null');
      var fetch = this.httpClient.get<League>(this.leagueApiBase + '/' + url);

      fetch.subscribe(league => {
        this.currentLeague = league;
      });
      return fetch;
    }
    else {
      console.log('league was initialized');
      return new Observable<League>((subscriber: Subscriber<League>) => subscriber.next(this.currentLeague));
    }
  }

  public getCurrentLeague(): Observable<League> {
    if (this.currentLeague == null) {
      return this.getLeague(this.currentLeagueUrl);
    }
    else {
      return new Observable<League>((subscriber: Subscriber<League>) => subscriber.next(this.currentLeague));
    }
  }
}
