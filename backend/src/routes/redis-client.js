const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};
