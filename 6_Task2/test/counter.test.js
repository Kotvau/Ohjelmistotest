/**
 * Counter unit tests.
 * Testaa laskurin perustoiminnot:
 * - aloitusarvo
 * - kasvatus
 * - nollaus
 */

const { expect } = require("chai");
const counter = require("../src/counter");

describe("Counter tests", function () {
  beforeEach(function () {
    counter.reset();
  });

  it("count should start from 0", function () {
    expect(counter.read()).to.equal(0);
  });

  it("should increase by one", function () {
    counter.increase();
    expect(counter.read()).to.equal(1);
  });

  it("should reset to zero", function () {
    counter.increase();
    counter.reset();
    expect(counter.read()).to.equal(0);
  });
});
