import syllableCount from "../src/syllable-count.js";

describe("syllableCount function", () => {
  // To do
  const wordOne = "eye";
  const wordTwo = "hmm";
  const wordThree = "label";
  const wordFour = "table";
  const wordFive = "stake";
  const wordSix = "syllable";
  const wordSeven = "teacher";
  const wordEight = "four";
  const wordNine = "heterozygous";
  const wordTen = "thorough";
  const wordEleven = "cyborg";
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordOne)).toEqual(1);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordTwo)).toEqual(1);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordThree)).toEqual(2);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordFour)).toEqual(2);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordFive)).toEqual(1);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordSix)).toEqual(3);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordSeven)).toEqual(2);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordEight)).toEqual(1);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordNine)).toEqual(5);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordTen)).toEqual(2);
  });
  test("should take a string (word) as an argument, and correctly return the number of syllables it has", () => {
    expect(syllableCount(wordEleven)).toEqual(2);
  });
});
