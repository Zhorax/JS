const prompt = require("prompt-sync")({ sigint: false});

let name = prompt("Ваше имя?");
console.log(name);