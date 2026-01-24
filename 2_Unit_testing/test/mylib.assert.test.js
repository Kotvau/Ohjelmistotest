const assert = require("chai").assert;
const { summa, erotus, tulo, osamaara } = require("../src/mylib");

describe("mylib.js (assert skeleton)", () => {
  before(function () {
    console.log("Aloitetaan testit...");
    console.log("");
  });

  after(function () {
    console.log("");
    console.log("Lopetetaan testit");
  });

  //

  describe("add()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(summa(2, 3), 5);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => summa(2, "a"), "Inputs must be numbers");
    });
  });

  describe("erotus()", () => {
    it("should substact two numbers correctly", () => {
      assert.equal(erotus(10, 4), 6);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => erotus(2, "a"), "Inputs must be numbers");
    });
  });

  describe("tulo()", () => {
    it("should count two numbers correctly", () => {
      assert.equal(tulo(2, 3), 6);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => tulo(2, "a"), "Inputs must be numbers");
    });
  });

  describe("osamaara()", () => {
    it("should divide two numbers correctly", () => {
      assert.equal(osamaara(6, 3), 2);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => osamaara(2, "a"), "Inputs must be numbers");
    });
    it("should throw an error if b is 0", () => {
      assert.throws(() => osamaara(2, 0), "Cannot divide with 0");
    });
  });
});
