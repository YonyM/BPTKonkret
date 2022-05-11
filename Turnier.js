"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objekte_1 = require("./Objekte");
var bpTurnier3 = new Objekte_1.Turnier(24);
showTeams(bpTurnier3);
var addTeamButton = document.createElement("button");
addTeamButton.innerHTML = "Team hinzufügen";
document.body.appendChild(addTeamButton);
function addTeam(teamName) {
}
function showTeams(bpTurnier3) {
    for (var i = 0; i < bpTurnier3.teams.length; i++) {
        var teamDiv = document.createElement("div");
        document.body.appendChild(teamDiv);
        var teamName = document.createElement("h3");
        teamDiv.appendChild(teamName);
    }
}
