const logger = require("./logger");

/**
 * Laskurin nykyinen arvo.
 * Säilyy muistissa niin kauan kuin Node-prosessi on käynnissä.
 * @type {number}
 */
let count = 0;

/**
 * Palauttaa laskurin nykyisen arvon.
 *
 * @returns {number} Nykyinen laskurin arvo
 */
const read = () => {
  logger.info(`[COUNTER] read ${count}`);
  return count;
};

/**
 * Kasvattaa laskurin arvoa yhdellä.
 *
 * @returns {number} Uusi laskurin arvo kasvattamisen jälkeen
 */
const increase = () => {
  count++;
  logger.info(`[COUNTER] increase ${count}`);
  return count;
};

/**
 * Nollaa laskurin arvon.
 *
 * @returns {number} Nollattu arvo (0)
 */
const reset = () => {
  count = 0;
  logger.info(`[COUNTER] zeroed ${count}`);
  return count;
};

module.exports = {
  read,
  increase,
  reset,
};
