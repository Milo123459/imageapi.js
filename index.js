const fetch = require("node-fetch");
/**
 *
 * @param {String} sub The subreddit
 * @example
 * await api("meme");
 * @Milo123459
 */
module.exports = async function (sub) {
  if (!sub) return Promise.reject("Error, you did not specify a subreddit!");
  const response = await fetch(
    `https://imageapi.fionn.live/reddit/${sub.toLowerCase()}`,
    {
      headers: {
        "user-agent": `ImageAPI.JS V${require("./package.json").version}`,
      },
    }
  ).then((res) => res.json());
  if (response.error || response.err)
    return Promise.reject(
      Object.entries(response)
        .map(
          (value) =>
            `${value[0]}: ${
              value[1].map ? value[1].map((v) => `${v}`).join(", ") : value[1]
            }`
        )
        .join(" ")
    );

  return response.img;
};
/**
 *
 * @param {String} sub The subreddit
 * @param {String} [sort] How to sort, either top or new
 * @example
 * await api.advanced("meme");
 * @Milo123459
 */
module.exports.advanced = async function (sub, sort) {
  if (!sub) return Promise.reject("Error, you did not specify a subreddit!");
  const start = Date.now();
  const response = await fetch(
    `https://imageapi.fionn.live/reddit/${sub.toLowerCase()}${
      sort ? `?sort=${sort}` : ""
    }`.trim(),
    {
      headers: {
        "user-agent": `ImageAPI.JS V${require("./package.json").version}`,
      },
    }
  ).then((res) => res.json());
  const responseTime = Date.now() - start;
  if (response.error || response.err)
    return Promise.reject(
      Object.entries(response)
        .map(
          (value) =>
            `${value[0]}: ${
              value[1].map ? value[1].map((v) => `${v}`).join(", ") : value[1]
            }`
        )
        .join(" ")
    );

  return {
    img: response.img,
    res: responseTime,
    title: response.title,
    upvotes: response.upvotes,
    author: response.author,
    upvoteRatio: response.upvoteRatio,
    comments: response.comments,
    downvotes: response.downvotes,
    took: response.took,
    tookRaw: response.tookRaw
  };
};
/**
 * Get stats via the /stats endpoint
 */
module.exports.stats = async () => {
  return await fetch("https://imageapi.fionn.live/stats", {
    headers: {
      "user-agent": `ImageAPI.JS V${require("./package.json").version}`,
    },
  }).then((res) => res.json());
};
