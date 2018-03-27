const Twit = require("twit");
const { promisify } = require("util");

let bot;
let __post;

const initialize = botHandle => {
  const env = process.env.BOT_CONSUMER_KEY ? process.env : require("./config");
  bot = new Twit({
    consumer_key: env.BOT_CONSUMER_KEY,
    consumer_secret: env.BOT_CONSUMER_SECRET,
    access_token: env.BOT_ACCESS_TOKEN,
    access_token_secret: env.BOT_ACCESS_TOKEN_SECRET
  });
  bot.handle = env.botHandle || botHandle;
  __post = promisify(bot.post).bind(bot);
};

const logMessage = console.log;

const sendTweet = parameters =>
  __post("statuses/update", parameters)
    .then(data => {
      console.log(
        `SENT: ${data.id_str}\n\t${parameters.in_reply_to_status_id}\n\t${
          parameters.status
        }`
      );
      return data;
    })
    .catch(err => {
      console.error(`ERROR SENDING: ${parameters.status}\n\t${err}`);
    });

const monitorReplies = callback => {
  return monitorSearchTerm(`@${bot.handle}`, callback);
};

const monitorSearchTerm = (term, callback) => {
  if (bot) {
    const stream = bot.stream("statuses/filter", { track: term });
    stream.on("tweet", callback);
    stream.on("error", logMessage);
    stream.on("limit", logMessage);
    stream.on("disconnect", logMessage);
    stream.on("reconnect", (request, response, connectInterval) =>
      logMessage("Reconnecting in " + connectInterval + "ms...")
    );
    return stream;
  }
};

module.exports = { initialize, sendTweet, monitorReplies, monitorSearchTerm };
