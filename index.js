const fetch = require("node-fetch");
/**
 *
 * @param {String} sub The subreddit
 * @example
 * await api("meme");
 * @Milo123459
 */
module.exports = async function (sub) {
  if (!sub) throw new TypeError("Error, you did not specify a subreddit!");
  const response = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  if (response.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return response.img;
};
/**
 *
 * @param {String} sub The subreddit
 * @example
 * await api.advanced("meme");
 * @Milo123459
 */
module.exports.advanced = async function (sub, verb) {
  if (!sub) throw new TypeError("Error, you did not specify a subreddit!");
  const start = Date.now();
  const response = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  const responseTime = Date.now() - start;
  if (response.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return {
    img: response.img,
    res: responseTime,
    title: response.title,
    upvotes: response.upvotes,
    author: response.author,
    upvoteRatio: response.upvoteRatio,
    comments: response.comments,
    downvotes: response.downvotes
  };
};
/**
 * Get stats via the /stats endpoint
 */
module.exports.stats = async () => {
  return await fetch("https://imageapi.fionn.cc/stats").then((res) =>
    res.json()
  );
};
;(async() => {
  console.log(await module.exports.advanced('meme'))
})();