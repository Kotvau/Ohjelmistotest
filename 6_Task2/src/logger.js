const { createLogger, transports, format } = require("winston");
const fs = require("fs");

/*
 * Luodaan logs-kansio, winston ei aina tee sitä automaattisesti. ONKO PAKOLLINEN?
 */
if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

/**
 * Sovelluksen keskitetty logger.
 *
 * - Tulostaa lokit konsoliin
 * - Tallentaa error-tason lokit tiedostoon logs/error.log
 * - Tallentaa kaikki lokit tiedostoon logs/combined.log
 */
const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    /**
     * Konsoliloki kehityskäyttöön
     */
    new transports.Console(),
    /**
     * Vain error-tason lokit
     */
    new transports.File({ filename: "logs/error.log", level: "error" }),
    /**
     * Kaikki lokit
     */
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

module.exports = logger;
