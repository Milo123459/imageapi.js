/*
imageapi.js test file
*/
const api = require("../index");
(async () => {
  let f = await api("meme");
  console.log(f);
  console.log(f.res);
  console.log(f.img);
  console.log(await api.advanced(`meme`, true));
})();
