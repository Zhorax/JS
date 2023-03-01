const prompt = require("prompt-sync")({ sigint: false});

let userName = prompt("Кто там?");

if (userName === 'Admin') {

  let pass = prompt('Пароль?');

  if (pass === 'Password') {
    console.log( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
}