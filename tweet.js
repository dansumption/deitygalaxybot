const { sendTweet } = require("./twit/twitter");
const database = require("./twit/database");
const grammar = require("./grammar");

const hashtagSanitize = /['\- ]/g;
const hashtagDeEscape = /\\#/g;

const chanceOfAReply = 0.98;
const microDelay = () => {
  return Math.round(1000 + Math.random() * 30000);
};

const handleReply = tweet => {
  const userHandle = tweet.user.screen_name;
  const originalTweetId = tweet.in_reply_to_status_id_str;
  const replyTweetId = tweet.id_str;
  if (originalTweetId && Math.random() < chanceOfAReply) {
    // check if we have a deity associated with the original tweet
    database.get(originalTweetId).then(data => {
      if (data) {
        const [
          deityName,
          deityType,
          deityDomain,
          spiritAnimal,
          deityThey,
          deityThem,
          deityTheir,
          deityTheirs,
          previousTemplate,
          replyCount,
          deityPlace,
          spiritBird
        ] = data.split(":");
        // we have a deity!
        console.log(`This is the ${replyCount} tweet in a thread
          The last template was: ${previousTemplate}`);
        sendTweetAndLogDeity(
          `[userHandle:@${userHandle}][deityName:${deityName}][deityType:${deityType}][deityDomain:${deityDomain}][spiritAnimal:${spiritAnimal}][deityThey:${deityThey}][deityThem:${deityThem}][deityTheir:${deityTheir}][deityTheirs:${deityTheirs}][deityPlace:${deityPlace}][spiritBird:${spiritBird}]#replyWithDeity#`,
          replyTweetId,
          replyCount
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

// HORRIBLE horrible horrible hack to find symbols used in the tweet - because flattening gets an earlier version !?!
const getSymbolLastUsed = symbol => {
  try {
    return grammar.symbols[symbol].uses.slice(-1)[0].node.childRule;
  } catch (error) {
    return grammar.symbols[symbol].rawRules[0];
  }
};

const addHashTagIfTheresRoom = (tweet, hashtag) => {
  const sanitizedHashtag = hashtag.replace(hashtagSanitize, "");
  if (tweet.length < 278 - sanitizedHashtag.length)
    return tweet + ` #${sanitizedHashtag}`;
  return tweet;
};

const makeMultiWordHashtag = phrase =>
  phrase
    .replace(/ and .*$/, "")
    .replace(/[ -](\w)/g, match => match.toUpperCase())
    .replace(/&/g, "and");

const addHashTags = (tweet, deityName, deityType, deityDomain) => {
  let amendedTweet = tweet;
  amendedTweet = addHashTagIfTheresRoom(amendedTweet, deityName);
  amendedTweet = addHashTagIfTheresRoom(
    amendedTweet,
    makeMultiWordHashtag(deityDomain)
  );
  // amendedTweet = addHashTagIfTheresRoom(
  //   amendedTweet,
  //   makeMultiWordHashtag(deityType)
  // );
  if (new Date().getDay() === 4 && Math.random() < 0.02)
    amendedTweet = addHashTagIfTheresRoom(amendedTweet, "folkloreThursday");
  // const randomHashtag = grammar.flatten("#hashtag#");
  // amendedTweet = addHashTagIfTheresRoom(amendedTweet, randomHashtag);
  return amendedTweet;
};

const sendTweetAndLogDeity = (template, in_reply_to_status_id, replyCount) => {
  const tweetCount = 1 + (Number(replyCount) || 0);
  const root = grammar.createRoot(template);
  root.expand();
  // HORRIBLE hack to find symbols used in the tweet - because flattening gets an earlier version !?!
  const deityName = getSymbolLastUsed("deityName");
  const deityType = getSymbolLastUsed("deityType");
  const deityDomain = getSymbolLastUsed("deityDomain");
  const spiritAnimal = getSymbolLastUsed("spiritAnimal");
  const spiritBird = getSymbolLastUsed("spiritBird");
  const deityPlace = getSymbolLastUsed("deityPlace");
  const deityThey = getSymbolLastUsed("deityThey");
  const deityThem = getSymbolLastUsed("deityThem");
  const deityTheir = getSymbolLastUsed("deityTheir");
  const deityTheirs = getSymbolLastUsed("deityTheirs");
  const auto_populate_reply_metadata = !!in_reply_to_status_id;
  // This is needed because of a bug where the escape character isn't being correctly stripped
  const tweetContent = root.finishedText.replace(hashtagDeEscape, "#");
  console.log(tweetContent, deityName, deityType, deityDomain);
  const status = addHashTags(tweetContent, deityName, deityType, deityDomain);
  console.log(
    `CREATE FROM: '${template}\n\tTWEET: ${status}\n\tDEITY: ${deityName}`
  );
  setTimeout(() => {
    sendTweet({
      status,
      in_reply_to_status_id,
      auto_populate_reply_metadata
    }).then(data => {
      database.set(
        data.id_str,
        `${deityName}:${deityType}:${deityDomain}:${spiritAnimal}:${deityThey}:${deityThem}:${deityTheir}:${deityTheirs}:${template.replace(
          /:/g,
          "~"
        )}:${tweetCount}:${deityPlace}:${spiritBird}`
      );
    });
  }, microDelay());
};

const sendTweetAfterDelay = delayFunction => {
  setTimeout(sendRandomTweet, delayFunction(), delayFunction);
};

const sendRandomTweet = delayFunction => {
  sendTweetAndLogDeity("#origin#");
  sendTweetAfterDelay(delayFunction);
};

const handleSearchTerm = tweet => {
  const userHandle = tweet.user.screen_name;
  const status = grammar.flatten(`#[userHandle:@${userHandle}]searchOrigin#`);
  const in_reply_to_status_id = tweet.id_str;
  const auto_populate_reply_metadata = true;
  sendTweet({ status, in_reply_to_status_id, auto_populate_reply_metadata });
};

module.exports = { sendRandomTweet, handleReply, handleSearchTerm };
