const fetch = require("node-fetch");
/**
 *
 * @param {String} sub The subreddit
 * @param {Boolean} [verb] Verbose logging
 * @example
 * await api("meme", true); //Verbose logging
 * @Milo123459
 */
module.exports = async function (sub, verb) {
  if (!sub) throw new TypeError("Error, you did not specify a subreddit!");
  const start = Date.now();
  const response = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  const x = Date.now() - start;
  if (verb)
    console.log(
      `[IMAGEAPI.JS]: TOOK ${x}MS TO RECIEVE YOUR IMAGE. SUBREDDIT: ${sub.toLowerCase()} IMAGE: ${
        response.img
      } REQUEST: ${response.packet}`
    );
  if (response.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return response.img;
};
/**
 *
 * @param {String} sub The subreddit
 * @param {Boolean} [verb] Verbose logging
 * @example
 * await api.advanced("meme", true); //Verbose logging
 * @Milo123459
 */
module.exports.advanced = async function (sub, verb) {
  if (!sub) throw new TypeError("Error, you did not specify a subreddit!");
  const start = Date.now();
  const response = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  const x = Date.now() - start;
  if (verb)
    console.log(
      `[IMAGEAPI.JS]: TOOK ${x}MS TO RECIEVE YOUR IMAGE. SUBREDDIT: ${sub.toLowerCase()} IMAGE: ${
        response.img
      }`
    );
  if (response.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return {
    img: response.img,
    res: x,
    title: response.title,
    upvotes: response.upvotes,
    author: response.author,
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
