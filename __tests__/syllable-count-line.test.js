import syllableCountLine from "../src/syllable-count-line.js";

describe("syllableCountLine function", () => {
  const array = ["hi", "hello"];
  const arrayTwo = ["Hello", "how", "are", "you?"];
  const arrayThree = ["?He4l!lo", "h'ow!", "are", "you?"];
  test("should take an array, and return correct number of syllables", () => {
    expect(syllableCountLine(array)).toEqual(3);
  });
  test("should take an array, and return correct number of syllables", () => {
    expect(syllableCountLine(arrayTwo)).toEqual(5);
  });
  test("should take an array, and return correct number of syllables", () => {
    expect(syllableCountLine(arrayThree)).toEqual(5);
  });
});
