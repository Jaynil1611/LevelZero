// print right/wrong if greater than 25

var readlineSync = require('readline-sync');

var userResponse = readlineSync.question("Am I older than 25 years? ");

console.log("Your response is: " + userResponse);

if (userResponse === "Yes" || userResponse === "yes" || userResponse === "Y" || userResponse === "y")
{
  console.log("You are totally wrong!");
}
else if(userResponse === "No" || userResponse === "no" || userResponse === "N" || userResponse === "n")
{
  console.log("You are absolutely right!");
}
else
{
  console.log("Invalid response!");
}