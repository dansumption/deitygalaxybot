const nouns = require("./nouns");
const bands = require("./bands");
const birds = require("./birds");
const company = require("./company");
module.exports = Object.assign({}, nouns, bands, birds, { company });
