const express = require("express");
const router = express.Router();
const logger = require("./logger");
const counter = require("./counter");

/**
 * GET /counter-read
 * Palauttaa laskurin nykyisen arvon.
 * @route GET /counter-read
 * @returns {Object} JSON-objekti muodossa { count: number }
 */
router.get("/counter-read", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");

  const value = counter.read();
  res.json({ count: value });
});

/**
 * GET /counter-increase
 * Kasvattaa laskurin arvoa yhdellä ja palauttaa uuden arvon.
 * @route GET /counter-increase
 * @returns {Object} JSON-objekti muodossa { count: number }
 */
router.get("/counter-increase", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");

  const value = counter.increase();
  res.json({ count: value });
});

/**
 * GET /counter-reset
 * Nollaa laskurin arvon ja palauttaa nollan.
 * @route GET /counter-reset
 * @returns {Object} JSON-objekti muodossa { count: number }
 */
router.get("/counter-reset", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");

  const value = counter.reset();
  res.json({ count: value });
});

module.exports = router;
