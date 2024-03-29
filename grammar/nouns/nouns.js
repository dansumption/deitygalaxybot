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
const disorder = require("./disorder");
const famousPerson = require("./famousPerson");
const { foodItem, foodStuff, anyFood } = require("./food");
const game = require("./game");
const institution = require("./institution");
const liquid = require("./liquid");
const miscObject = require("./miscObject");
const quality = require("./quality");
const flower = require("./flower");
const tree = require("./tree");
const animal = require("./animal");
const vehicle = require("./vehicle");
const weapon = require("./weapon");
const day = require("./days");
const abstract = require("./abstract");
const { band } = require("./bands");
const { bird } = require("./birds");
const euphemism = require("./euphemisms");
const { relative, sibling, parent, offspring } = require("./relative");
const feeling = require("./feeling");

const nounToPluralise = [].concat(
  animal,
  bird,
  bodyPart,
  clothing,
  computerObject,
  day,
  flower,
  foodItem,
  game.map(game => `game of ${game}`),
  miscObject,
  relative,
  tree,
  vehicle,
  weapon
);

const nounNotToPluralise = [].concat(
  abstract,
  academicField,
  band,
  action,
  belief,
  buildingMaterial,
  collective,
  disorder,
  feeling,
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
const singleNoun = ["#nounNotToPluralise#", "#nounToPluralise.a#"];

module.exports = Object.assign(
  {},

  {
    anyNoun,
    singleNoun,

    nounToPluralise,
    nounNotToPluralise,
    abstract,
    day,
    bodyPart,
    clothing,
    computerObject,
    foodItem,
    miscObject,
    animal,
    bird,
    flower,
    feeling,
    tree,
    vehicle,
    weapon,

    academicField,
    action,
    belief,
    buildingMaterial,
    collective,
    disorder,
    famousPerson,
    foodStuff,
    game,
    institution,
    liquid,
    quality,
    newTech,
    euphemism,
    relative,
    sibling,
    parent,
    offspring,
    anyFood
  }
);
