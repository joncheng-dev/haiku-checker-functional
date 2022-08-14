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

export default syllableCountLine;
