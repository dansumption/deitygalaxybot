const { initialize, sendTweet, monitorReplies, monitorSearchTerm } = require('./twit/twitter');
const redis = require('redis');
const grammar = require('./grammar');

const timeoutDelay = () => {
  const MINUTE = 60 * 1000;
  const minTimeBetweenTweets = 5 * MINUTE;
  const maxTimeBetweenTweets = 4 * 60 * MINUTE;
  return Math.round(minTimeBetweenTweets + Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets));
}

const handleReply = tweet => {
  const userHandle = tweet.user.screen_name;
  const phrase = grammar.flatten(`#[userHandle:@${userHandle}]replyOrigin#`);
  console.log(`Replying to ${userHandle} with ${phrase}`);
  sendTweet(phrase);
}

const sendRandomTweet = () => {
  const phrase = grammar.flatten('#origin#');
  sendTweet(phrase);
  sendTweetAfterDelay();
}

const handleSearchTerm = tweet => {
  const userHandle = tweet.user.screen_name;
  const phrase = grammar.flatten(`#[userHandle:@${userHandle}]searchOrigin#`);
  console.log(`Replying to ${userHandle}'s search term with ${phrase}`);
  sendTweet(phrase);
}

const setup = () => {
  initialize('deitygalaxy');
  monitorReplies(handleReply);
  monitorSearchTerm('#Rheða', handleSearchTerm)
  sendTweetAfterDelay();
}

setup();


function sendTweetAfterDelay() {
  setTimeout(sendRandomTweet, timeoutDelay());
}

