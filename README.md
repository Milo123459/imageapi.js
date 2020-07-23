**ImageApi.JS**<br>
A simple module to grab random images from a subreddit. Examples:<br><br>
```js
;(async() => {
    const api = require('imageapi.js');
    console.log(await api("subreddit"[, verbose is either true or false]));
})();
```
I added in the following for a new update:
```js
api.fetched // Returns an array with all images fetched.
```
I hope this helps you!