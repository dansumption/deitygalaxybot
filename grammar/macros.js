const days = require("./nouns/days");

const today = days[new Date().getDay()];
module.exports = `[today:${today}]`;
