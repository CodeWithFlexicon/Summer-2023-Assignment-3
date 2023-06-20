function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  //In real life terms, dividing by zero would lead to an undefined situation
  /*   if (b === 0) {
    return undefined;
  } */
  //However since this is JavaScript, it is configured in a way that the zero turns into a tiny fraction which results any positive number / 0 to be Infinity
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
