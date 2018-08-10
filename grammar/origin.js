const name = require("./actors/name");
const deity = require("./actors/deity");
const people = require("./actors/people");
const nouns = require("./nouns/nouns");
const adverbs = require("./adverbs/adverbs");
const adjectives = require("./adjectives/adjectives");
const verbs = require("./verbs/verbs");
const deityActions = require("./stories/deityActions");
const places = require("./spacetime/places");
const followerActions = require("./stories/followerActions");
const story = require("./stories/story");
const replyStory = require("./stories/replyStory");
const hashtag = require("./hashtag");
const time = require("./spacetime/time");
const macros = require("./macros");
const bands = require("./nouns/bands");
const birds = require("./nouns/birds");
const festival = require("./spacetime/festival");
const writing = require("./writing");
const wind = require("./adjectives/wind");

const origin = {
  origin: [`${macros}#setDeity##story#`],
  replyOrigin: [`${macros}#userHandle# #initialReply#`],
  replyWithDeity: [`${macros}#userHandle# #replyStory#`],
  replyWithLostDeity: [
    `${macros}#userHandle# You call your deity, but another has taken their place. #origin#`
  ],
  searchOrigin: [
    `${macros}Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies. It must be #today#.`
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
  origin,
  hashtag,
  time,
  bands,
  birds,
  festival,
  wind,
  writing
);

module.exports = originComplete;
