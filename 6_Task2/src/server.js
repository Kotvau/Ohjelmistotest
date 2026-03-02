const app = require("./main");
const logger = require("./logger");

/**
 * Palvelimen käyttämä portti.
 * Voidaan myöhemmin lukea myös ympäristömuuttujasta (process.env.PORT).
 */
const PORT = 3000;
//const PORT = process.env.PORT || 3000; ???

/**
 * Kirjaa sovelluksen käynnistyminen.
 */
logger.info("[MAIN] Starting");

/**
 * Käynnistää Express-palvelimen.
 */
const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

/**
 * Hallittu lopetus (graceful shutdown).
 * Kuuntelee SIGINT-signaalia (esim. Ctrl+C).
 * Sulkee palvelimen ennen prosessin lopettamista.
 */
process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  server.close(() => {
    process.exit(0);
  });
});
