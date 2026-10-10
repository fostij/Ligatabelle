'use strict';

// Erzeugt eine Tabellenzelle mit Text
function createCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

// Zeigt die berechnete Tabelle im DOM an
function renderStandings(standings) {
    const body = document.querySelector('#standings-body');
    body.innerHTML = '';

    standings.forEach((row, index) => {
        const tr = document.createElement('tr');

        tr.append(
            createCell(index + 1),
            createCell(row.team),
            createCell(row.played),
            createCell(row.wins),
            createCell(row.draws),
            createCell(row.losses),
            createCell(`${row.goalsFor}:${row.goalsAgainst}`),
            createCell(row.goalDifference),
            createCell(row.points)

        );

        body.append(tr);
    });
}