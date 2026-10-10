'use strict';

// Erzeugt eine Tabellenzelle mit Text
function createCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

// Erzeugt eim Element mit CSS-Klasse und Text
function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

// Wandelt '2026-09-05' in '05.09.2026' um
function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-');
    return `${day}.${month}.${year}`;
}

// Zeigt die Tordifferenz mit Vorzeichen an, z. B. +2 oder -7
function formatGoalDifference(difference) {
    if (difference > 0) {
        return `+${difference}`;
    }
    return String(difference);
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
            createCell(formatGoalDifference(row.goalDifference)),
            createCell(row.points)

        );

        body.append(tr);
    });
}

// Zeigt die Liste der Spiele im DOM an
function renderMatches(matches) {
    const list = document.querySelector('#match-list');
    list.innerHTML = '';

    matches.forEach((match) => {
        const item = document.createElement('li');
        item.className = 'match';

        item.append(
            createTextElement('span', 'match__date', formatDate(match.date)),
            createTextElement('span', 'match__team match__team--home', match.home),
            createTextElement('span', 'match__score', `${match.homeGoals}:${match.awayGoals}`),
            createTextElement('span', 'match__team match__team--away', match.away),
        );

        list.append(item);
    });

}