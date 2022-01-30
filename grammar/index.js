const actions = require("./actions/");
const actors = require("./actors/");
const adjectives = require("./adjectives/");
const adverbs = require("./adverbs/");
const hashtag = require("./hashtag");
const misc = require("./stories/misc");
const nouns = require("./nouns/");
const phrases = require("./phrases/");
const places = require("./places/");
const reason = require("./stories/reason");
const story = require("./stories/");
const times = require("./times/");
const writing = require("./writing");
const origin = require("./origin");

const originComplete = Object.assign(
  {},
  origin,

  actions,
  actors,
  adjectives,
  adverbs,
  hashtag,
  misc,
  nouns,
  phrases,
  places,
  reason,
  story,
  times,
  writing
);

module.exports = originComplete;
