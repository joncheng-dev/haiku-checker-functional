import lineToWords from "../src/line-to-words.js";

describe("lineToWords function", () => {
  const testLineA = "How do you do?";
  const testLineB = "6782 asdf 234gba";
  const testLineC =
    "logic should verify English syllable rules (and exceptions) one at a time.";
  test("should take string as argument, and correctly return an array of individual words", () => {
    expect(lineToWords(testLineA)).toEqual(["How", "do", "you", "do?"]);
  });
  test("should take string as argument, and correctly return an array of individual words", () => {
    expect(lineToWords(testLineB)).toEqual(["6782", "asdf", "234gba"]);
  });
  test("should take string as argument, and correctly return an array of individual words", () => {
    expect(lineToWords(testLineC)).toEqual([
      "logic",
      "should",
      "verify",
      "English",
      "syllable",
      "rules",
      "(and",
      "exceptions)",
      "one",
      "at",
      "a",
      "time.",
    ]);
  });
});
