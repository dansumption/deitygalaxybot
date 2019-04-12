const enthusiasm = require("./enthusiasm");
const pillock = require("./pillock");
const wanderer = require("./wanderer");

let question = [];
let statement = [];
let instruction = [];

[enthusiasm, pillock, wanderer].forEach(phrases => {
  phrases.questions && question.push(...phrases.questions);
  phrases.statements && statement.push(...phrases.statements);
  phrases.instructions && instruction.push(...phrases.instructions);
});

module.exports = {
  question,
  statement,
  instruction
};
