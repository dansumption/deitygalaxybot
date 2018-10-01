const corpora = require("corpora-project");

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

const wineDescriptions = corpora.getFile("foods", "wine_descriptions")
  .wine_descriptions;
const adjectives = corpora.getFile("words", "adjs").adjs;
const nationality = [
  "American",
  "Belgian",
  "Brazilian",
  "Canadian",
  "Czech",
  "Dutch",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "German",
  "Hungarian",
  "Irish",
  "Italian",
  "Japanese",
  "Korean",
  "Latvian",
  "Lithuanian",
  "Mexican",
  "North Korean",
  "Northern Irish",
  "Norwegian",
  "Polish",
  "Saudi Arabian",
  "Scottish",
  "South Georgian",
  "South Korean",
  "Swedish",
  "Swiss",
  "Welsh"
];
module.exports = {
  adjective: [
    "actinic",
    "artisanal",
    "awkward",
    "base metal",
    "black",
    "bloody",
    "blue",
    "bottomless",
    "brown",
    "cromulent",
    "desiccated",
    "empty",
    "faded",
    "filthy",
    "flimsy",
    "gelid",
    "golden",
    "green",
    "grey",
    "hand-made",
    "hidden",
    "invisible",
    "irridium",
    "macerated",
    "nearest",
    "object-oriented",
    "orange",
    "other",
    "overrated",
    "oversized",
    "overt",
    "pathetic",
    "piebald",
    "prosaic",
    "prosthetic",
    "pure",
    "radioactive",
    "rather pathetic",
    "red",
    "secret",
    "secular",
    "silver",
    "smelly",
    "sodden",
    "sodding",
    "tattered",
    "tatterdemalion",
    "white",
    "wild",
    "wooden",
    "yellow",
    "shape-shifting"
  ].concat(wineDescriptions, adjectives, nationality, jokeAdjective),
  wineDescriptions,
  jokeAdjective,
  nationality
};
