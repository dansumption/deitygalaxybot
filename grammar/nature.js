const corpora = require("corpora-project");

const extraAnimals = [
  "mandrill",
  "barbary ape",
  "pygmy marmoset",
  "fucking meerkat",
  "hawk moth",
  "vine weevil",
  "wolf spider",
  "zebra spider",
  "jumping spider",
  "blobfish",
  "proboscis monkey",
  "tardigrade",
  "unicorn",
  "manticore",
  "dragon",
  "kobold",
  "hippogriff",
  "bull terrier",
  "yorkshire terrier",
  "Afghan hound",
  "giant squid",
  "three-toed sloth",
  "catfish",
  "chihuahua",
  "manta ray",
  "sunfish",
  "troll",
  "ogre",
  "goblin"
];

module.exports = {
  animal: corpora
    .getFile("animals", "collateral_adjectives")
    .animals.map(animalObj => animalObj.name)
    .concat(extraAnimals),

  bird: corpora
    .getFile("animals", "birds_antarctica")
    .birds.concat(corpora.getFile("animals", "birds_north_america").birds)
    .reduce(
      (allBirds, birdFamily) =>
        allBirds.concat(
          birdFamily.members.map(birdName => birdName.toLowerCase())
        ),
      []
    ),

  flower: corpora.getFile("plants", "flowers").flowers,

  tree: [
    "sessile oak",
    "oak",
    "ash",
    "birch",
    "holly",
    "elder",
    "beech",
    "pine",
    "monkey puzzle",
    "redwood",
    "walnut",
    "cherry",
    "apple",
    "ebony",
    "maple",
    "blackwood",
    "purpleheart",
    "rosewood",
    "stinkwood",
    "sycamore",
    "tulipwood",
    "wenge",
    "zebrano",
    "cedar",
    "elm",
    "hickory",
    "ironwood",
    "nutmeg",
    "larch",
    "mahogany"
  ]
};
