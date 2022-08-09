const vowelCount = (word) => {
  const count = word.toLowerCase().match(/[aeiouy]/gi);
  if (count != null) {
    return count.length;
  } else {
    return 0;
  }
};

// const syllableCount = (word) => {
//   const noPunctuation = word
//     .replace(/[-.,/#!?$%@^&*;:{}=_`~()]/g, "")
//     .replace(/\s{2,}/g, " ");
//   return (noPunctuation) => {
//     let vowels = vowelCount(word);
//     if (word.length <= 3 && word.length > 0) {
//       return 1;
//     } else {
//       // Subtract vowel if word ends with 'e' but not 'le'
//       if (
//         word.substr(word.length - 1) === "e" &&
//         word.substr(word.length - 2) != "le"
//       ) {
//         vowels -= 1;
//       }
//       // Subtract vowel if vowel follows another vowel.
//       const regex = /[aeiouy](?=[aeiouy])/g;
//       const found = word.match(regex);
//       if (word.match(regex)) {
//         found.forEach(() => (vowels -= 1));
//       }
//     }
//     return vowels;
//   };
// };

const syllableCount = (word) => {
  let vowels = vowelCount(word);
  if (word.length <= 3 && word.length > 0) {
    return 1;
  } else {
    // Subtract vowel if word ends with 'e' but not 'le'
    if (
      word.substr(word.length - 1) === "e" &&
      word.substr(word.length - 2) != "le"
    ) {
      vowels -= 1;
    }
    // Subtract vowel if vowel follows another vowel.
    const regex = /[aeiouy](?=[aeiouy])/g;
    const found = word.match(regex);
    if (word.match(regex)) {
      found.forEach(() => (vowels -= 1));
    }
  }
  return vowels;
};

export default syllableCount;
