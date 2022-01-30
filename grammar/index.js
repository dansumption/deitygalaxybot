const story = require("./stories/");

const actors = require("./actors/");
const adverbs = require("./adverbs/");
const adjectives = require("./adjectives/");
const nouns = require("./nouns/");
const actions = require("./actions/");
const times = require("./times/");
const places = require("./places/");

const hashtag = require("./hashtag");
const writing = require("./writing");
const misc = require("./stories/misc");
const reason = require("./stories/reason");
const phrases = require("./phrases/");

const origin = require("./origin");

const originComplete = Object.assign(
  {},
  actors,
  adjectives,
  adverbs,
  nouns,
  actions,
  misc,
  phrases,
  times,
  story,
  hashtag,
  writing,
  reason,
  origin
);

module.exports = originComplete;
