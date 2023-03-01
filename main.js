"use strict";

const Strlib = require('./module/StringModule.js')
const Mathlib = require('./module/MathModule.js')
const prompt = require("prompt-sync")({ sigint: false});
const Product = require('./module/ModuleClass.js')

//const str = "aBCdB";
//const str2 = "Hello neighbor.   How ,how   are you .  I am fine. am   am";

let str = prompt("Введите строку 1 : ");
let str2 = prompt("Введите строку 2 : ");
console.log(" ")
console.log("(Задание 1.1) строка 1 : " + Strlib.LowerCase(str));
console.log("(Задание 1.1) строка 1 : " + Strlib.DeleteSpace(str2));
console.log(" ")
console.log("Колличество слов в строке 2 равняется " + Strlib.AmountOfWords(str2));
console.log(" ")
Strlib.AmountOfUniqueWords(str2);
console.log(" ")
let num,num1,nume;

    num = prompt("Введите число: ");
    num = BigInt(num);
do
{
    nume = prompt("Введите знак: ");
    if( nume != "=")
    {
      num1 = prompt("Введите число: ");
      num1 = BigInt(num1);
      if( nume == "+")
        num = Mathlib.Addition(num,num1);
      if( nume == "-")
        num = Mathlib.Subtraction(num,num1);
      if( nume == "/")
        num = Mathlib.Division(num,num1);
      if( nume == "*")
        num = Mathlib.Multiplication(num,num1);
      console.log(num);
    }
}
while(nume != "=")
console.log(num);
console.log(" ")

//const str1 = 'name-starts-fd&quantity-=5';
const str1 = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';

const arr = [new Product("SGodsafd", 2, 6, "adscabc"), new Product("ASAadsfd", 2, 34, "CVASabc"),
    new Product("fdMdasdqwt", 22, 5, "Gqwdsa asc"), new Product("Cream", 213, 1, "ASDsabc"),
    new Product("Fsa", 30, 4, "Fssqasxw")
];
console.log("Объекты, которые подходят под описание: ")
for (let i=0; i<arr.length; i++)
{
    arr[i].Search(str1);
}


