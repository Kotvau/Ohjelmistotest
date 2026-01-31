const request = require("supertest");
const expect = require("chai").expect;
process.env.NODE_ENV = "test";

const app = require("../src/server");

/**
 * Integration tests for the Convert API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */

describe("Convert API", () => {
  /**
   * Test the root route.
   * Expects a 200 status and "Hello World!" response text.
   */

  it("responds to the root route", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello World!");
  });

  /**
   * Test the /convert route with query parameter.
   * Expects HTTP status 200.
   */

  it("returns status 200 for /convert", async () => {
    const res = await request(app).get("/convert?hex=fff");
    expect(res.status).to.equal(200);
  });

  /**
   * Test the /convert route for correct hex to rgb conversion.
   * Expects the rgb code in response text.
   */

  it("returns the rgb code", async () => {
    const res = await request(app).get("/convert?hex=FF0000");
    expect(res.text).to.equal("(255,0,0)");
  });
});
