# ⚽ Ligatabelle – Hobbyturnier Hannover 2026

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Ohne Frameworks](https://img.shields.io/badge/Frameworks-keine-1b6e34)

Eine kleine Web-App, die aus eingetragenen Spielergebnissen automatisch die Tabelle eines Hobbyturniers berechnet und sortiert.

Abschlussprojekt im Modul **Frontend-Programmierung mit JavaScript** an der Hochschule Hannover.

---

## 📋 Inhalt

- [Projektübersicht](#-projektübersicht)
- [Features](#-features)
- [Tech-Stack](#-tech-stack)
- [Starten](#-starten)
- [Bedienung](#-bedienung)
- [Fachlogik](#-fachlogik)
- [Projektstruktur](#-projektstruktur)
- [Screenshot](#-screenshot)
- [KI-Nutzung](#-ki-nutzung)
- [Autor](#-autor)

---

## 🏟️ Projektübersicht

Die App verwaltet die Spiele eines Turniers mit vier Teams. Jedes Spiel besteht aus Datum, Heimteam, Gastteam und den Toren beider Teams.

Die Tabelle wird **nicht gespeichert**, sondern bei jeder Änderung neu aus allen Spielen berechnet. Dadurch passen Tabelle und Spiele immer zusammen.

---

## ✨ Features

| Feature | Beschreibung |
|---|---|
| 📊 **Tabelle** | Platz, Spiele, Siege, Unentschieden, Niederlagen, Tore, Tordifferenz, Punkte |
| 🔢 **Automatische Sortierung** | nach Punkten, Tordifferenz, erzielten Toren und Name |
| 🥇 **Markierungen** | Tabellenführer (gold) und Schlusslicht (rot) |
| 📅 **Spielliste** | alle Partien mit Datum und Ergebnis, neueste zuerst |
| ➕ **Spiel hinzufügen** | Formular mit Validierung und Fehlermeldungen |
| 🔍 **Suche** | nach Teamnamen, unabhängig von Groß-/Kleinschreibung und Leerzeichen |
| 🎯 **Filter** | nach Ergebnis: Heimsieg, Unentschieden, Auswärtssieg |
| 🔔 **Toasts** | eigene Benachrichtigungen bei Erfolg und Fehler |
| 🎨 **Eigene SVG-Icons** | ohne Icon-Bibliothek |
| 📱 **Responsive** | funktioniert auf Desktop, Tablet und Smartphone |

---

## 🛠️ Tech-Stack

- **HTML5** – semantische Struktur, Formular
- **CSS3** – Grid, Flexbox, CSS-Variablen, Animationen, BEM-Namenskonvention
- **JavaScript (ES6+)** – DOM-Manipulation, Events, Array-Methoden, `FormData`

Keine Bibliotheken, kein Framework, keine externen Ressourcen.

---

## 🚀 Starten

1. Projektordner entpacken
2. `index.html` per Doppelklick im Browser öffnen

Ein Server oder eine Installation ist nicht nötig.

---

## 🖱️ Bedienung

**Spiel eintragen**

1. Datum wählen
2. Heim- und Gastteam aus der Liste wählen
3. Tore beider Teams eingeben
4. Auf **Spiel speichern** klicken

Die Tabelle wird sofort neu berechnet, eine Benachrichtigung bestätigt das Speichern.

**Spiele durchsuchen**

- Im Feld **Suche** einen Teamnamen eingeben, z. B. `linden`
- Im Feld **Ergebnis** nach Heimsieg, Unentschieden oder Auswärtssieg filtern
- Suche und Filter lassen sich kombinieren; die Tabelle bleibt dabei unverändert

---

## 🧮 Fachlogik

**Punktevergabe**

| Ergebnis | Punkte |
|---|---|
| Sieg | 3 |
| Unentschieden | 1 |
| Niederlage | 0 |

**Berechnung der Tabelle**

1. Für jedes Team wird eine leere Tabellenzeile angelegt.
2. Jedes Spiel wird zweimal eingetragen: aus Sicht des Heimteams und aus Sicht des Gastteams.
3. Die Zeilen werden sortiert.

**Sortierung bei Punktgleichheit**

1. Punkte
2. Tordifferenz
3. Erzielte Tore
4. Teamname (alphabetisch)

**Validierung des Formulars**

- Datum ist Pflicht
- Beide Teams müssen gewählt sein
- Ein Team kann nicht gegen sich selbst spielen
- Tore müssen ganze Zahlen ab 0 sein
- Eine Partie (gleiches Heim- und Gastteam) darf nur einmal eingetragen werden

---

## 📁 Projektstruktur

```
ligatabelle/
├── index.html        # Seitenstruktur und SVG-Icons
├── README.md
├── css/
│   └── style.css     # Gestaltung
└── js/
    ├── data.js       # Teams und Startdaten (8 Spiele)
    ├── league.js     # Fachlogik: Tabelle, Validierung, Filter
    ├── ui.js         # Ausgabe im DOM
    ├── toast.js      # Benachrichtigungen
    └── app.js        # Zustand, Events, Start der App
```

**Trennung der Aufgaben:** `league.js` rechnet und greift nicht auf das DOM zu, `ui.js` zeigt nur an, `app.js` verbindet beides.

---

## 📸 Screenshot

![Screenshot der Ligatabelle](docs/screenshot.png)

---

## 🤖 KI-Nutzung

**Werkzeug:** Claude (Anthropic)

**Wofür:**

- Code-Vorschläge für komplexere Aufgaben, die ich selbst umgesetzt und getestet habe
- Erklärung von Konzepten, die mir unklar waren

---

## 👤 Autor

**Oleh Fostii**
Hochschule Hannover

Modul: Frontend-Programmierung mit JavaScript

Dozent: Patrick Baudach

Studienprojekt, Oktober 2026
