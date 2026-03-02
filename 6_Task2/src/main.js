const express = require("express");
const routes = require("./routes");

/**
 * Express-sovelluksen pääinstanssi.
 *
 * Luo Express-sovelluksen ja rekisteröi kaikki reitit.
 * Tätä tiedostoa käytetään sekä:
 * - palvelimen käynnistämiseen (server.js)
 * - testauksessa (supertest)
 */
const app = express();

/**
 * Rekisteröi sovelluksen reitit.
 * Kaikki endpointit ovat juuripolun "/" alla.
 */
app.use("/", routes);

module.exports = app;
