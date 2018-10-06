const nouns = require("./nouns");
const bands = require("./bands");
const company = require("./company");
module.exports = Object.assign({}, nouns, bands, { company });
