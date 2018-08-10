const deity = require("./deity");
const actor = require("./actor");
const name = require("./name");
const people = require("./people");

module.exports = Object.assign({}, actor, deity, name, people);
