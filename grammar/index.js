const followerActions = require("./stories/followerActions");
const story = require("./stories/story");
const deityActions = require("./stories/deityActions");
const replyStory = require("./stories/replyStory");

const actors = require("./actors/");
const adverbs = require("./adverbs/");
const adjectives = require("./adjectives/");
const nouns = require("./nouns/");
const actions = require("./actions/");
const spacetime = require("./spacetime/");

const hashtag = require("./hashtag");
const writing = require("./writing");

const origin = require("./origin");

const originComplete = Object.assign(
  {},
  actors,
  adjectives,
  adverbs,
  nouns,
  actions,
  spacetime,
  story,
  replyStory,
  deityActions,
  followerActions,
  hashtag,
  writing,
  origin
);

module.exports = originComplete;
