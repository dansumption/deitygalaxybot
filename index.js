const {
  initialize,
  monitorReplies,
  monitorSearchTerm
} = require("./twit/twitter");
const { sendRandomTweet, handleReply, handleSearchTerm } = require("./tweet");
const MINUTE = 60 * 1000;
const minTimeBetweenTweets = 90 * MINUTE;
const maxTimeBetweenTweets = 8 * 60 * MINUTE;
const botHandle = "deitygalaxy";

const timeoutDelay = () => {
  return Math.round(
    minTimeBetweenTweets +
      Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets)
  );
};

const setup = () => {
  initialize(botHandle);
  monitorReplies(handleReply, botHandle);
  monitorSearchTerm("#Rheða", handleSearchTerm, botHandle);
  sendRandomTweet(timeoutDelay);
};

setup();
