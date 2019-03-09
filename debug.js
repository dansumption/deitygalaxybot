/* eslint-disable */

const grammar = require("./grammar");
const { story } = require("./grammar/story");
let macros = require("./grammar/macros");
var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

const templateForceText =
  'In #dwelling.a# #deityPlace#, #deityFull# cries "eschew your #belief#, only by #meditationAction# #adjective# #deityDomain# will you be saved".';
const templateForceReply = "#[deityName:Waï-ceizsteuach]replyWithDeity#";

let template = argv.template || "#origin#";

// template = templateForceText; // uncomment to force the above template
// template = templateForceReply; // uncomment to force the above reply template

const COUNT = argv.count || 2000;

macros += "#setDeity##setCharacter#";
// "[deityName:Süüm-yüüng-dei'ï'ðéé]" +
// "[deityDomain:Voodoo]" +
// "[deityType:deity]" +
// "[deityPlace:in Sheffield]" +
// "[spiritAnimal:hooded crow]" +
// "[userHandle:@dansumption]" +
// "[deityThey:she][deityThem:her][deityTheir:her][deityTheirs:hers]";

const TweetLength = argv.max || 259;
let tooLong = [];

const getPhrase = () => {
  const phrase = grammar.flatten(macros + template);
  console.log(phrase, "\n");
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
  listPhrases();
}

// grammar.debug();

console.log(
  "\nLONGEST:\n\n" +
    tooLong
      .sort((a, b) => a.length - b.length)
      .map(phrase => `${phrase.length}: ${phrase}`)
      .join("\n\n")
);
