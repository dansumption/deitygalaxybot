const pluralize = require("pluralize");

pluralize.addPluralRule(/^game of/i, "games of");

module.exports = pluralize;
