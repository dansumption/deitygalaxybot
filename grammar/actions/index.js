const animalActions = require("./animalActions");
const asks = require("./asks");
const wear = require("./wear");
const shout = require("./shout");
const get = require("./get");
const making = require("./making");
const meditating = require("./meditating");
const interact = require("./interact");
const travel = require("./travel");
const twoPersonActions = require("./twoPersonActions");
const verbs = require("./verbs");

module.exports = Object.assign(
  {},
  interact,
  travel,
  twoPersonActions,
  animalActions,
  shout,
  verbs,
  asks,
  wear,
  get,
  making,
  meditating
);
