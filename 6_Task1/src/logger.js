const { createLogger, transports, format } = require("winston");
/**
 * Sovelluksen keskitetty logger.
 *
 * Logger:
 * - Tulostaa lokit konsoliin
 * - Tallentaa kaikki lokit tiedostoon logs/combined.log
 * - Tallentaa error-tason lokit tiedostoon logs/error.log
 *
 * Lokiformaatti sisältää:
 * - aikaleiman (timestamp)
 * - lokitason (level)
 * - viestin (message)
 *
 * @type {import("winston").Logger}
 */

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    /**
     * Konsolitransport kehityskäyttöön
     */
    new transports.Console(),
    /**
     * Tallentaa vain error-tason lokit
     */
    new transports.File({ filename: "logs/error.log", level: "error" }),
    /**
     * Tallentaa kaikki lokit
     */
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

module.exports = logger;
