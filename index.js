const { initialize, sendTweet, monitorReplies, monitorSearchTerm } = require('./twit/twitter');
const redis = require('redis');
const grammar = require('./grammar');

const timeoutDelay = () => {
  const MINUTE = 60 * 1000;
  const minTimeBetweenTweets = 5 * MINUTE;
  const maxTimeBetweenTweets = 5 * 60 * MINUTE;
  return Math.round(minTimeBetweenTweets + Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets));
}

const handleReply = tweet => {
  const userHandle = tweet.user.screen_name;
  const phrase = grammar.flatten('#replyOrigin#');
  console.log(`Replying to ${userHandle} with ${phrase}`);
  sendTweet(`@${userHandle} ${phrase}`);
}

const sendRandomTweet = () => {
  const phrase = grammar.flatten('#origin#');
  sendTweet(phrase);
  setTimeout(sendRandomTweet, timeoutDelay())
}

const handleSearchTerm = tweet => {
  const userHandle = tweet.user.screen_name;
  const phrase = grammar.flatten('#searchOrigin#');
  console.log(`Replying to ${userHandle}'s search term with ${phrase}`);
  sendTweet(`@${userHandle} ${phrase}`);
}

const setup = () => {
  initialize('deitygalaxy');
  monitorReplies(handleReply);
  monitorSearchTerm('#Rheða', handleSearchTerm)
  sendRandomTweet();
}

setup();


