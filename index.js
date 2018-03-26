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
const hashtagReplace = /['-]/g;

const timeoutDelay = () => {
  return Math.round(
    minTimeBetweenTweets +
      Math.random() * (maxTimeBetweenTweets - minTimeBetweenTweets)
  );
};

const handleReply = tweet => {
  const userHandle = tweet.user.screen_name;
  const originalTweetId = tweet.in_reply_to_status_id_str;
  const replyTweetId = tweet.id_str;
  if (originalTweetId) {
    // check if we have a deity associated with the original tweet
    database.get(originalTweetId).then(data => {
      if (data) {
        // we have a deity!
        sendTweetAndLogDeity(
          `#[userHandle:@${userHandle}][deityName:${data}]replyWithDeity#`,
          replyTweetId
        );
      } else {
        // we don't have a deity stored for the original tweet
        sendTweetAndLogDeity(
          `#[userHandle:@${userHandle}]replyWithLostDeity#`,
          replyTweetId
        );
      }
    });
  } else {
    // this is a mention, not a reply, so there's no deity
    sendTweetAndLogDeity(
      `#[userHandle:@${userHandle}]replyOrigin#`,
      replyTweetId
    );
  }
};

const sendTweetAndLogDeity = (template, in_reply_to_status_id) => {
  const root = grammar.createRoot(template);
  root.expand();
  const deityName = root.grammar.flatten("#deityName#");
  const auto_populate_reply_metadata = !!in_reply_to_status_id;
  const status = `${root.finishedText} #${deityName.replace(
    hashtagReplace,
    ""
  )}`;
  console.log(
    `CREATE FROM: '${template}\n\tTWEET: ${status}\n\tDEITY: ${deityName}`
  );
  sendTweet({
    status,
    in_reply_to_status_id,
    auto_populate_reply_metadata
  }).then(data => {
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
  const status = grammar.flatten(`#[userHandle:@${userHandle}]searchOrigin#`);
  const in_reply_to_status_id = tweet.id_str;
  const auto_populate_reply_metadata = true;
  sendTweet({ status, in_reply_to_status_id, auto_populate_reply_metadata });
};

const setup = () => {
  initialize("deitygalaxy");
  monitorReplies(handleReply);
  monitorSearchTerm("#Rheða", handleSearchTerm);
  sendRandomTweet();
};

setup();
