
const prompt = require("prompt-sync")({ sigint: false});

let value = prompt('Какое "официальное" название JavaScript?');

if (value == 'ECMAScript')
{
      console.log('Верно!');
} 
else
{
      console.log('Не знаете? ECMAScript!');
}