const grammar = require("./grammar");
let macros = require("./grammar/macros");

const COUNT = 1000;
macros +=
  "[deityName:Süüm-yüüng-dei'ï'ðéé]" +
  "[deityDomain:Voodoo]" +
  "[deityType:deity]" +
  "[spiritAnimal:hooded crow]" +
  "[userHandle:@dansumption]" +
  "[deityThey:she][deityThem:her][deityTheir:her][deityTheirs:hers]";

const testTemplate = "#origin#";
// "#deityFull# is admiring #deityTheir#self in a mirror-smooth pool of #nounNotToPluralise#";
// "#deityName# orders you to find your bandmates and join #band.a#";
// "#[deityName:Waï-ceizsteuach]replyWithDeity#"

const TweetLength = 249;
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
  "\nLONGEST:\n\n",
  tooLong
    .sort((a, b) => (a.length > b.length ? a : b))
    .map(phrase => `${phrase.length}: ${phrase}`)
    .join("\n\n")
);
