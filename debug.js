/* eslint-disable */

const grammar = require("./grammar");
const { story } = require("./grammar/stories/story");
let macros = require("./grammar/macros");

const COUNT = 2000;
macros += "#setDeity#";
// "[deityName:Süüm-yüüng-dei'ï'ðéé]" +
// "[deityDomain:Voodoo]" +
// "[deityType:deity]" +
// "[deityPlace:in Sheffield]" +
// "[spiritAnimal:hooded crow]" +
// "[userHandle:@dansumption]" +
// "[deityThey:she][deityThem:her][deityTheir:her][deityTheirs:hers]";

const templateS = story[1];
const templateO = "#origin#";
const templateR = "#[deityName:Waï-ceizsteuach]replyWithDeity#";

const testTemplate = templateO;

const TweetLength = 259;
let tooLong = [];
for (let index = 0; index < COUNT; index++) {
  const phrase = grammar.flatten(macros + testTemplate);
  console.log(phrase, "\n");
  if (phrase.length > TweetLength) {
    tooLong.push(phrase);
  }
  // grammar.clearState();
  // const root = grammar.createRoot(testTemplate);
  // root.expand();
  // const deityName = grammar.symbols.deityName.uses.slice(-1)[0].node.childRule;
  // const phrase2 = `${root.finishedText} #${deityName.replace(/[-']/g, "")}`;
  // console.log(phrase2, "\n");
}

// grammar.debug();

console.log(
  "\nLONGEST:\n\n" +
    tooLong
      .sort((a, b) => a.length - b.length)
      .map(phrase => `${phrase.length}: ${phrase}`)
      .join("\n\n")
);
