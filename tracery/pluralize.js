const pluralize = require("pluralize");

pluralize.addPluralRule(/^game of/i, "games of");
pluralize.addPluralRule(/^bird of/i, "birds of");
pluralize.addPluralRule(/ssus$/i, "ssi");
pluralize.addPluralRule(/goose$/i, "geese");
pluralize.addUncountableRule("thyme");
pluralize.addUncountableRule("clover");

module.exports = pluralize;
