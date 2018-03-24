let bot;

const initialize = (botHandle) => {
  bot = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
  });
  bot.handle = botHandle;
}

const logMessage = console.log

const tweet = phrase =>
  bot && bot.post('statuses/update', { status: phrase }, function (err, data, response) {
    console.log(data)
  });

const monitorReplies = callback => {
  if (bot) {
    const stream = bot.stream('statuses/filter', { track: `to:${bot.handle}` });
    stream.on('tweet', callback);
    stream.on('error', logMessage);
    stream.on('limit', logMessage)
    stream.on('disconnect', logMessage);
    stream.on('reconnect', (request, response, connectInterval) =>
      logMessage('Reconnecting in ' + connectInterval + 'ms...'));
    return stream;
  }
}


module.exports = { initialize, tweet, monitorReplies };