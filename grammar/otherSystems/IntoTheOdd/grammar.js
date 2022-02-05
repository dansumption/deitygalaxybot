const name = require("./name");
const occupation = require("./occupation");
const manner = require("./manner");
const whatHappened = require("./whatHappened");
const company = require("./company");
const cults = require("./cults");
module.exports = Object.assign(
  {},
  name,
  occupation,
  manner,
  whatHappened,
  company,
  cults
);
