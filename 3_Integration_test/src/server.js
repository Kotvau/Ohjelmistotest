//server.js

/**
 * Express server for converting hexadecimal color codes to RGB.
 *
 * Provides two routes:
 * 1. GET / - Returns a simple "Hello World!" message.
 * 2. GET /convert?hex=<hexcode> - Converts the provided hexadecimal color code
 *    (3 or 6 digits, without '#') to an RGB string using the `convert` module.
 *
 * @module server
 */

const express = require("express");
const convertlib = require("./convert");
const app = express();
const port = 3000;

/**
 * Root route.
 * Responds with a simple greeting.
 *
 * @name GET /
 * @function
 * @memberof module:server
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Convert route.
 * Converts a hex color code to RGB.
 *
 * @name GET /convert
 * @function
 * @memberof module:server
 * @param {object} req - Express request object. Expects query parameter `hex`.
 * @param {string} req.query.hex - Hexadecimal color code (3 or 6 characters).
 * @param {object} res - Express response object. Responds with RGB string.
 * @throws {Error} If the hex code is invalid, the `convert` module will throw an error.
 *
 * @example
 * GET /convert?hex=ff0000 -> "(255,0,0)"
 */

app.get("/convert", (req, res) => {
  const hex = req.query.hex;
  res.send(convertlib.hexToRgb(hex));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Example app listening on port ${port}`));
}

module.exports = app;
