const tracery = require("../../../tracery/tracery");
const modifiers = require("../../../tracery/mods-eng-basic");
const origin = require("./grammar");
const grammar = tracery.createGrammar(origin);
grammar.addModifiers(modifiers);

// console.dir(grammar);
const COUNT = 5;
const template = `
#forename# #surname#, the #manner#
#occupation# (#capability#)
Worked for #company#
Member of the #cultDescription# #collective#
#whatHappened#
Connection: #connection#
`;

for (let i = 0; i < COUNT; i++) {
  const phrase = grammar.flatten(template);
  console.log(phrase + "\n");
}
