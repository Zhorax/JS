const prompt = require("prompt-sync")({ sigint: false});

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);