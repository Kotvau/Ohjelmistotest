//convert.js

/**
 * Converts hex to rgb.
 *
 * @param {string} hex - hex code
 * @returns {string} - rgb
 * @throws {Error} If hex is not 6 or 3 digits
 */

function hexToRgb(hex) {
  if (!(hex.length == 6 || hex.length == 3)) {
    throw new Error("Please enter 6 digits color code!");
  }

  let isAlphabetic = /^[A-Fa-f0-9]+$/.test(hex);
  if (isAlphabetic === false) {
    throw new Error("Can only contain alphabets A to F!");
  }

  let r,
    g,
    b = "";

  if (hex.length == 3) {
    r = hex.substring(0, 1);
    g = hex.substring(1, 2);
    b = hex.substring(2, 3);
    r = r + r;
    g = g + g;
    b = b + b;
  } else {
    r = hex.slice(0, 2);
    g = hex.slice(2, 4);
    b = hex.slice(4, 6);
  }

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  rgb = "(" + r + "," + g + "," + b + ")";

  return rgb;
}

/**
 * Convert utility functions.
 *
 * @module convert
 * @property {function(string): string} hexToRgb - convert hex to rgb.
 */
module.exports = { hexToRgb };
