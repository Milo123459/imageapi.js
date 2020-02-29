const fetch = require('node-fetch');
module.exports=async function(subreddit){
    if(!subreddit) throw new TypeError("Error, you did not specify a subreddit!")
        let a =await fetch("https://image-api-2.glitch.me/reddit/"+subreddit).then(res=>res.json())
        if(a.error) throw new TypeError("Error, probably due to an invalid subreddit!")
    return a.img
}
