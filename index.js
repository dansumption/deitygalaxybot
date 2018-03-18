const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');

const Bot = new TwitterBot(config);
const phraseArray = ["A new deity is born.",
  "A long time ago, in a Deity Galaxy closer than you think...",
  "Deploy deities!"];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
const phrase = chooseRandom(phraseArray) + " " + chooseRandom(phraseArray);
Bot.tweet(phrase);