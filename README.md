# ImageAPI.JS

[![npm](https://img.shields.io/npm/dt/imageapi.js.svg?style=for-the-badge)](https://npmjs.com/package/imageapi.js) [![stars](https://img.shields.io/github/stars/Milo123459/imageapi.js?style=for-the-badge)](https://github.com/Milo123459/imageapi.js) [![contributors](https://img.shields.io/github/contributors/Milo123459/imageapi.js?style=for-the-badge)](https://github.com/Milo123459/imageapi.js)

## What?

**ImageAPI** is a wrapper for [ImageAPI.fionn.live](https://imageapi.fionn.live) - a fast **API** for fetching a random post from a subreddit.

## How?

The main API is just fetching random data from the reddit API allowing for us to send the data we think is valid back to the user making the request.

## Is it fast?

The API is as fast as the Reddit API is. We can't speed it up, but, we have optimized the code on the backend to make it as fast as possible.

## Examples:

<details>
<summary>✌ JS example</summary>

```js
const api = require('imageapi.js');
(async () => {
	const img = await api('subreddit');
	console.log(img); // Logs the image
	const advanced = await api.advanced('subreddit');
	console.log(advanced); // Logs an object. Not all data may be present.
	const stats = await api.stats();
	console.log(stats); // Logs an object.
})();
```

</details>

<details>
<summary>😎 TS example</summary>

```js
import api, { stats, advanced } from 'imageapi';
(async () => {
	const img = await api('subreddit');
	console.log(img); // Logs the image
	const advanced = await api.advanced('subreddit');
	console.log(advanced); // Logs an object. Not all data may be present.
	const stats = await api.stats();
	console.log(stats); // Logs an object.
})();
```

</details>

## Sort types, `top` & `new`.

If you want to get a 'new' or 'top' post, you can specify a sort type. The valid ones are `top` & `new`.

You specify this as a second paramter in the `advanced` & `default` function. For example:

```js
api.advanced('meme', 'top'); // Gets a 'top' meme
api.advanced('meme', 'new'); // Gets a 'new' meme
api.advanced('meme', 'this-is-invalid'); // Errors, returns a rejected promise
```
