var chalk = require('chalk');
var readlineSync = require('readline-sync');

const normalText = chalk.whiteBright.bold;
const correct = chalk.greenBright.bold;
const incorrect = chalk.redBright.bold;
const headerColor = chalk.bold.black.bgRgb(3, 252, 252);
const scoreColor = chalk.bgWhite.bold.black

var userName = readlineSync.question(normalText("\nPlease enter your good name: \n"));

console.log(headerColor("\nWelcome " + userName + "!"));

var birthDate = readlineSync.question(normalText("\nPlease enter your date of birth in (DD/MM/YYY) form: \n"));

var [day, month, year] = birthDate.split("/").map(str => +str);


if (day && month && checkDateValidity(day, month, year)) {
  console.log(normalText("\nYour birth date is: ") + scoreColor(" " + birthDate + " "));

  if (checkLeapYear(year))
    console.log(correct("\nCongo! You are born on a Leap Year\n"));
  else
    console.log(incorrect("\nSorry! You are not born on a Leap Year\n"));
}
else
  console.log(incorrect("\nYou have entered an invalid date!\n"));


function checkLeapYear(year) {
  var isLeap = false;

  if (year % 400 === 0)
    isLeap = true;
  else if (year % 100 === 0)
    isLeap = false;
  else if (year % 4 === 0)
    isLeap = true;

  return isLeap;
}

function checkDateValidity(day, month, year) {
  if (year > 2020)
    return false;

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