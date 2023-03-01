const prompt = require("prompt-sync")({ sigint: false});
let age = prompt("Ваш возраст: ");
if (!(age >= 14 && age <= 90))
{
    console.log("В диапазоне");
}
else
{
    console.log("Не в диапазоне");
}
if (age < 14 || age > 90)
{
    console.log("В диапазоне");
}
else
{
    console.log("Не в диапазоне");
}