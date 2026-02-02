//convert.js

/**
 * Color conversion utility functions.
 *
 * @module convert
 */

/**
 * Converts a hexadecimal color code to an RGB string.
 *
 * Accepts either a 3-digit (e.g. "f0a") or 6-digit (e.g. "ff00aa")
 * hexadecimal color code **without** a leading '#'.
 *
 * @function hexToRgb
 * @param {string} hex - Hexadecimal color code (3 or 6 characters, 0–9, A–F).
 * @returns {string} RGB value in the format "(r,g,b)".
 * @throws {Error} If the hex code length is not 3 or 6 characters.
 * @throws {Error} If the hex code contains invalid characters.
 *
 * @example
 * hexToRgb("ff0000"); // "(255,0,0)"
 * hexToRgb("0f0");    // "(0,255,0)"
 */

function hexToRgb(hex) {
  if (!(hex.length == 6 || hex.length == 3)) {
    throw new Error("Hex code must be 3 or 6 characters long.");
  }

  let isAlphabetic = /^[A-Fa-f0-9]+$/.test(hex);
  if (isAlphabetic === false) {
    throw new Error("Hex code can only contain characters 0-9 and A-F.");
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

  let rgb = "(" + r + "," + g + "," + b + ")";

  return rgb;
}

module.exports = { hexToRgb };
