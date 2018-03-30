const {
  initialize,
  monitorReplies,
  monitorSearchTerm
} = require("./twit/twitter");
const { sendRandomTweet, handleReply, handleSearchTerm } = require("./tweet");
const MINUTE = 60 * 1000;
const minTimeBetweenTweets = 20 * MINUTE;
const maxTimeBetweenTweets = 4 * 60 * MINUTE;

const timeoutDelay = () => {
  return Math.round(
    minTimeBetweenTweets +
      Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets)
  );
};

const setup = () => {
  initialize("deitygalaxy");
  monitorReplies(handleReply);
  monitorSearchTerm("#Rheða", handleSearchTerm);
  sendRandomTweet(timeoutDelay);
};

setup();
