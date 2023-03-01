const prompt = require("prompt-sync")({ sigint: false});

let browser = prompt("Browser: ");

if(browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }