export { lineCheck };

const lineCheck = (text) => {
  return text.split(/\r*\n/).length;
};
