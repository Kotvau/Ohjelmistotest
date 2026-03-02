/**
 * Loggerin käyttöesimerkki.
 *
 * Demonstroi kaksi eri tapaa kirjoittaa lokiviestejä:
 *
 * 1) logger.log(level, message)
 * 2) logger.<level>(message)
 *
 * Käytetyt logitasot:
 * - info
 * - warn
 * - error
 *
 * Viestit tulostuvat:
 * - konsoliin
 * - logs/combined.log -tiedostoon
 * - error-tason viestit myös logs/error.log -tiedostoon
 */

const logger = require("./logger");

logger.log("info", "This is an informational message.");
logger.log("warn", "This is a warning message.");
logger.log("error", "This is an error message.");

logger.info("This is another informational message.");
logger.warn("This is another warning message.");
logger.error("This is another error message.");
