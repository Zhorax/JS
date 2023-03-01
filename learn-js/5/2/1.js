const prompt = require("prompt-sync")({ sigint: false});

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

console.log( a + b );