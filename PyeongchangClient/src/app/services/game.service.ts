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
import { GameForUpdate } from '../domain/game-for-update';
import { User } from '../domain/auth/user';
import { OptionValue } from '../domain/option-value';

@Injectable()
export class GameService {
  private openGamesUrl = environment.apiBaseUrl + 'api/games';
  private betsPlacementUrl = environment.apiBaseUrl + 'api/bets';
  private sportsUrl = environment.apiBaseUrl + 'api/sports';
  private leagueUrl = environment.apiBaseUrl + 'api/leagues'
  constructor(private http: HttpClient) { }

  getGames(leagueId: number, filter: string = null): Observable<Game[]> {
    let gamesUrl: string = this.openGamesUrl;
    if (filter != null) {
      gamesUrl = gamesUrl + '/league/' + leagueId +'/?filter=' + filter; 
    }
      
    return this.http.get<Game[]>(gamesUrl);
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

  getSports(leagueId: number): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportsUrl + '/league/' + leagueId);
  }

  addGame(game: GameForCreation): Observable<Game> {
    return this.http.post<Game>(this.openGamesUrl, game);
  }

  updateGame(game: GameForUpdate): Observable<Game> {
    return this.http.put<Game>(this.openGamesUrl + '/' + game.id, game);
  }

  getTopList(leagueId: number): Observable<User[]> {
    return this.http.get<User[]>(this.leagueUrl + '/' + leagueId + '/toplist');
  }

  getScoreTypes(): OptionValue<string>[] {
    return [
      new OptionValue<string>(0, 'Odds'),
      new OptionValue<string>(1, 'Egna')
    ];    
  }
}
