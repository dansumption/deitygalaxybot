const {
  initialize,
  sendTweet,
  monitorReplies,
  monitorSearchTerm
} = require("./twit/twitter");
const database = require("./twit/database");
const grammar = require("./grammar");

const MINUTE = 60 * 1000;
const minTimeBetweenTweets = 2 * MINUTE;
const maxTimeBetweenTweets = 70 * MINUTE;

const timeoutDelay = () => {
  return Math.round(
    minTimeBetweenTweets +
      Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets)
  );
};

const handleReply = tweet => {
  const userHandle = tweet.user.screen_name;
  const originalTweetId = tweet.in_reply_to_status_id_str;
  if (originalTweetId) {
    database.get(originalTweetId, (err, data) => {
      if (data) {
        sendTweetAndLogDeity(
          `#[userHandle:@${userHandle}][deityName:${data}]replyWithDeity#`,
          tweet.id_str
        );
      } else {
        sendTweetAndLogDeity(
          `#[userHandle:@${userHandle}]replyWithLostDeity#`,
          tweet.id_str
        );
      }
    });
  } else {
    sendTweetAndLogDeity(
      `#[userHandle:@${userHandle}]replyOrigin#`,
      tweet.id_str
    );
  }
};

const sendTweetAndLogDeity = (template, in_reply_to_status_id) => {
  const root = grammar.createRoot(template);
  root.expand();
  const deityName = root.grammar.flatten("#deityName#");
  const status = root.finishedText;
  sendTweet({ status, in_reply_to_status_id }, (err, data) => {
    database.set(data.id_str, deityName);
  });
};

const sendTweetAfterDelay = () => {
  setTimeout(sendRandomTweet, timeoutDelay());
};

const sendRandomTweet = () => {
  sendTweetAndLogDeity("#origin#");
  sendTweetAfterDelay();
};

const handleSearchTerm = tweet => {
  const userHandle = tweet.user.screen_name;
  const phrase = grammar.flatten(`#[userHandle:@${userHandle}]searchOrigin#`);
  console.log(`Replying to ${userHandle}'s search term with ${phrase}`);
  sendTweet(phrase, tweet.id_str);
};

const setup = () => {
  initialize("deitygalaxy");
  monitorReplies(handleReply);
  monitorSearchTerm("#Rheða", handleSearchTerm);
  sendRandomTweet();
};

setup();
