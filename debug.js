const grammar = require("./grammar");
let macros = require("./grammar/macros");

const COUNT = 1000;
macros +=
  "[deityName:Süüm-yüüng-dei'ï'ðéé][spiritAnimal:hooded crow][userHandle:@dansumption]";

const testTemplate = "#origin#";
// "#deityName# orders you to find your bandmates and join #band.a#";
// "#[deityName:Waï-ceizsteuach]replyWithDeity#";

let longest = "";
for (let index = 0; index < COUNT; index++) {
  const phrase = grammar.flatten(macros + testTemplate);
  console.log(phrase, "\n");
  if (phrase.length > longest.length) {
    longest = phrase;
  }
  // grammar.clearState();
  // const root = grammar.createRoot(testTemplate);
  // root.expand();
  // const deityName = grammar.symbols.deityName.uses.slice(-1)[0].node.childRule;
  // const phrase2 = `${root.finishedText} #${deityName.replace(/[-']/g, "")}`;
  // console.log(phrase2, "\n");
}

// grammar.debug();

console.log("\nLONGEST: ", longest, longest.length);
