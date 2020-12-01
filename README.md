# ImageApi.JS

[![npm](https://img.shields.io/npm/dt/imageapi.js.svg?style=for-the-badge)](https://npmjs.com/package/imageapi.js)

A simple module to grab random images (and more, see [here](#possible-data)) from a subreddit.

# NOTE!

In version 1.1.7+ verbose logging has been removed.

In version 1.1.6+ .fetched was removed (Performance reasons)

## Examples:

```js
const api = require("imageapi.js");
(async () => {
  const fetched = await api("subreddit");
  console.log(fetched); // logs the image;
  const advanced = await api.advanced("subreddit");
  console.log(advanced); // { img: string, res: number, title: string, upvotes: number, author: string, upvoteRatio: number, comments: number, downvotes: number };
})();
```

I also added

```js
await api.stats(); // returns an object containing stats on imageapi.fionn.cc (async)
```

I hope this helps you!

**TYPESCRIPT!**

In version 1.1.0+, ImageAPI has now got built in typings, this is how you'd use the default function:

```ts
import ImageAPI from "imageapi.js";
(async () => {
  await ImageAPI("meme");
  //etc
})();
```

How you use .advanced, .stats etc

```ts
import * as ImageAPI from "imageapi.js";
await ImageAPI.advanced();
```

# Possible Data

The API currently sends out this data, with added "res" which displays how long it took to get the image.

```js
{ img: string, res: number, title: string, upvotes: number, author: string, upvoteRatio: number, comments: number, downvotes: number };
```

Use .advanced to get these properties.
