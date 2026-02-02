//server.test.js

/**
 * Integration tests for the Convert API.
 *
 * Uses Supertest for HTTP requests and Chai for assertions.
 *
 * @module test/server
 */

const request = require("supertest");
const expect = require("chai").expect;
process.env.NODE_ENV = "test";

const app = require("../src/server");

describe("Convert API", () => {
  /**
   * Test case: The root route `/`.
   *
   * Expects a 200 HTTP status and the response text "Hello World!".
   *
   * @test
   * @async
   * @example
   * const res = await request(app).get("/");
   * expect(res.status).to.equal(200);
   * expect(res.text).to.equal("Hello World!");
   */

  it("responds to the root route", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello World!");
  });

  /**
   * Test case: GET `/convert` route with a query parameter.
   *
   * Expects HTTP status 200 for a valid hex input.
   *
   * @test
   * @async
   * @example
   * const res = await request(app).get("/convert?hex=fff");
   * expect(res.status).to.equal(200);
   */

  it("returns status 200 for /convert", async () => {
    const res = await request(app).get("/convert?hex=fff");
    expect(res.status).to.equal(200);
  });

  /**
   * Test case: GET `/convert` route returns correct RGB code.
   *
   * Expects the correct RGB string in response text.
   *
   * @test
   * @async
   * @example
   * const res = await request(app).get("/convert?hex=FF0000");
   * expect(res.text).to.equal("(255,0,0)");
   */

  it("returns the rgb code", async () => {
    const res = await request(app).get("/convert?hex=FF0000");
    expect(res.text).to.equal("(255,0,0)");
  });
});
