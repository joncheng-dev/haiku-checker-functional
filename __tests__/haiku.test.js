import { lineCheck } from "../src/haiku.js";

// Check number of lines from user input
describe("lineCheck function", () => {
  const testingText = "How do you do?\nI am fine thank you.\nAnd you?";
  test("should take text as an argument, and correctly return the number of new lines in the string", () => {
    expect(lineCheck(testingText)).toEqual(3);
  });
});
