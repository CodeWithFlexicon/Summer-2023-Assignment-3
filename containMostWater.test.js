const containMostWater = require("./containMostWater");

describe("Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water", () => {
  test("containMostWater([1,8,6,2,5,4,8,3,7]) => 49", () => {
    expect(containMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("containMostWater([4,3,2,1,4]) => 16", () => {
    expect(containMostWater([4, 3, 2, 1, 4])).toBe(16);
  });

  test("containMostWater([1,2,1]) => 2", () => {
    expect(containMostWater([1, 2, 1])).toBe(2);
  });

  test("containMostWater([1,1]) => 1", () => {
    expect(containMostWater([1, 1])).toBe(1);
  });

  test("containMostWater([1]) => null", () => {
    expect(containMostWater([1])).toBe(null);
  });

  test("containMostWater(what) => TypeError", () => {
    expect(() => {
      containMostWater("what");
    }).toThrow("An array has not been passed");
  });
});
