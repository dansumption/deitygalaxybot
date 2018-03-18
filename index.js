const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const tracery = require('./tracery/tracery');
const modifiers = require('./tracery/mods-eng-basic');
const origin = require('./grammar/origin');

const bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
 });

const grammar = tracery.createGrammar(origin);
grammar.addModifiers(modifiers);

const phrase = grammar.flatten('#origin#') + ' #polytheism';

bot.tweet(phrase);