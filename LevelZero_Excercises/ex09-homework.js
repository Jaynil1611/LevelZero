// star patterns

var readlineSync = require('readline-sync');

var userResponse = readlineSync.question("Enter a limit for star pattern ");

var pattern;

function printStarDecreasing(number)
{
  for (var i = 0; i < number; i++)
  {
    pattern = "";
    for(var j = number-i; j > 0; j--)
    {
      pattern+="*"
    }
    console.log(pattern);
  }
}

function printStarIncreasing(number)
{
  for (var i = 1; i <= number; i++)
  {
    pattern = "";
    for(var j = 1; j <= i; j++)
    {
      pattern+="*"
    }
    console.log(pattern);
  }
}

printStarDecreasing(userResponse);
console.log();
printStarIncreasing(userResponse);