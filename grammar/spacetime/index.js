const festival = require("./festival");
const places = require("./places");
const time = require("./time");
const town = require("./towns");

module.exports = Object.assign({}, festival, places, time, town);
