import { expect } from "chai";
import camelCase from "../src/camelCase.js";

describe("camelCase", () => {
  it("converts 'Foo Bar' to 'fooBar'", () => {
    expect(camelCase("Foo Bar")).to.equal("fooBar");
  });

  it("handles dashes", () => {
    expect(camelCase("--foo-bar--")).to.equal("fooBar");
  });

  it("handles underscores and uppercase", () => {
    expect(camelCase("__FOO_BAR__")).to.equal("fooBar");
  });

  it("handles undefined input", () => {
    expect(camelCase()).to.equal(""); // @param {string} [string='']
  });
});

//Returns string in camelcase + " "
