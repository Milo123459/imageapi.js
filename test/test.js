/*
imageapi.js test file
*/
const api = require('../index');
;(async() => {
    await api("meme", true);
    
    await api("meme", true);
    
    await api("meme", true);
    
    await api("meme", true);
    
    await api("meme", true);
    
    await api("meme", true);
    
    console.log(api.fetched);
})();