const { initialize, tweet, monitorReplies } = require('./twit/twitter');
const redis = require('redis');
const tracery = require('./tracery/tracery');
const modifiers = require('./tracery/mods-eng-basic');
const origin = require('./grammar/origin');

const debug = () => {
  const replaceNonStandardMods = /toUpperCase/;
  console.log(JSON.stringify(origin).replace(replaceNonStandardMods, ''), "\n");
  let longest = '';
  for (let index = 0; index < 5000; index++) {
    const phrase = grammar.flatten('#origin#');
    console.log(phrase, "\n");
    if (phrase.length > longest.length) {
      longest = phrase;
    }
  }
  console.log("LONGEST: ", longest, longest.length);
};

const timeoutTime = () => {
  const MINUTE = 60 * 1000;
  const minTimeBetweenTweets = 5 * MINUTE;
  const maxTimeBetweenTweets = 90 * MINUTE;
  return Math.round(minTimeBetweenTweets + Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets));
}

const grammar = tracery.createGrammar(origin);
grammar.addModifiers(modifiers);

const handleReply = tweet => {
  const phrase = grammar.flatten('#origin#');
  tweet(`@${tweet.user.screen_name} phrase`);
}

const sendRandomTweet = () => {
  const phrase = grammar.flatten('#origin#');
  tweet(phrase);
}

const startTweeting = () => {
  sendRandomTweet();
  setTimeout(sendRandomTweet, timeoutTime())
}

const setup = () => {
  initialize('deitygalaxy');
  monitorReplies(handleReply);
  startTweeting();
}

if (process.env.BOT_CONSUMER_KEY) {
  // Running on the server - so we tweet for real
  setup();
} else {
  // Running locally - so just do some debugging
  debug();
}

