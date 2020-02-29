Welcome to imageapi.js' docs!
===========

**Firstly, what does imageapi.js do?** <br>
**imageapi.js is the easy way to grab a random image straight from a subreddit of your choice!**
<br>
Here is an example of how it works!
<br>
```js
const imageapi = require('imageapi.js');
//It has to be an async function
async function test(){
        let img = await imageapi('meme');
        console.log(img)
}
test()
```
This example would grab an image from r/meme <br>
Please consider installing this package as it could help you alot!