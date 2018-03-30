const name = require("./name");
const deity = require("./deity");
const people = require("./people");
const nouns = require("./nouns/nouns");
const adverbs = require("./adverbs");
const adjectives = require("./adjectives");
const verbs = require("./verbs");
const deityActions = require("./deityActions");
const places = require("./places");
const followerActions = require("./followerActions");
const story = require("./story");
const replyStory = require("./replyStory");

const origin = {
  origin: ["#setDeity##story# \\#folklore"],
  replyOrigin: ["#userHandle# #initialReply#"],
  replyWithDeity: ["#userHandle# #replyStory#"],
  replyWithLostDeity: [
    "#userHandle# You call your deity, but another has taken their place. #origin#"
  ],
  searchOrigin: [
    "Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies."
  ]
};

const originComplete = Object.assign(
  {},
  name,
  deity,
  story,
  replyStory,
  deityActions,
  followerActions,
  people,
  nouns,
  places,
  adverbs,
  adjectives,
  verbs,
  origin
);
module.exports = originComplete;
