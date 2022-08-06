import { lineCheck } from "../src/haiku.js";

// Check number of lines from user input
describe("lineCheck function", () => {
  const testingTextA = "How do you do?\nI am fine thank you.\nAnd you?";
  const testingTextB = "Hi\nhello";
  const testingTextC = "How are you?";
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(lineCheck(testingTextA)).toEqual(3);
  });
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(lineCheck(testingTextB)).toEqual(2);
  });
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(lineCheck(testingTextC)).toEqual(1);
  });
});
