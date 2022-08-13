import lineToWords from "../src/line-to-words.js";
import onlyChars from "../src/only-chars.js";
import syllableCount from "../src/syllable-count.js";

// Individual words' syllables.
let lineSyllableCount = 0;
for (let i = 0; i < lineToWords(textSeparated[0]).length; i++) {
  console.log(
    `Syllables: ${syllableCount(onlyChars(lineToWords(textSeparated[0])[i]))}`
  );
  lineSyllableCount =
    lineSyllableCount +
    syllableCount(onlyChars(lineToWords(textSeparated[0])[i]));
}

export default lineSyllableCount;
