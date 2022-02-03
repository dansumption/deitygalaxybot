/* eslint-disable */

const complex = require("./debugComplex");
const grammar = require("./grammar");
const { story } = require("./grammar/stories/");
let macros = require("./grammar/macros");
var argv = require("minimist")(process.argv.slice(2));
// console.dir(argv);
// console.log("Story:", story);

const templateWithoutReply = "#initialStory#\n";
const templateForceText = "After #takesTime#, #instructing#\n";
const templateForceReply = "#[deityName:Waï-ceizsteuach]replyWithDeity#\n";

let template = argv.template || "#origin#\n\n\n";
// template = complex; // uncomment to use template from separate file debugComplex.js
// template = templateForceText; // uncomment to force the above template
template = templateForceReply; // uncomment to force the above reply template
// template = templateWithoutReply; // uncomment to force the above reply template
// template = "#dwelling#"; // insert manual template here

// Checks to perform:
// Search code for [^a-zA-Z]#(\w|\.)+[^#][, ] to find unmatched #words#
// Search output for (( and )) and .. and ,. and ,.
// Check how many of the output samples are over maximum number of characters
//    (this is listed at the end of the debug output)

const COUNT = argv.count || 123;

macros +=
  "#setDeity##setCharacter#" +
  // "[deityName:Süüm-yüüng-dei'ï'ðéé]" +
  // "[deityDomain:Voodoo]" +
  // "[deityType:deity]" +
  // "[deityPlace:in Sheffield]" +
  // "[spiritAnimal:hooded crow]" +
  "[userHandle:@dansumption]" +
  // "[deityThey:she][deityThem:her][deityTheir:her][deityTheirs:hers]";
  "";

const TweetLength = argv.max || 259;
let tooLong = [];

const getPhrase = () => {
  const phrase = grammar.flatten(macros + template);
  console.log(phrase);
  if (phrase.length > TweetLength) {
    tooLong.push(phrase);
  }
};

const listPhrases = () => {
  for (let index = 0; index < COUNT; index++) {
    getPhrase();
  }
};

if (argv._.find(val => val === "stories")) {
  story.forEach(scenario => {
    template = scenario;
    listPhrases();
    console.log("\n---\n\n");
  });
} else {
  // grammar.debug();
  listPhrases();
}

console.log(
  "\nLONGEST:\n\n" +
    tooLong
      .sort((a, b) => a.length - b.length)
      .map(phrase => `${phrase.length}: ${phrase}`)
      .join("\n\n"),
  `That makes ${tooLong.length} out of ${COUNT} possible tweets`
);
