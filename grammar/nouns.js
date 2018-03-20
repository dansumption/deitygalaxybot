const corpora = require('corpora-project');
const nounNotToPluralise = require('./noun-uncountable');
const nounToPluralise = require('./noun-countable');

const newTech = corpora.getFile('technology', 'new_technologies').technologies;

const anyNoun = [
  "#nounNotToPluralise#", "#nounToPluralise#",
]

module.exports = { nounNotToPluralise, nounToPluralise, anyNoun, newTech };