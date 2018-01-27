import { Game } from "./game";

export class GameForUpdate {
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

    static copyFrom(game: Game) : GameForUpdate {
        let a = new GameForUpdate();
        a.id = game.id;
        a.description = game.description;
        a.gameType = game.gameType;
        a.isOpenForBets = game.isOpenForBets;
        a.leagueId = game.leagueId;
        a.pointsResult = game.pointsResult;
        a.pointsWinner = game.pointsWinner;
        a.scoreTeam1 = game.scoreTeam1;
        a.scoreTeam2 = game.scoreTeam2;
        a.sportId = game.sportId;
        a.startsOn = game.startsOn;
        a.title = game.title;
        return a;
    }

}
