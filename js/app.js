'use strict';

// Vorläfige Kontrolle der berechneten Tabelle
// console.table(INITIAL_MATCHES);

// Zustand der App: alle Spiele (Kopie der Startdaten)
let matches = [...INITIAL_MATCHES];

// Berechnet die Tabelle neu und zeigt sie an
function render() {
    const standings = calculateStandings(TEAMS, matches);
    // console.table(standings);
    renderStandings(standings);
    renderMatches(matches);
}

render();