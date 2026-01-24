//mylib.js

function summa(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a + b;
}

function erotus(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a - b;
}

function tulo(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a * b;
}

function osamaara(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  if (b === 0) {
    throw new Error("Cannot divide with 0");
  }

  return a / b;
}

module.exports = { summa, erotus, tulo, osamaara };
