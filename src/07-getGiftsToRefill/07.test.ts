import { describe, test, expect } from "@jest/globals";
import getGiftsToRefill from ".";

test("Test #2 - getGiftsToRefill(['bici', 'coche', 'bici', 'bici'], ['coche', 'bici', 'muñeca', 'coche'], ['bici', 'pc', 'pc'])", () => {
  expect(
    getGiftsToRefill(
      ["bici", "coche", "bici", "bici"],
      ["coche", "bici", "muñeca", "coche"],
      ["bici", "pc", "pc"]
    )
  ).toStrictEqual(["muñeca", "pc"]);
});
