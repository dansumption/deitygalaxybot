const deity = require('./deity');
const animals = require('./animals');
const nouns = require('./nouns');
const adverbs = require('./adverbs');
const adjectives = require('./adjectives');
const verbs = require('./verbs');
const deityActions = require('./deityActions');
const places = require('./places');
const followerActions = require('./followerActions');
const story = require('./story');

const origin = {
  "origin": ["#setDeity##story#"],
  "replyOrigin": ["#userHandle# After a short pause, #origin#"],
  "searchOrigin": ["Deep beneath the Earth, the goddess Rheða sighs, and the ground around #placeName# quivers, giving #userHandle# belly-butterflies."],
};


const originComplete = Object.assign({}, deity, story, deityActions, followerActions, animals, nouns, places, adverbs, adjectives, verbs, origin);
module.exports = originComplete;