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
const punishment = require("./punishment");
const famousPerson = require("./famousPerson");
const { foodItem, foodStuff } = require("./food");
const game = require("./game");
const institution = require("./institution");
const liquid = require("./liquid");
const miscObject = require("./miscObject");
const quality = require("./quality");
const { flower, tree } = require("./nature");
const animals = require("./animals");
const vehicle = require("./vehicle");
const weapon = require("./weapon");
const day = require("./days");
const { band } = require("./bands");
const { bird } = require("./birds");
const euphemism = require("./euphemisms");

const nounToPluralise = [].concat(
  bodyPart,
  bird,
  clothing,
  computerObject,
  day,
  foodItem,
  miscObject,
  animals,
  bird,
  flower,
  tree,
  vehicle,
  weapon,
  game.map(game => `game of ${game}`)
);

const nounNotToPluralise = [].concat(
  academicField,
  band,
  action,
  belief,
  buildingMaterial,
  collective,
  punishment,
  famousPerson,
  foodStuff,
  game,
  institution,
  liquid,
  newTech,
  quality,
  euphemism
);

const anyNoun = ["#nounNotToPluralise#", "#nounToPluralise#"];

module.exports = Object.assign(
  {},

  {
    anyNoun,

    nounToPluralise,
    nounNotToPluralise,

    day,
    bodyPart,
    clothing,
    computerObject,
    foodItem,
    miscObject,
    animals,
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
    punishment,
    famousPerson,
    foodStuff,
    game,
    institution,
    liquid,
    quality,
    newTech,
    euphemism
  }
);
