const twoSum = require("./twoSum");

describe("twoSum takes in an array of integers and a target integer target and returns the indicdes of the two numbers that add up to the target", () => {
  test("twoSum([2, 7, 11, 15], 9) => [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("twoSum([3, 2, 4], 6) => [1, 2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("twoSum([-1,-2,-3,-4,-5], -8) => [2,4]", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("twoSum([2,9,4,17], 32) => Not Found", () => {
    expect(twoSum([2, 9, 4, 17], 32)).toEqual("Not Found");
  });

  test("twoSum(what, 21) => TypeError", () => {
    expect(() => {
      twoSum("what", 21);
    }).toThrow("An array has not been passed");
  });

  test("twoSum([2,7,11,15], what) => TypeError", () => {
    expect(() => {
      twoSum([2, 7, 11, 15], "what");
    }).toThrow("The target is not a number");
  });
});
