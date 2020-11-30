// function to add two numbers

var readlineSync = require('readline-sync');

var firstUserResponse = readlineSync.question("Enter number 1: ");
var secondUserResponse = readlineSync.question("Enter number 2: ");

function addition(numberOne, numberTwo)
{
  console.log("NumberOne is: ",numberOne);
  console.log("NumberTwo is: ",numberTwo);
  return numberOne + numberTwo;
}

var result = addition(firstUserResponse,secondUserResponse);

console.log("The addition of " + firstUserResponse + " and " + secondUserResponse + " is: " + result);