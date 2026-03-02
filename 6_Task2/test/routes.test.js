/**
 * API-testit (Supertest + Mocha + Chai).
 *
 * Testaa REST-rajapinnan endpointit:
 * - GET /counter-read
 *
 * Varmistaa että:
 * - Endpoint palauttaa statuskoodin 200
 * - Vastauksen body sisältää oikean counter-arvon
 */

const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/main");

let server;

describe("API tests", function () {
  before(function (done) {
    server = app.listen(3001, done);
  });

  after(function (done) {
    server.close(done);
  });
  it("should read the counter", async function () {
    const res = await request(server).get("/counter-read");
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(0);
  });
});
