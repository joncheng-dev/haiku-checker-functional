import onlyChars from "../src/only-chars.js";
import syllableCount from "../src/syllable-count.js";

// Individual words' syllables.
const syllableCountLine = (array) => {
  let lineSyllableCount = 0;
  for (let i = 0; i < array.length; i++) {
    lineSyllableCount = lineSyllableCount + syllableCount(onlyChars(array[i]));
  }
  return lineSyllableCount;
};

// for (let i = 0; i < lineToWords(textSeparated[0]).length; i++) {
//   console.log(
//     `Syllables: ${syllableCount(onlyChars(lineToWords(textSeparated[0])[i]))}`
//   );
//   lineSyllableCount =
//     lineSyllableCount +
//     syllableCount(onlyChars(lineToWords(textSeparated[0])[i]));
// }

export default syllableCountLine;
