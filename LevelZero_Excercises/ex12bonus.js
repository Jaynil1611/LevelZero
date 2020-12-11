var chalk = require('chalk');
var readlineSync = require('readline-sync');

const normalText = chalk.whiteBright.bold;
const correct = chalk.greenBright.bold;
const incorrect = chalk.redBright.bold;
const headerColor = chalk.bold.black.bgRgb(3, 252, 252);
const scoreColor = chalk.bgWhite.bold.black

var userName = readlineSync.question(normalText("\nPlease enter your good name: \n"));

console.log(headerColor("\nWelcome " + userName + "!"));

var birthDate = readlineSync.question(normalText("\nPlease enter your date of birth in (DD/MM) form: \n"));

var [day, month] = birthDate.split("/").map(str => +str);


if (day && month && checkDateValidity(day, month)) {
  console.log(normalText("\nYour birth date is: ") + scoreColor(" " + birthDate + " "));

  if (checkPrime(day))
    console.log(correct("\nCongo! Your birthdate is a Prime number.\n"));
  else
    console.log(incorrect("\nSorry! Your birthdate is not a Prime number.\n"));
}
else
  console.log(incorrect("\nYou have entered an invalid date!\n"));


function checkPrime(day) {
  var isPrime = true;
  if (day === 1)
    return false;

  for (var i = 2; i <= day / 2; i++) {
    if (day % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function checkDateValidity(day, month) {
  var isValid = false;
  if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
    isValid = true;
    switch (month) {
      case 2:
        if (day > 29)
          isValid = false;
      case 4:
        if (day > 30)
          isValid = false;
      case 6:
        if (day > 30)
          isValid = false;
      case 9:
        if (day > 30)
          isValid = false;
      case 11:
        if (day > 30)
          isValid = false;
    }
  }
  return isValid;
}