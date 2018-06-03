import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Team } from "../domain/team";

@Injectable()
export class TeamService {
  private teamBase = environment.apiBaseUrl + 'api/teams';

  constructor(private httpClient: HttpClient) {

  }

  getTeams(leagueId: number, sportId: number) {
    return this.httpClient.get<Team[]>(this.teamBase + `?leagueId=${leagueId}&sportId=${sportId}`);
  }
}
