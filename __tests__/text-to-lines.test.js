import textToLine from "../src/text-to-lines.js";

describe("textToLine function", () => {
  const testingTextA = "How do you do?\nI am fine thank you.\nAnd you?";
  const testingTextB = "Hi\nhello";
  const testingTextC = "How are you?";
  test("should take text as an argument, and correctly return an array of elements split where a new line character is found", () => {
    expect(textToLine(testingTextA)).toEqual([
      "How do you do?",
      "I am fine thank you.",
      "And you?",
    ]);
  });
  test("should take text as an argument, and correctly return an array of elements split where a new line character is found", () => {
    expect(textToLine(testingTextB)).toEqual(["Hi", "hello"]);
  });
  test("should take text as an argument, and correctly return an array of elements split where a new line character is found", () => {
    expect(textToLine(testingTextC)).toEqual(["How are you?"]);
  });
});
