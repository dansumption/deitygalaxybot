const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const tracery = require('./tracery/tracery');
const modifiers = require('./tracery/mods-eng-basic');
const origin = require('./grammar/origin');

const bot = process.env.BOT_CONSUMER_KEY && new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
 });


 const tweet = phrase => {
  if (bot) {
    bot.tweet(phrase);
  } else {
    let longest = phrase;
    console.log(phrase, "\n");
    for (let index = 0; index < 10000; index++) {
      const newphrase = grammar.flatten('#origin#');
      console.log(newphrase, "\n");
      if (newphrase.length > longest.length) {
        longest = newphrase;
      }
    }
    console.log("LONGEST: ", longest, longest.length);
  }
}

const grammar = tracery.createGrammar(origin);
grammar.addModifiers(modifiers);

const phrase = grammar.flatten('#origin#');

tweet(phrase);
