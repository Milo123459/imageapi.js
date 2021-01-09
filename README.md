# ImageApi.JS

[![npm](https://img.shields.io/npm/dt/imageapi.js.svg?style=for-the-badge)](https://npmjs.com/package/imageapi.js)

A simple module to grab random images (and more, see [here](#possible-data)) from a subreddit.

**NEW!** Now you can sort between **top** & **new**! Click [here](#sort-types) for more info.

If you come across a bug, please make an issue on the [Github repo](https://github.com/Milo123459/imageapi.js/issues/new)

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
await api.stats(); // returns an object containing stats on imageapi.fionn.live (async)
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

```ts
interface { img: string, res: number, title: string, upvotes: number, author: string, upvoteRatio: number, comments: number, downvotes: number, took: string, tookRaw: number };
```

Use .advanced to get these properties.

# Sort types

In version 1.3.0+, on `.advanced` you can now specify a sort type. This is only on `.advanced`.

There are 2 valid sort types: `top` and `new`! Please keep this in mind

For example,

```js
const api = require("imageapi.js");

(async () => {
  await api.advanced("meme", "new"); // works fine
  await api.advanced("meme", "top"); // works fine
  await api.advanced("meme", "newtop"); // errors! returns a rejected promise
})();
```
