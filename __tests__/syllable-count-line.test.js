import syllableCountLine from "../src/syllable-count-line.js";

describe("syllableCountLine function", () => {
  const array = ["hi", "hello"];
  test("should take an array, and return 1", () => {
    expect(syllableCountLine(array)).toEqual(3);
  });
});
