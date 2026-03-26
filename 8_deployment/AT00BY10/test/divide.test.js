import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide", function () {
  it("divides two numbers correctly", function () {
    expect(divide(6, 4)).to.equal(1.5);
  });
});

//divide returns incorrect result
//The implementation seems to divide divisor by itself instead of dividend by divisor.
