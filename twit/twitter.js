const Twit = require("twit");
const { promisify } = require("util");

let bot;
let __post;
let __get;

const initialize = botHandle => {
  const env = process.env.BOT_CONSUMER_KEY ? process.env : require("./config");
  bot = new Twit({
    consumer_key: env.BOT_CONSUMER_KEY,
    consumer_secret: env.BOT_CONSUMER_SECRET,
    access_token: env.BOT_ACCESS_TOKEN,
    access_token_secret: env.BOT_ACCESS_TOKEN_SECRET
  });
  bot.handle = botHandle;
  __post = promisify(bot.post).bind(bot);
  __get = promisify(bot.get).bind(bot);
};

const logMessage = console.log;

const sendTweet = parameters =>
  __post("statuses/update", parameters)
    .then(data => {
      console.log(
        `SENT: ${data.id_str}\n\tIn reply to: ${
          parameters.in_reply_to_status_id
        }\n\t${parameters.status}`
      );
      return data;
    })
    .catch(err => {
      console.error(`ERROR SENDING: ${parameters.status}\n\t${err}`);
    });

const monitorReplies = (callback, ...excludeHandles) => {
  return monitorSearchTerm(`@${bot.handle}`, callback, ...excludeHandles);
};

const monitorSearchTerm = (term, callback, ...excludeHandles) => {
  if (bot) {
    const stream = bot.stream("statuses/filter", { track: term });
    stream.on("tweet", tweet => {
      console.log(
        `Search got tweet from ${tweet.user.screen_name}: ${tweet.text}`
      );
      if (!excludeHandles.includes(tweet.user.screen_name)) {
        console.log("Reply to it...");
        callback(tweet);
      }
    });
    stream.on("error", logMessage);
    stream.on("limit", logMessage);
    stream.on("disconnect", logMessage);
    stream.on("reconnect", (request, response, connectInterval) =>
      logMessage("Reconnecting in " + connectInterval + "ms...")
    );
    return stream;
  }
};

const searchTweets = q => {
  __get("search/tweets", { q })
    .then(data => {
      const texts = data.statuses.map(status => status.text);
      console.dir(texts);
      return data;
    })
    .catch(err => {
      console.error(`ERROR SEARCHNG FOR: ${q}\n\t${err}`);
    });
};

module.exports = {
  initialize,
  sendTweet,
  searchTweets,
  monitorReplies,
  monitorSearchTerm
};
