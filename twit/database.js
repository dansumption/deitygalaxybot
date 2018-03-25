const redis = require("redis");
const url = require("url");

const EXPIRY_TIME = 60 * 60 * 24 * 2; // expire after 2 days

const redisURL = url.parse(
  process.env.REDISCLOUD_URL || "redis://127.0.0.1:6379"
);
const client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true
});
if (process.env.REDISCLOUD_URL) {
  client.auth(redisURL.auth.split(":")[1]);
}

const set = (key, value) => {
  client.set(key, value, "EX", EXPIRY_TIME);
};

const get = (key, callback) => {
  client.get(key, callback);
};

module.exports = { set, get };
