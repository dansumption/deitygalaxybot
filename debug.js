const grammar = require("./grammar");
const macros = require("./grammar/macros");

const COUNT = 1000;

// const testTemplate = "#[userHandle:@dansumption][deityName:REPLYDEITY]replyWithDeity#";

const testTemplate =
  // "#origin#";
  "You wait #takesTime#, but #deityName# #busyActivity##busyInstruction#.";
// `${macros}Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies.It must be #today#.`;
// "#[userHandle:@dansumption][deityName:Waï-ceizsteuach]replyWithDeity#";
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
