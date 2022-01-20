const redis = require("redis");
const { promisify } = require("util");

const EXPIRY_TIME = 60 * 60 * 24 * 2; // expire after 2 days

const redisURL = process.env.REDISCLOUD_URL || "redis://127.0.0.1:6379";
const client = redis.createClient({ url: redisURL });
await client.connect();

const set = async (key, value) => {
  try {
    const data = await client.set(key, value, "EX", EXPIRY_TIME);
    console.log(`SET: ${key}\n\t${value}\n\t${data}`);
    return data;
  } catch (err) {
    console.error(`ERROR SETTING: ${key}\t${value}\n\t${err}`);
  }
};

const get = async key => {
  try {
    const data = await client.get(key);
    console.log(`GET: ${key}\n\t${data}`);
    return data;
  } catch (err) {
    console.error(`ERROR GETTING: ${key}\n\t${err}`);
  }
};

module.exports = { set, get };
