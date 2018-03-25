const grammar = require("./grammar");

const COUNT = 1000;

// const replyTemplate = "#[userHandle:@dansumption][deityName:REPLYDEITY]replyWithDeity#";

const testTemplate =
  "#name#  demands that you make an offering of burnt #foodStuff#, presented in #nounToPluralise.a# made of #buildingMaterial#.";

let longest = "";
for (let index = 0; index < COUNT; index++) {
  const phrase = grammar.flatten(testTemplate);
  console.log(phrase, "\n");
  if (phrase.length > longest.length) {
    longest = phrase;
  }
}

grammar.debug();

console.log("\nLONGEST: ", longest, longest.length);
