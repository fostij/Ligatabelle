'use strict';

// Punkteregel des Turniers
const POINTS_WIN = 3;
const POINTS_DRAW = 1;

/* Erzeugt eine leere Tabellenzeile für ein Teams. */
function createEmptyRow(team) {
    return {
        team,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
    };
}

/* Trägt ein Spielergebnis aus Sicht eines Teams in dessen Zeile ein. */
function addResult(row, goalsFor, goalsAgainst) {
    row.played += 1;
    row.goalsFor += goalsFor;
    row.goalsAgainst += goalsAgainst;
    row.goalDifference = row.goalsFor - row.goalsAgainst;

    if (goalsFor > goalsAgainst) {
        row.wins +=1;
        row.points += POINTS_WIN;
    } else if (goalsFor === goalsAgainst) {
        row.draws += 1;
        row.points += POINTS_DRAW;
    } else {
        row.losses += 1;
    }
}

/* Sortierrgel: Punkte,  dann Tordifferenz, dann erzielte Tore, dann Name */
function compareRows(a, b) {
    if (a.points !== b.points) return b.points - a.points;
    if (a.goalDifference !== b.goalDifference) return b.goalDifference - a.goalDifference;
    if (a.goalsFor !== b.goalsFor) return b.goalsFor - a.goalsFor;

    return a.team.localeCompare(b.team, 'de');
}

/**
 * Berechnet die sortierte Tabelle aus allen Spielen.
 * 
 * @param {string[]} teams - Namen aller Teams
 * @param {object[]} matches - Alle gespielten Partien
 * @returns {object[]} Tabellenzeilen, bester Platz zuerst
*/

function calculateStandings(teams, matches) {
    const rows = {};

    for (const team of teams) {
        rows[team] = createEmptyRow(team);
    }

    for (const match of matches) {
        addResult(rows[match.home], match.homeGoals, match.awayGoals);
        addResult(rows[match.away], match.awayGoals, match.homeGoals);

        // console.log(match.home, rows[match.home], match.away, rows[match.away]);
    }

    return Object.values(rows).sort(compareRows);
}