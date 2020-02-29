const imageapi = require('../index')

async function test(){
        let fetched = await imageapi('meme');
        console.log(fetched)
}
test()