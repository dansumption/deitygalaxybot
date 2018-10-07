const nouns = require("./nouns");
const bands = require("./bands");
const company = require("./company");
const birdRelatedStuff = require("./birds");
module.exports = Object.assign({}, nouns, bands, birdRelatedStuff, { company });
