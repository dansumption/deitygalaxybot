const grammar = require('./grammar');

let longest = '';
for (let index = 0; index < 5000; index++) {
  const phrase = grammar.flatten('#origin#');
  console.log(phrase, "\n");
  if (phrase.length > longest.length) {
    longest = phrase;
  }
}

grammar.debug();

console.log("\nLONGEST: ", longest, longest.length);
