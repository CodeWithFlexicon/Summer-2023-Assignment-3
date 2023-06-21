const mathFunctions = require("./mathFunctions");

describe("add function returns the sum of two numbers", () => {
  test("add(1, 1) => 2", () => {
    expect(mathFunctions.add(1, 2)).toEqual(3);
  });

  test("add(what, you) => undefined", () => {
    expect(() => {
      mathFunctions.add("what", "you");
    }).toThrow("One or more parameters are not a number");
  });
});

describe("subtract function returns the difference of two numbers", () => {
  test("subtract(1, 1) => 0", () => {
    expect(mathFunctions.subtract(1, 1)).toBe(0);
  });

  test("subtract(what, you) => undefined", () => {
    expect(() => {
      mathFunctions.subtract("what", "you");
    }).toThrow("One or more parameters are not a number");
  });
});

describe("multiply function returns the product of two numbers", () => {
  test("multiply(1,5) => 5", () => {
    expect(mathFunctions.multiply(1, 5)).toBe(5);
  });

  test("multiply(what, you) => undefined", () => {
    expect(() => {
      mathFunctions.multiply("what", "you");
    }).toThrow("One or more parameters are not a number");
  });
});

describe("divide function returns the quotient of first number by the second number", () => {
  test("divide(1,5) => 0.20", () => {
    expect(mathFunctions.divide(1, 5)).toBe(0.2);
  });

  test("divide(5,0) => undefined", () => {
    expect(mathFunctions.divide(5, 0)).toBe(Infinity);
  });

  test("divide(what, you) => undefined", () => {
    expect(() => {
      mathFunctions.divide("what", "you");
    }).toThrow("One or more parameters are not a number");
  });
});
