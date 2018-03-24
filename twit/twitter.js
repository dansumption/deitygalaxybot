const Twit = require('twit');
let bot;

const initialize = (botHandle) => {

  const env = process.env.BOT_CONSUMER_KEY ?
    process.env : require('./config');
  bot = new Twit({
    consumer_key: env.BOT_CONSUMER_KEY,
    consumer_secret: env.BOT_CONSUMER_SECRET,
    access_token: env.BOT_ACCESS_TOKEN,
    access_token_secret: env.BOT_ACCESS_TOKEN_SECRET
  });
  bot.handle = botHandle;
}

const logMessage = console.log

const sendTweet = phrase =>
  bot && bot.post('statuses/update', { status: phrase }, function (err, data, response) {
    // console.log("SEND TWEET >>>\n","Data:" , data, "\n\nError: ", err, "\n\nResponse: ", response, "\n<<<SEND TWEET");
  });

const monitorReplies = callback => {
  return monitorSearchTerm(`@${bot.handle}`, callback);
}

const monitorSearchTerm = (term, callback) => {
  if (bot) {
    const stream = bot.stream('statuses/filter', { track: term });
    stream.on('tweet', callback);
    stream.on('error', logMessage);
    stream.on('limit', logMessage)
    stream.on('disconnect', logMessage);
    stream.on('reconnect', (request, response, connectInterval) =>
      logMessage('Reconnecting in ' + connectInterval + 'ms...'));
    return stream;
  }
}


module.exports = { initialize, sendTweet, monitorReplies, monitorSearchTerm };