const { deityCommand } = require("./deityActions");

module.exports = {
  instructing: [
    '#deityFull# #asks# you to "#instruction#".',
    "#deityFull# #commandVerb.s# you to #get# #nounToPluralise.a#, #reason#.",
    "#deityFull# #asks# you to treat #deityDomain# with the same respect as you would #singleNoun#."
  ].concat(deityCommand.map(command => `#deityFull##adverbClause#${command}.`))
};
