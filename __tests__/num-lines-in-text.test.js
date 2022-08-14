import countLinesInText from "../src/line-check.js";

// Check number of lines from user input
describe("countLinesInText function", () => {
  const testingTextA = "How do you do?\nI am fine thank you.\nAnd you?";
  const testingTextB = "Hi\nhello";
  const testingTextC = "How are you?";
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(countLinesInText(testingTextA)).toEqual(3);
  });
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(countLinesInText(testingTextB)).toEqual(2);
  });
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(countLinesInText(testingTextC)).toEqual(1);
  });
});
