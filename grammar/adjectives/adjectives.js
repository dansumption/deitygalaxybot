const corpora = require("corpora-project");
const simpleAdjectives = require("./adjectivesSimple");

const jokeAdjective = [
  "ill-advised",
  "unfunny",
  "quiet",
  "long",
  "boring",
  "tear-jerking",
  "complex",
  "repetitive",
  "confusing",
  "enlightening",
  "perceptive",
  "puzzling",
  "unnecessary",
  "obvious",
  "off-colour",
  "unfair",
  "erudite",
  "sloppy",
  "drunk",
  "rambling",
  "surreal",
  "intellectual",
  "pertinent",
  "#jokeAdjective# #nationality#"
];

const colours = [
  "aquamarine",
  "black",
  "blue",
  "brown",
  "golden",
  "green",
  "grey",
  "orange",
  "red",
  "salmon pink",
  "silver",
  "teal",
  "turquoise",
  "white",
  "yellow"
];

const wineDescriptions = corpora.getFile("foods", "wine_descriptions")
  .wine_descriptions;
const nationality = [
  "American",
  "Belgian",
  "Brazilian",
  "Canadian",
  "Czech",
  "Dutch",
  "Dwarven",
  "Elven",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "German",
  "Hungarian",
  "Irish",
  "Italian",
  "Japanese",
  "Klingon",
  "Korean",
  "Latvian",
  "Lithuanian",
  "Mexican",
  "North Korean",
  "Northern Irish",
  "Norwegian",
  "Orcish",
  "Polish",
  "Saudi Arabian",
  "Scottish",
  "South Georgian",
  "South Korean",
  "Swedish",
  "Swiss",
  "Vogon",
  "Welsh"
];
const materials = [
  "base metal",
  "cloth",
  "glitter",
  "irridium",
  "tin",
  "wooden"
];

const adjective = [].concat(
  simpleAdjectives,
  wineDescriptions,
  nationality,
  jokeAdjective,
  colours,
  materials
);

module.exports = {
  adjective,
  wineDescriptions,
  jokeAdjective,
  nationality,
  colours,
  materials
};
