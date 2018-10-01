const sibling = ["brother", "sister", "twin", "sibling"];

const parent = ["father", "mother", "progenitor"];

const offspring = ["son", "daughter", "scion"];

const relative = ["uncle", "aunt", "cousin"].concat(sibling, parent, offspring);

module.exports = { relative, sibling, parent, offspring };
