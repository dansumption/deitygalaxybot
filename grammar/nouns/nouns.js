const corpora = require("corpora-project");

const newTech = corpora.getFile("technology", "new_technologies").technologies;
const academicField = require("./academicField");
const action = require("./action");
const belief = require("./belief");
const bodyPart = require("./bodyPart");
const buildingMaterial = require("./buildingMaterial");
const clothing = require("./clothing");
const collective = require("./collective");
const computerObject = require("./computerObject");
const disease = require("./disease");
const famousPerson = require("./famousPerson");
const { foodItem, foodStuff } = require("./food");
const game = require("./game");
const institution = require("./institution");
const liquid = require("./liquid");
const miscObject = require("./miscObject");
const quality = require("./quality");
const { animal, bird, flower, tree } = require("./nature");
const vehicle = require("./vehicle");
const weapon = require("./weapon");

const nounToPluralise = [].concat(
  bodyPart,
  clothing,
  computerObject,
  foodItem,
  miscObject,
  animal,
  bird,
  flower,
  tree,
  vehicle,
  weapon,
  game.map(game => `game of ${game}`)
);

const nounNotToPluralise = [].concat(
  academicField,
  action,
  belief,
  buildingMaterial,
  collective,
  disease,
  famousPerson,
  foodStuff,
  game,
  institution,
  liquid,
  newTech,
  quality
);

const anyNoun = ["#nounNotToPluralise#", "#nounToPluralise#"];

module.exports = Object.assign(
  {},

  {
    anyNoun,

    nounToPluralise,
    nounNotToPluralise,

    bodyPart,
    clothing,
    computerObject,
    foodItem,
    miscObject,
    animal,
    bird,
    flower,
    tree,
    vehicle,
    weapon,

    academicField,
    action,
    belief,
    buildingMaterial,
    collective,
    disease,
    famousPerson,
    foodStuff,
    game,
    institution,
    liquid,
    quality,
    newTech
  }
);
