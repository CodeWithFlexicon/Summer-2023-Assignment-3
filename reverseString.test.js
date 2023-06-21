const reverseString = require("./reverseString");

describe("Given a string str, return the reverse of the string", () => {
  test("reverseString(hello) => olleh", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverseString(OpenAI) => IAneuqO", () => {
    expect(reverseString("OpenAI")).toBe("IAnepO");
  });

  test("reverseString(racecar) => racecar", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });

  test("reverseString(drah si tpircSavaJ) => JavaScript is Hard", () => {
    expect(reverseString("draH si tpircSavaJ")).toBe("JavaScript is Hard");
  });

  test("reverseString(55) => TypeError", () => {
    expect(() => {
      reverseString(55);
    }).toThrow("The parameter being passed is not a string");
  });
});
