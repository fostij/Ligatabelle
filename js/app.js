'use strict';

// Vorläfige Kontrolle der berechneten Tabelle
// console.table(INITIAL_MATCHES);

// Zustand der App: alle Spiele (Kopie der Startdaten)
let matches = [...INITIAL_MATCHES];

const matchForm = document.querySelector('#match-form'); // Form

// Berechnet die Tabelle neu und zeigt sie an
function render() {
    const standings = calculateStandings(TEAMS, matches);
    // console.table(standings);
    renderStandings(standings);
    renderMatches(matches);
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
render();