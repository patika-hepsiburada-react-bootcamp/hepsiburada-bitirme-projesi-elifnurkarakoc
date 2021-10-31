const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});
client.on('connect', () => console.log('Connected to Redis 🔫'));
client.on('ready', () => console.log('Connected to Redis and ready to use... ♥️'));
client.on('error', (err) => console.log(err.message));
client.on('end', () => console.log('Client disconnected from Redis'));
module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};
