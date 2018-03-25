const corpora = require('corpora-project');
const nounNotToPluralise = require('./noun-uncountable');
const nounToPluralise = require('./noun-countable');

const buildingMaterial = [
  "human hair",
  "tears",
  "darkness",
  "sorrow",
  "glass and steel",
  "polycarbon",
  "sand",
  "planished copper",
  "burnished gold",
  "sterling silver",
  "pig iron",
  "human thoughts",
  "human cares",
  "human woe",
  "human happiness",
  "Twitter",
  "human bone",
  "sheep skulls",
  "chitin",
  "unfeasibly large insects",
  "your Twitter timeline",
  "your retweets",
  "clay and sheep dung",
  "#animal# blood",
  "jellyfish",
  "cartilage",
  "mediaeval grammar",
  "hate",
  "happiness",
  "your happiest memories",
  "cornstarch",
  "diet Coke and Mentos",
  "foraged greenery",
  "weapons-grade plutonium",
  "the tears of the departed",
  "the wood of a thousand-year #tree# tree",
  "iron forged in the fires of #placeName#",
  "life",
  "death",
  "taxes",
  "Euros"
];

const newTech = corpora.getFile('technology', 'new_technologies').technologies;

const anyNoun = [
  "#nounNotToPluralise#", "#nounToPluralise#",
]

module.exports = { nounNotToPluralise, nounToPluralise, anyNoun, newTech, buildingMaterial };