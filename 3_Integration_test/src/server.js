const express = require("express");
const convertlib = require("./convert");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/convert", (req, res) => {
  const hex = req.query.hex;
  res.send(convertlib.hexToRgb(hex));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Example app listening on port ${port}`));
}

module.exports = app;
