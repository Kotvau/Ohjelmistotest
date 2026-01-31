// convert.test.js

const { expect } = require("chai");
const { hexToRgb } = require("../src/convert");

/**
 * Unit tests for convert.js
 *
 * @module test/convert
 */
describe("convert.js", () => {
  /**
   * Tests for the hexToRgb() function
   */
  describe("hexToRgb()", () => {
    /**
     * It should correctly translate hex to rgb.
     */
    it("should convert hex to rgb", () => {
      expect(hexToRgb("FF0000")).to.equal("(255,0,0)");
    });

    /**
     * It should throw an error if the input is not 6 or 3 characters long .
     */

    it("should throw an error if input is not 6 or 3 characters long ", () => {
      expect(() => hexToRgb("ff00ff0")).to.throw(
        "Please enter 6 digits color code!",
      );
    });
    /**
     * It should throw an error if the input contains other than alphabets a to f .
     */

    it("should throw an error if inputs alphabets contains other than alphabets a-f ", () => {
      expect(() => hexToRgb("ffl")).to.throw(
        "Can only contain alphabets A to F!",
      );
    });
  });
});
