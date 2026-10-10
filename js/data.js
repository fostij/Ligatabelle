'use strict';

// Teams des Hobbyturniers
const TEAMS = ['FC Linden', 'SV Nordstadt', 'TSV Döhren', 'SC List'];

// Startdaten: bereits  gespielte Partien
const INITIAL_MATCHES = [
    { id: 1, date: '2026-09-05', home: 'FC Linden', away: 'SV Nordstadt', homeGoals: 2, awayGoals: 1 },
    { id: 2, date: '2026-09-05', home: 'TSV Döhren', away: 'SC List', homeGoals: 0, awayGoals: 0 },
    { id: 3, date: '2026-09-12', home: 'FC Linden', away: 'TSV Döhren', homeGoals: 3, awayGoals: 1 },
    { id: 4, date: '2026-09-12', home: 'SV Nordstadt', away: 'SC List', homeGoals: 1, awayGoals: 2 },
    { id: 5, date: '2026-09-19', home: 'SC List', away: 'FC Linden', homeGoals: 2, awayGoals: 2 },
    { id: 6, date: '2026-09-19', home: 'SV Nordstadt', away: 'TSV Döhren', homeGoals: 4, awayGoals: 0 },
    { id: 7, date: '2026-09-26', home: 'SV Nordstadt', away: 'FC Linden', homeGoals: 1, awayGoals: 0 },
    { id: 8, date: '2026-09-26', home: 'SC List', away: 'TSV Döhren', homeGoals: 3, awayGoals: 2 }
];