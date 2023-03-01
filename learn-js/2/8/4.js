const prompt = require("prompt-sync")({ sigint: false});

let a = +prompt("Первое число?");
let b = +prompt("Второе число?");

console.log(a + b);