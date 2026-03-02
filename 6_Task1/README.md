# VI Logging - Task 1 – Implement Logging library

Tämä projekti toteuttaa Node.js-sovelluksen, jossa käytetään Winston-lokikirjastoa.

## Käytetyt teknologiat

- Node.js 18
- Winston 3.11.0
- Mocha: 11.7.5
- Chai: 6.2.2

---

## Projektin tarkoitus

Sovellus demonstroi:

- Loggerin käyttöönoton
- Lokien tallentamisen tiedostoihin
- Error-lokien erottamisen
- Yksikkötestauksen Mocha + Chai -kirjastoilla

---

## Logger

Logger on toteutettu käyttäen Winstonia.
Lokit tallennetaan seuraaviin tiedostoihin:

- `logs/error.log` (vain error-tason lokit)
- `logs/combined.log` (kaikki lokit)

Lisäksi lokit tulostetaan konsoliin.

Lokiformaatti sisältää json-muodossa:

- aikaleiman
- lokitason
- viestin

Esimerkki
`{"level":"error","message":"Testing for error message","timestamp":"2026-03-02T16:46:11.640Z"}`

---

## Asennus

Asenna riippuvuudet:

- npm install

---

## Sovelluksen käynnistäminen

- node src/main.js

## Testien ajaminen

- npm test

Testit varmistavat:

- Loggerin olemassaolon
- Oikean lokitason
- Error-viestin tallentumisen tiedostoon

---
