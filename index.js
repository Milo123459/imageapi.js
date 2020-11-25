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
  let a = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  let x = Date.now() - start;
  if (verb)
    console.log(
      `[IMAGEAPI.JS]: TOOK ${x}MS TO RECIEVE YOUR IMAGE. SUBREDDIT: ${sub.toLowerCase()} IMAGE: ${
        a.img
      } REQUEST: ${a.packet}`
    );
  if (a.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return a.img;
};
/**
 * @returns {String[]}
 */
module.exports.fetched = [];
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
  let a = await fetch(
    `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
  ).then((res) => res.json());
  let x = Date.now() - start;
  if (verb)
    console.log(
      `[IMAGEAPI.JS]: TOOK ${x}MS TO RECIEVE YOUR IMAGE. SUBREDDIT: ${sub.toLowerCase()} IMAGE: ${
        a.img
      }`
    );
  if (a.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");

  return {
    img: a.img,
    res: x,
    title: a.title,
    upvotes: a.upvotes,
    author: a.author,
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
