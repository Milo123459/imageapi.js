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
    `https://image-api-2.glitch.me/reddit/${sub}`
  ).then((res) => res.json());
  if(verb) console.log(`[IMAGEAPI.JS]: TOOK ${Date.now()-start}MS TO RECIEVE YOUR IMAGE.`)
  if (a.error)
    throw new TypeError("Error, probably due to an invalid subreddit!");
  return a.img;
};
