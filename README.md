**ImageApi.JS**<br>
A simple module to grab random images from a subreddit. Examples:<br><br>
```js
;(async() => {
    const api = require('imageapi.js');
    let fetched = await api("subreddit"[, verbose is either true or false])
    console.log(fetched); // logs the image;
    let advanced = await api.advanced("subreddit"[, verbose is either true or false]);
    console.log(advanced); // { img: *img*, res: *response time*, packet: *request number*};
})();
```
I added in the following for a new update:
```js
api.fetched // Returns an array with all images fetched.
```
I hope this helps you!