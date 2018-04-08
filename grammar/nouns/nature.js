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
  "ogre",
  "proboscis monkey",
  "pygmy marmoset",
  "sunfish",
  "tardigrade",
  "three-toed sloth",
  "troll",
  "unicorn",
  "vine weevil",
  "wolf spider",
  "yorkshire terrier",
  "zebra spider"
];

module.exports = {
  animal: corpora
    .getFile("animals", "collateral_adjectives")
    .animals.map(animalObj => animalObj.name)
    .concat(extraAnimals),

  flower: corpora.getFile("plants", "flowers").flowers,

  tree: [
    "apple",
    "ash",
    "banyan",
    "beech",
    "birch",
    "blackwood",
    "cedar",
    "cherry",
    "ebony",
    "elder",
    "elm",
    "hickory",
    "holly",
    "ironwood",
    "joojoob",
    "juniper",
    "larch",
    "mahogany",
    "maple",
    "monkey puzzle",
    "nutmeg",
    "oak",
    "pine",
    "pogglenut",
    "purpleheart",
    "redwood",
    "rosewood",
    "sessile oak",
    "stinkwood",
    "sycamore",
    "tulipwood",
    "walnut",
    "wenge",
    "zebrano"
  ]
};
