'use strict';

// Zustand der App: alle Spiele (Kopie der Startdaten)
let matches = [...INITIAL_MATCHES];
// console.table(matches);

const matchForm = document.querySelector('#match-form'); // Form
const searchInput = document.querySelector('#search-text'); // Search field
const resultFilter = document.querySelector('#filter-result'); // Select

// Berechnet die Tabelle neu und zeigt sie an
function render() {
    const standings = calculateStandings(TEAMS, matches);
    // console.table(standings);
    const visibleMatches = filterMatches(matches, searchInput.value, resultFilter.value);

    renderStandings(standings);
    renderMatches(visibleMatches);
    renderMatchCount(visibleMatches.length, matches.length);
}

// Liest die Eingaben aus dem Formular
function readMatchForm() {
    const fields = matchForm.elements;

    return {
        date: fields.date.value,
        home: fields.home.value,
        away: fields.away.value,
        homeGoals: fields.homeGoals.valueAsNumber,
        awayGoals: fields.awayGoals.valueAsNumber, 

    }; // Object mit Daten von Form
}

// Verarbeitet das Absenden des Formulars
function handleSubmit(event) {
    event.preventDefault();

    const newMatch = readMatchForm();
    const errors = validateMatch(newMatch, matches);

    if (errors.length > 0) {
        showFormMessages(errors, 'error');
        return;
    }

    newMatch.id = Date.now();
    matches.push(newMatch);

    matchForm.reset();
    showFormMessages(['Spiel wurde gespeichert.'], 'succes');
    render();
}

fillTeamSelect(matchForm.elements.home, TEAMS);
fillTeamSelect(matchForm.elements.away, TEAMS);

matchForm.addEventListener('submit', handleSubmit);
searchInput.addEventListener('input', render);
resultFilter.addEventListener('change', render);

render();