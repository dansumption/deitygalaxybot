const tracery = require('./tracery/tracery');
const modifiers = require('./tracery/mods-eng-basic');
const origin = require('./grammar/origin');

const grammar = tracery.createGrammar(origin);
grammar.addModifiers(modifiers);

grammar.debug = () => {
  const replaceNonStandardMods = /toUpperCase/;
  console.log(JSON.stringify(origin).replace(replaceNonStandardMods, ''), "\n");
}

module.exports = grammar;