import { Turnier } from "./Objekte";

let bpTurnier3 = new Turnier(24);
showTeams(bpTurnier3);
let addTeamButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
addTeamButton.innerHTML = "Team hinzufügen";
document.body.appendChild(addTeamButton);


function addTeam(teamName: string): void {

}


function showTeams(bpTurnier3: Turnier): void {

    for (let i = 0; i < bpTurnier3.teams.length; i++) {

        let teamDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        document.body.appendChild(teamDiv);
        let teamName: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h3");
        teamDiv.appendChild(teamName);
    }
}
