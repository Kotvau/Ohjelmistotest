# VI Logging - Task2 - Tally Counter REST API

Node.js -pohjainen REST-rajapinta, joka toteuttaa muistissa toimivan laskurin (tally counter) sekä lokituksen Winston-kirjastolla.

Rajapintaa voidaan testata:

- automaattisesti Mocha + Supertest -testeillä
- manuaalisesti esim. VS Coden REST Client -laajennuksella

## Käytetyt teknologiat

- NodeJS 18
- Express 4.18.2
- Winston 3.11.0
- Chai: 6.2.2
- Mocha: 11.7.5
- Supertest (REST API -testaus): 7.2.2

---

## Asennus

Kloonaa projekti ja asenna riippuvuudet:

```bash

Asenna riippuvuudet:
- npm install


## Käynnistys
- node src/server.js

Endpointit

- GET /counter-read

- GET /counter-increase

- GET /counter-reset


Aja testit:

- npm test

- Manuaalitestaus
    - Projektissa on mukana rest.http-tiedosto, jota voidaan käyttää VS Coden REST Client -laajennuksella endpointtien testaamiseen.


```
