const grammar = require("./grammar");

const COUNT = 1000;

// const testTemplate = "#[userHandle:@dansumption][deityName:REPLYDEITY]replyWithDeity#";

const testTemplate = "#origin#";
// 'cries "may the person who is without #quality# cast the first #miscObject#"'
// "#[userHandle:@Geeg23][deityName:Waï-ceizsteuach]replyWithDeity#";
// "#[deityName:Thor][spiritAnimal:rat]pilgrimage#";

let longest = "";
for (let index = 0; index < COUNT; index++) {
  const phrase = grammar.flatten(testTemplate);
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

// console.log("\nLONGEST: ", longest, longest.length);
