/**
 * Test suite for the endsWith function.
 *
 * Verifies that:
 * - the function returns true when the string ends with the given substring
 * - the function returns false when it does not match
 * - the optional length parameter limits the checked portion of the string
 */

import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith", function () {
  it("returns true when string ends with the target substring", function () {
    expect(endsWith("abc", "c")).to.equal(true);
  });
  it("returns false when string does not end with the target substring", function () {
    expect(endsWith("abc", "b")).to.equal(false);
  });
  it("respects the length parameter when checking the ending", function () {
    expect(endsWith("abc", "b", 2)).to.equal(true);
  });
});
