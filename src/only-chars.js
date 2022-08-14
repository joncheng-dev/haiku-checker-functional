const onlyChars = (word) => {
  const regex = /[^A-Za-z]/g;
  return word.replace(regex, "");
};

export default onlyChars;
