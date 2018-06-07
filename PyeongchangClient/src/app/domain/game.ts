import { Team } from "./team";

export class Game {
    id: number;
    title: string;
    description: string;
    startsOn: Date;
    sportId: number;
    leagueId: number;
    scoreTeam1: number;
    scoreTeam2: number;
    gameType: number;
    isOpenForBets: boolean;
    pointsResult: number;
    pointsWinner: number;
    sportName: string;
    sportIcon: string;
    hasUserPlacedBet: boolean;
    isConcluded: boolean;
    team1: Team;
    team2: Team;
    scoreType: number;
}
