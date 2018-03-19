const followerAction = [
  "#verb# #object#"
];
const verb = [
  "ignore",  "immanentise", "immanentize",
  "bow to", "destroy", "exalt",
  "relinquish", "respect","return to",
  "explain", "worship", "improve",
  "warn the world about", 
  "#followerAction# and #verb#",
  "abase yourself before",
  "become #role# of",
  "imagine you are",
  "devote your life to",
  "give #nounNotToPluralise# to",
  "heap #nounToPluralise.s# upon",
  "humiliate yourself for",
  "kiss the #role# of",
  "live the rest of your life as the #role# of",
  "make a pilgramage with the #role# of",
  "make your way directly to",
  "obey the #role# of",
  "prostrate yourself before", 
  "sacrifice your #anyNoun# to",
  "soil yourself with",
  "spread the good news about",
];
const role = [
  "antichrist", "barber-surgeon", "comforter",
  "first-born", "haranguer", "midwife",
  "paragon", "pilgrim", "true believer",
  "vicar", "witness", "supreme believer",
  "beloved", "worshipper", "consort",
  "destroyer", "harshest critic", "lover"
];
const object = [
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
  "#nounNotToPluralise#",
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
  "#nounToPluralise.a#'s #adjective#",
  "#nounNotToPluralise#'s #adjective#",
  "some", "the", "the", "your",
  "your #adjective#",
  "your #adjective#",
  "your #relation#'s",
  "the #adjective#",
  "the #adjective#",
  "the #relation#'s"
];
const relation = [
  "beloved", "boss", "colleague", "conscience",
  "elderly aunt", "enemy", "familiar", "father", "instinct",
  "mother", "neighbour", "pet", "sacred place", "secret crush",
  "shrine", "spouse", "tortoise", "totem"
];


module.exports = { followerAction, verb, role, object, specifier, relation };
