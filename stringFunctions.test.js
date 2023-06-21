const stringFunctions = require("./stringFunctions");

describe("reverseString() should take a string and returns the reversed string", () => {
  test("reverseString(this works) => skrow siht", () => {
    expect(stringFunctions.reverseString("this works")).toBe("skrow siht");
  });

  test("reverseString(what) => tahw", () => {
    expect(stringFunctions.reverseString("what")).toBe("tahw");
  });

  test("reverseString(5) => 5", () => {
    expect(stringFunctions.reverseString("5")).toEqual("5");
  });

  test("reverseString(5) => Error", () => {
    expect(() => {
      stringFunctions.reverseString(5);
    }).toThrow(TypeError);
  });

  test("reverseString(``) => null", () => {
    expect(stringFunctions.reverseString("")).toBe(null);
  });
});

describe("isPalindrome() should take a string and returns true if it is a palindrome, and false otherwise", () => {
  test("isPalindrome(racecar) => true", () => {
    expect(stringFunctions.isPalindrome("racecar")).toBe(true);
  });

  test("isPalindrome(apple) => false", () => {
    expect(stringFunctions.isPalindrome("apple")).toBe(false);
  });

  test("isPalindrome(555) => TypeError", () => {
    expect(() => {
      stringFunctions.isPalindrome(555);
    }).toThrow(TypeError);
  });

  test("isPalindrome(``) => null", () => {
    expect(stringFunctions.isPalindrome("")).toBe(null);
  });
});
