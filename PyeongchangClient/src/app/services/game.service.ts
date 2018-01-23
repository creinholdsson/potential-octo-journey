import { Injectable } from '@angular/core';
import { Game } from '../domain/game';
import { BetForCreation } from '../domain/bet-for-creation';
import { Bet } from '../domain/bet';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
  private openGamesUrl = environment.apiBaseUrl + 'api/games';
  private betsPlacementUrl = environment.apiBaseUrl + 'api/bets';
  constructor(private http: HttpClient) { }

  getOpenGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.openGamesUrl);
  }

  getGame(gameId: number): Observable<Game> {
    return this.http.get<Game>(this.openGamesUrl + '/' + gameId.toString());
  }

  placeBet(bet: BetForCreation): Observable<Bet> {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdGFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIyMTQ3M2Y3Yi02MDEyLTQwMTYtOTYwZi0yYmQ2MGFjMGI2MzQiLCJpc3MiOiJQeWVvbmdjaGFuZ0thbXBlbkFwaSIsImF1ZCI6IlB5ZW9uZ2NoYW5nS2FtcGVuIn0.EbD6yx9Q5SFKNieUi9LgTIw4y2HSq1RQqUQF7zJZqE4');
    return this.http.post<Bet>(this.betsPlacementUrl, bet, 
      {headers: new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdGFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIyMTQ3M2Y3Yi02MDEyLTQwMTYtOTYwZi0yYmQ2MGFjMGI2MzQiLCJpc3MiOiJQeWVvbmdjaGFuZ0thbXBlbkFwaSIsImF1ZCI6IlB5ZW9uZ2NoYW5nS2FtcGVuIn0.EbD6yx9Q5SFKNieUi9LgTIw4y2HSq1RQqUQF7zJZqE4')
      });
  }
}
