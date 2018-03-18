const corpora = require('corpora-project');

const animal = corpora.getFile('animals', 'collateral_adjectives').animals.map(animalObj => 
  `[animalType:${animalObj.name}][animalAdjective:${animalObj.collateral_adjectives.join(',')}]`
)

const bird = corpora.getFile('animals', 'birds_antarctica').birds
.concat(corpora.getFile('animals', 'birds_north_america').birds)
.map(birdFamily =>
  `[birdFamily:${birdFamily.family}][birdMember:${birdFamily.members.join(',').toLowerCase()}]`
);

module.exports = { animal, bird };
