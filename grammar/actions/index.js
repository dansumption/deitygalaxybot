const animalActions = require("./animalActions");
const asks = require("./asks");
const clothe = require("./clothe");
const communicate = require("./communicate");
const get = require("./get");
const making = require("./making");
const meditate = require("./meditate");
const toyWith = require("./toyWith");
const travel = require("./travel");
const twoPersonActions = require("./twoPersonActions");
const verbs = require("./verbs");

module.exports = Object.assign(
  {},
  toyWith,
  travel,
  twoPersonActions,
  animalActions,
  communicate,
  verbs,
  asks,
  clothe,
  get,
  making,
  meditate
);
