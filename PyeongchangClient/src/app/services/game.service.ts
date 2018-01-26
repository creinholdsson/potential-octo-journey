import { Injectable } from '@angular/core';
import { Game } from '../domain/game';
import { BetForCreation } from '../domain/bet-for-creation';
import { Bet } from '../domain/bet';
import { Sport } from '../domain/sport';
import { GameForCreation } from '../domain/game-for-creation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
  private openGamesUrl = environment.apiBaseUrl + 'api/games';
  private betsPlacementUrl = environment.apiBaseUrl + 'api/bets';
  private sportsUrl = environment.apiBaseUrl + 'api/sports';
  constructor(private http: HttpClient) { }

  getOpenGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.openGamesUrl);
  }

  getGame(gameId: number): Observable<Game> {
    return this.http.get<Game>(this.openGamesUrl + '/' + gameId.toString());
  }

  placeBet(bet: BetForCreation): Observable<Bet> {
    return this.http.post<Bet>(this.betsPlacementUrl, bet);
  }

  getBets(gameId: number): Observable<Bet[]> {
    return this.http.get<Bet[]>(this.betsPlacementUrl + '/game/' + gameId.toString());
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportsUrl + '/league/1');
  }

  addGame(game: GameForCreation): Observable<Game> {
    return this.http.post<Game>(this.openGamesUrl, game);
  }
}
