const corpora = require('corpora-project');

const extraAnimals = [
  'hawk moth',
  'vine weevil',
  'wolf spider',
  'zebra spider',
  'jumping spider',
]

const animal = corpora.getFile('animals', 'collateral_adjectives').animals.map(animalObj => 
  animalObj.name).concat(extraAnimals);

const bird = corpora.getFile('animals', 'birds_antarctica').birds
.concat(corpora.getFile('animals', 'birds_north_america').birds)
.reduce((allBirds, birdFamily) =>
  allBirds.concat(birdFamily.members.map(birdName => birdName.toLowerCase())),
  []
);

const flower = corpora.getFile('plants', 'flowers').flowers;

module.exports = { animal, bird, flower };
