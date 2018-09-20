const corpora = require("corpora-project");

const extraAnimals = [
  "Afghan hound",
  "barbary ape",
  "blobfish",
  "bull terrier",
  "carpenter bee",
  "catfish",
  "chihuahua",
  "dragon",
  "fucking meerkat",
  "giant squid",
  "goblin",
  "hawk moth",
  "hippogriff",
  "honey bee",
  "jumping spider",
  "kobold",
  "mandrill",
  "manta ray",
  "manticore",
  "marsh spirit",
  "ogre",
  "proboscis monkey",
  "pygmy marmoset",
  "sunfish",
  "tardigrade",
  "three-toed sloth",
  "troll",
  "unicorn",
  "vine weevil",
  "will-o-the-wisp",
  "wolf spider",
  "yorkshire terrier",
  "zebra spider"
];

module.exports = {
  animal: corpora
    .getFile("animals", "collateral_adjectives")
    .animals.map(animalObj => animalObj.name)
    .concat(extraAnimals)
};
