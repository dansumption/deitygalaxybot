const asks = require("./asks");
const verbs = require("./verbs");
const travel = require("./travel");
const communicate = require("./communicate");
const meditate = require("./meditate");
const animalActions = require("./animalActions");
const twoPersonActions = require("./twoPersonActions");
const making = require("./making");
const clothe = require("./clothe");
const get = require("./get");

module.exports = Object.assign(
  {},
  asks,
  verbs,
  travel,
  communicate,
  meditate,
  animalActions,
  twoPersonActions,
  making,
  clothe,
  get
);
