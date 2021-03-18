import api, { stats, advanced } from '../';
console.log("TYPESCRIPT");
;(async() => {
    console.log(await stats());
    console.log(await api('meme'));
    console.log(await advanced('meme'));
})();