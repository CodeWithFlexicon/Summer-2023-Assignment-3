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
});

describe("isPalindrome() should take a string and returns true if it is a palindrome, and false otherwise", () => {
  test("isPalindrome(racecar) => true", () => {
    expect(stringFunctions.isPalindrome("racecar")).toBe(true);
  });

  test("isPalindrome(apple) => false", () => {
    expect(stringFunctions.isPalindrome("apple")).toBe(false);
  });
});
