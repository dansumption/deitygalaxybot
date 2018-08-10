const festival = require("./festival");
const places = require("./places");
const time = require("./time");

module.exports = Object.assign({}, festival, places, time);
