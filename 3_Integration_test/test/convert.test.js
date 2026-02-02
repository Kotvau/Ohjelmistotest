// convert.test.js

/**
 * Unit tests for the `convert.js` module.
 *
 * @module test/convert
 */

const { expect } = require("chai");
const { hexToRgb } = require("../src/convert");

describe("convert.js", () => {
  /**
   * Test suite for the `hexToRgb` function.
   *
   * @function
   */

  describe("hexToRgb()", () => {
    /**
     * Test case: Converts a 6-character hex string to an RGB string.
     * @test
     * @example
     * expect(hexToRgb("FF0000")).to.equal("(255,0,0)");
     */

    it("should convert hex to rgb", () => {
      expect(hexToRgb("FF0000")).to.equal("(255,0,0)");
    });

    /**
     * Test case: Throws an error if input length is not 3 or 6 characters.
     * @test
     * @example
     * expect(() => hexToRgb("ff00ff0")).to.throw(
     *   "Hex code must be 3 or 6 characters long."
     * );
     */

    it("should throw an error if input is not 6 or 3 characters long ", () => {
      expect(() => hexToRgb("ff00ff0")).to.throw(
        "Hex code must be 3 or 6 characters long.",
      );
    });
    /**
     * Test case: Throws an error if input contains invalid characters (not 0-9, a-f).
     *
     * @test
     * @example
     * expect(() => hexToRgb("ffl")).to.throw(
     *   "Hex code can only contain characters 0-9 and A-F."
     * );
     */

    it("should throw an error if inputs alphabets contains other than alphabets a-f ", () => {
      expect(() => hexToRgb("ffl")).to.throw(
        "Hex code can only contain characters 0-9 and A-F.",
      );
    });
  });
});
