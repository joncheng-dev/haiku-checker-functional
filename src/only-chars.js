const onlyChars = (word) => {
  const noPunctuation = word
    .replace(/[-.,/#!?$%@^&*;:{}=_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
  return noPunctuation;
};

export default onlyChars;
