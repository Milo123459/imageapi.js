/*
imageapi.js test file
*/
const api = require('../index');
;(async() => {
    console.log(await api.multiple(`dank`, `meme`, true));
})();