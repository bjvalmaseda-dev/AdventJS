import { describe, test, expect } from "@jest/globals";
import getMaxGifts from ".";

describe("Day 5 - getMaxCities", () => {
  test("return a number", () => {
    expect(typeof getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(
      "number"
    );
  });

  test("test case #1 - getMaxGifts([12, 3, 11, 5, 7], 20, 3)", () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20);
  });

  test("test case #2 getMaxGifts([50], 15, 1)", () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0);
  });

  test("test case #3 getMaxGifts([50], 100, 1)", () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50);
  });

  test("test case #4 getMaxGifts([50, 70], 100, 1)", () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70);
  });

  test("test case #5 getMaxGifts([50, 70, 30], 100, 2)", () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100);
  });

  test("test case #6 getMaxGifts([50, 70, 30], 100, 3)", () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100);
  });

  test("test case #7 getMaxGifts([50, 70, 30], 100, 4)", () => {
    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100);
  });
});
