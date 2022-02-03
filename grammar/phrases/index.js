const pilgrims = [
  require("./cat"),
  require("./electric-dreamer"),
  require("./enthusiasm"),
  require("./pillock"),
  require("./serialism"),
  require("./wanderer"),
  require("./interactive")
];

let question = [];
let statement = [];
let instruction = [];

pilgrims.forEach(phrases => {
  phrases.questions && question.push(...phrases.questions);
  phrases.statements && statement.push(...phrases.statements);
  phrases.instructions && instruction.push(...phrases.instructions);
});

instruction.push([
  "#verb# #object#",
  "#pilgrimage#",
  "#meditation#",
  "#quest#"
]);

module.exports = {
  question,
  statement,
  instruction
};
