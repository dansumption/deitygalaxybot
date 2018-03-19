const followerAction = [
  "#verb# #object#"
];
const verb = [
  "#followerAction# and #verb#", "abase yourself before", "become #role# of",
  "bow to", "destroy", "devote your life to", "exalt", "heap #nounToPluralise.s# upon",
  "humiliate yourself for", "ignore", "imagine you are", "immanentise",
  "immanentize", "kiss the #role# of", "live the rest of your life as the #role# of",
  "make a pilgramage to the #role# of", "make your way directly to",
  "obey the #role# of", "prostrate yourself before", "realise", "respect",
  "return to", "sacrifice your #anyNoun# to", "soil yourself with",
  "spread the good news about", "verbalise", "warn the world about", "worship"
];
const role = [
  "antichrist", "barber-surgeon", "comforter", "first", "haranguer",
  "midwife", "paragon", "pilgrim", "true believer", "vicar", "witness"
];
const object = [
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "#specifier# #nounToPluralise.s#",
  "yourself and #specifier# #nounToPluralise.s#"
];
const specifier = [
  "#specifier# #nounToPluralise#'s",
  "some", "the", "the", "your",
  "your #adjective#",
  "your #adjective#",
  "your #relation#'s",
  "#adjective.a#",
  "the #adjective#",
];
const relation = [
  "beloved", "boss", "colleague", "conscience",
  "elderly aunt", "enemy", "familiar", "father", "instinct",
  "mother", "neighbour", "pet", "sacred place", "secret crush",
  "shrine", "spouse", "tortoise", "totem"
];


module.exports = { followerAction, verb, role, object, specifier, relation };
