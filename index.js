const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');

const bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
 });
const phraseArray = ["A new deity is born.",
  "A long time ago, in a Deity Galaxy closer than you think...",
  "Deploy deities!"];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
const phrase = chooseRandom(phraseArray);
bot.tweet(phrase);