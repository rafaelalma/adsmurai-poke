const capitalize = (word: string) =>
  word[0].toUpperCase() + word.substring(1).toLowerCase();

const stringUtils = {
  capitalize,
};

export default stringUtils;
