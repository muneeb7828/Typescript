var sym=Symbol('abc');
var sym2=Symbol('abc');

console.log(sym==sym2)       // ye false hi return karega

const id=Symbol('id')

const obj={
   [id]:100,                // is tarike se key likhte he to variable ki value iski key ban jati he
   name:"muneeb"
}
console.log(obj[id])        // aur isko access is tarike se karte he   
