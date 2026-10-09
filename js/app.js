'use strict';

// Vorläfige Kontrolle der berechneten Tabelle
// console.table(INITIAL_MATCHES);
const standings = calculateStandings(TEAMS, INITIAL_MATCHES);
console.table(standings);