const followerActions = require("./stories/followerActions");
const story = require("./stories/story");
const deityActions = require("./stories/deityActions");
const replyStory = require("./stories/replyStory");

const actors = require("./actors/");
const adverbs = require("./adverbs/");
const adjectives = require("./adjectives/");
const verbs = require("./verbs/");
const spacetime = require("./spacetime/");

const nouns = require("./nouns/");

const hashtag = require("./hashtag");
const macros = require("./macros");
const writing = require("./writing");

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
  actors,
  story,
  nouns,
  adverbs,
  adjectives,
  verbs,
  spacetime,
  replyStory,
  deityActions,
  followerActions,
  origin,
  hashtag,
  writing
);

module.exports = originComplete;
