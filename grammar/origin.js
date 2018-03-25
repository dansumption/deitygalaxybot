const deity = require("./deity");
const nature = require("./nature");
const people = require("./people");
const objects = require("./objects");
const nouns = require("./nouns");
const adverbs = require("./adverbs");
const adjectives = require("./adjectives");
const verbs = require("./verbs");
const deityActions = require("./deityActions");
const places = require("./places");
const followerActions = require("./followerActions");
const story = require("./story");

const origin = {
  origin: ["#setDeity##story#"],
  replyOrigin: ["#userHandle# You seek guidance from the heavens? #origin#"],
  replyWithDeity: [
    "#userHandle# #deityName# will reward you for your loyalty."
  ],
  replyWithLostDeity: [
    "#userHandle# you call your deity, but another has taken their place. #origin#"
  ],
  searchOrigin: [
    "Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies."
  ]
};

const originComplete = Object.assign(
  {},
  deity,
  story,
  deityActions,
  followerActions,
  people,
  nature,
  nouns,
  objects,
  places,
  adverbs,
  adjectives,
  verbs,
  origin
);
module.exports = originComplete;
