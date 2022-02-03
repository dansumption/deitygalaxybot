const {
  initialize,
  monitorReplies,
  monitorSearchTerm
} = require("./twit/twitter");
const {
  sendRandomTweet,
  handleReply,
  handleSearchTerm
} = require("./getContentAndTweet");
const MINUTE = 60 * 1000;
const minTimeBetweenTweets = 50 * MINUTE;
const maxTimeBetweenTweets = 5 * 60 * MINUTE;
const botHandle = "deitygalaxy";

const timeoutDelay = () => {
  return Math.round(
    minTimeBetweenTweets +
      Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets)
  );
};

const setup = async () => {
  initialize(botHandle);
  monitorReplies(handleReply, botHandle);
  monitorSearchTerm("#Rheða", handleSearchTerm, botHandle);
  sendRandomTweet(timeoutDelay);
};

setup();
