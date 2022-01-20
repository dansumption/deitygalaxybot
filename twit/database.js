const redis = require("redis");
const url = require("url");
const { promisify } = require("util");

const EXPIRY_TIME = 60 * 60 * 24 * 2; // expire after 2 days

const redisURL = url.parse(
  process.env.REDISCLOUD_URL || "redis://127.0.0.1:6379"
);
const client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true,
  legacyMode: true
});
if (process.env.REDISCLOUD_URL) {
  client.auth(redisURL.auth.split(":")[1]);
}

// const __set = promisify(client.set).bind(client);
// const __get = promisify(client.get).bind(client);

const set = async (key, value) => {
  try {
    await client.auth(redisURL.auth.split(":")[1]);
    const data = await client.set(key, value, "EX", EXPIRY_TIME);
    console.log(`SET: ${key}\n\t${value}\n\t${data}`);
    return data;
  } catch (err) {
    console.error(`ERROR SETTING: ${key}\t${value}\n\t${err}`);
  }
};

const get = async key => {
  try {
    await client.connect();
    const data = await client.get(key);
    console.log(`GET: ${key}\n\t${data}`);
    return data;
  } catch (err) {
    console.error(`ERROR GETTING: ${key}\n\t${err}`);
  }
};

module.exports = { set, get };
