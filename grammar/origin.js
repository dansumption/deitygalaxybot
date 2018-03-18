const deity = require('./deity');
const animals = require('./animals');
const nouns = require('./nouns');
const adverbs = require('./adverbs');
const adjectives = require('./adjectives');
const verbs = require('./verbs');
const deityActions = require('./deityActions');
const places = require('./places');
const followerActions = require('./followerActions');

const origin = {
  "origin": ["#setDeity##story#"],
  "story": [
    "#deityName# the #deityType# of #deityDomain##commandAdverb##deityAction#.",
  ],
  "pauseLength": ["awkward pause", "flap of a hummingbird's wing", "lengthy pause", "painful wait", "short pause", "silence lasting a thousand years", "uncomfortable silence", "brief millennium", "painful aeon"]
};


const originComplete = Object.assign({}, deity, deityActions, followerActions, animals, nouns, places, adverbs, adjectives, verbs, origin);
module.exports = originComplete;