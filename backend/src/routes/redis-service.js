const redisClient = require("./redis-client");
const { generateProducts } = require("./generate");

async function cache() {
  var result = await redisClient.getAsync("products");
  result = (result !== "undefined" && JSON.parse(result)) || null;
  // console.log("result", result);
  if (!result) {
    var value = generateProducts();
    setRedisProduct(value);
    // console.log("value", value);
    return value;
  }

  return result;
}

async function setRedisProduct(products) {
  await redisClient.setAsync("products", JSON.stringify(products));
}

module.exports = {
  cache,
  setRedisProduct,
};
