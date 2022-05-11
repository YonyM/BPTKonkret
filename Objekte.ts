import { Team } from "./Team";


export class Turnier {

    teamAnzahl: number;
    teams: Team[] = [];

    constructor(_teamAnzahl: number) {

        this.teamAnzahl = _teamAnzahl;
    }
}


