const pluralize = require("pluralize");

pluralize.addPluralRule(/^game of/i, "games of");
pluralize.addPluralRule(/ssus$/i, "ssi");

module.exports = pluralize;
