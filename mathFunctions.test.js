const mathFunctions = require("./mathFunctions");

describe("add function returns the sum of two numbers", () => {
  test("add(1, 1) => 2", () => {
    expect(mathFunctions.add(1, 2)).toEqual(3);
  });
});

describe("subtract function returns the difference of two numbers", () => {
  test("subtract(1, 1) => 0", () => {
    expect(mathFunctions.subtract(1, 1)).toBe(0);
  });
});

describe("multiply function returns the product of two numbers", () => {
  test("multiply(1,5) => 5", () => {
    expect(mathFunctions.multiply(1, 5)).toBe(5);
  });
});

describe("divide function returns the quotient of first number by the second number", () => {
  test("divide(1,5) => 0.20", () => {
    expect(mathFunctions.divide(1, 5)).toBe(0.2);
  });

  test("divide(5,0) => undefined", () => {
    expect(mathFunctions.divide(5, 0)).toBe(Infinity);
  });
});
