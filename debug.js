const grammar = require("./grammar");

const COUNT = 1000;

let longest = "";
for (let index = 0; index < COUNT; index++) {
  const phrase = grammar.flatten("#origin#");
  console.log(phrase, "\n");
  if (phrase.length > longest.length) {
    longest = phrase;
  }
  const reply = grammar.flatten(
    "#[userHandle:@dansumption][deityName:REPLYDEITY]replyWithDeity#"
  );
  console.log(reply, "\n");
}

grammar.debug();

console.log("\nLONGEST: ", longest, longest.length);
