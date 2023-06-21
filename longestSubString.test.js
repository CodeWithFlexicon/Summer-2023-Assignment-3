const longestSubString = require("./longestSubString");

describe("longestSubString() takes in a string and finds the length of the longest substring without repeating characters", () => {
  test("longestSubString(abcabcbb) => 3", () => {
    expect(longestSubString("abcabcbb")).toBe(3);
  });

  test("longestSubString(bbbbb) => 1", () => {
    expect(longestSubString("bbbbb")).toBe(1);
  });

  test("longestSubString(pwwkew) => 3", () => {
    expect(longestSubString("pwwkew")).toBe(3);
  });

  test("longestSubString(100) => typeError", () => {
    expect(() => {
      longestSubString(100);
    }).toThrow("The parameter being passed is not a string");
  });
});
