/**
 * Logger yksikkötestit.
 *
 * Testaa:
 * - Logger-olion olemassaolon
 * - Oletuslogitason ("info")
 * - Error-viestin tallentumisen error.log -tiedostoon
 */

const { expect } = require("chai");
const logger = require("../src/logger");

const fs = require("fs");

describe("Logger tests", function () {
  it("should export logger", function () {
    expect(logger).to.exist;
  });
  it("should have log level info", function () {
    expect(logger.level).to.equal("info");
  });

  it("should write error message to error.log", async function () {
    logger.error("Testing for error message");
    // Odotetaan että Winston ehtii kirjoittaa tiedostoon
    await new Promise((resolve) => setTimeout(resolve, 200));
    const content = fs.readFileSync("logs/error.log", "utf8");
    expect(content).to.include("Testing for error message");
  });
});
