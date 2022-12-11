const capitalize = (word: string) =>
  word[0].toUpperCase() + word.substring(1).toLowerCase();

const extractPokemonUrlId = (url: string) => {
  return url.split("/")[url.split("/").length - 2];
};

const stringUtils = {
  capitalize,
  extractPokemonUrlId,
};

export default stringUtils;
