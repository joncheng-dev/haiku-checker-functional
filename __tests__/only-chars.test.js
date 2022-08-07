import onlyChars from "../src/only-chars.js";

describe("onlyChars function", () => {
  const punctuatedWord = "!Xo.bi_le-";
  const punctuatedString =
    "-Ex$am.ple* ;: {} o=f ,a _ st#ri!ng wi&th/out^ `~)() punctuation%";
  test("should take string as an argument, and correctly return the same string without special characters", () => {
    expect(onlyChars(punctuatedWord)).toEqual("Xobile");
  });
  test("should take string as an argument, and correctly return the same string without special characters", () => {
    expect(onlyChars(punctuatedString)).toEqual(
      "Example of a string without punctuation"
    );
  });
});
