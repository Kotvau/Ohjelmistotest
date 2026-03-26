/**
 * Test suite for the add function.
 * Verifies correct addition of positive and negative numbers.
 */

import { expect } from "chai";
import add from "../src/add.js";

describe("add", function () {
  it("adds two positive numbers correctly", function () {
    expect(add(4, 6)).to.equal(10);
  });
  it("returns correct sum for negative numbers", () => {
    expect(add(-2, -3)).to.equal(-5);
  });
});
