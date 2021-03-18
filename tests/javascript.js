const api = require('../');
console.log("JAVASCRIPT");
;(async() => {
    console.log(await api.stats());
    console.log(await api('meme'));
    console.log(await api.advanced('meme'));
})();