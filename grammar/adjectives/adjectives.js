const corpora = require("corpora-project");
const simpleAdjectives = require("./adjectivesSimple");

const moreOrLess = ["more", "less"]
  .map(term => [
    term,
    `much ${term}`,
    `slightly ${term}`,
    `a little ${term}`,
    `ever so much ${term}`,
    `somewhat ${term}`
  ])
  .flat();

const jokeAdjective = [
  "boring",
  "complex",
  "confusing",
  "drunk",
  "enlightening",
  "erudite",
  "ill-advised",
  "intellectual",
  "long",
  "nonsensical",
  "obvious",
  "off-colour",
  "perceptive",
  "pertinent",
  "puzzling",
  "quiet",
  "rambling",
  "repetitive",
  "sloppy",
  "smutty",
  "surreal",
  "tear-jerking",
  "unfair",
  "unfunny",
  "unnecessary",
  "woke",
  "#jokeAdjective# #nationality#",
  "#adverb# #jokeAdjective#"
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
  "yellow",
  "#adverb# #colours#"
];

const wineDescriptions = corpora
  .getFile("foods", "wine_descriptions")
  .wine_descriptions.concat(["#adverb# #wineDescriptions#"]);
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
  "Welsh",
  "#adverb# #nationality#"
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
  materials,
  moreOrLess
};
