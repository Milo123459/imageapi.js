const imageapi = require("../index");

async function test() {
  console.log(await imageapi(`meme`, true));
}
test();
