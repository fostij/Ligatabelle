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

Die Tabelle wirdl **Frontend-Programmie sondern bei jeder Änderung neu aus allen Spielen berechnet. Dadurch passen Tabelle und Spiele immer zusammen.

---

## ✨ Features

| Feature | Beschreibung |
|---|---|
| 📊?logo=css3&lo| Platz, Spiele, Siege, Unentschieden, Niederlagen, Tore, Tordifferenz, Punkte |
| 🔢TML5-E34F26?logo=html5&logoCo| nach Punkten, Tordifferenz, erzielten Toren und Name |
| 🥇//img.shields.io/b| Tabellenführer (gold) und Schlusslicht (rot) |
| 📅](https://img.sh| alle Partien mit Datum und Ergebnis, neueste zuerst |
| ➕s://img.shields.io/bad| Formular mit Validierung und Fehlermeldungen |
| 🔍](https://i| nach Teamnamen, unabhängig von Groß-/Kleinschreibung und Leerzeichen |
| 🎯/badge/HTML5| nach Ergebnis: Heimsieg, Unentschieden, Auswärtssieg |
| 🔔//img.shield| eigene Benachrichtigungen bei Erfolg und Fehler |
| 🎨ttps://img.shields.io/| ohne Icon-Bibliothek |
| 📱r Hannover 2026
| funktioniert auf Desktop, Tablet und Smartphone |

---

## 🛠️ Tech-Stack

-badge/HTML5– semantische Struktur, Formular
-nover 2026– Grid, Flexbox, CSS-Variablen, Animationen, BEM-Namenskonvention
-shields.io/badge/HTML5-– DOM-Manipulation, Events, Array-Methoden, Formularauswertung mit `FormData`

Keine Bibliotheken, kein Framework, keine externen Ressourcen.

---

## 🚀 Starten

1. Projektordner entpacken
2.adge/CSS3-1572per Doppelklick im Browser öffnen

Ein Server oder eine Installation ist nicht nötig.

---

## 🖱️ Bedienung
ogoColor=white)
![CSS
1. Datum wählen
2. Heim- und Gastteam aus der Liste wählen
3. Tore beider Teams eingeben
4. Auf?logo=html5&logoColorklicken

Die Tabelle wird sofort neu berechnet, eine Benachrichtigung bestätigt das Speichern.
6?logo=html5&logoColor=w
- Im Feldbelle – Hobeinen Teamnamen eingeben, z. B.Hannover 2- Im Feldabelle – Hobbynach Heimsieg, Unentschieden oder Auswärtssieg filtern
- Suche und Filter lassen sich kombinieren; die Tabelle bleibt dabei unverändert

---

## 🧮 Fachlogik
dge/CSS3-1572B6?log
| Ergebnis | Punkte |
|---|---|
| Sieg | 3 |
| Unentschieden | 1 |
| Niederlage | 0 |
L5-E34F26?logo=html5&logoCol
1. Für jedes Team wird eine leere Tabellenzeile angelegt.
2. Jedes Spiel wird zweimal eingetragen: aus Sicht des Heimteams und aus Sicht des Gastteams.
3. Die Zeilen werden sortiert.
logoColor=white)
![JavaScript](https
1. Punkte
2. Tordifferenz
3. Erzielte Tore
4. Teamname (alphabetisch)
lds.io/badge/HTML5-E34F26?logo=
- Datum ist Pflicht
- Beide Teams müssen gewählt sein
- Ein Team kann nicht gegen sich selbst spielen
- Tore müssen ganze Zahlen ab 0 sein
- Eine Partie (gleiches Heim- und Gastteam) darf nur einmal eingetragen werden

---

## 📁 Projektstruktur
aScript-F7DF1E?logo=javascript&logoColor=black)
![Ohne Frameworks](https://img.shields.io/badge/Frameworks-keine-1b6e34)

Eine kleine Web-App, die aus eingetragenen Spielergebnissen automatisch die Tabelle eines Hobbyturniers berechnet und sortiert.

Abschlussprojekt im Modul **Frontend-Programmierung mit JavaScript** an der Hochschule Hannover.

---

## 📋 Inhalt
- [Projektübersicht](#-projekt# ⚽ Ligatabelle – Hobbyturni# ⚽ Ligataberechnet und greift nicht auf das DOM zu,2026

![Hzeigt nur an,le – Hobbyverbindet beides.

---

## 📸 Screenshot

![Screenshot der Ligatabelle](docs/screenshot.png)

---

## 🤖 KI-Nutzung
r=white)
![CSS3Claude (Anthropic)
obbyturnier 
- Code-Vorschläge für komplexere Aufgaben, die ich selbst umgesetzt und getestet habe
- Erklärung von Konzepten, die mir unklar waren

---

## 👤 Autor
s3&logoColor=whitHochschule Hannover
Modul: Frontend-Programmierung mit JavaScript
Dozent: Patrick Baudach

Studienprojekt, Oktober 2026