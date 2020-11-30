// increment score if the right answer

var readlineSync = require('readline-sync');

var userResponse = readlineSync.question("Is your hometown city Rajkot? ");

var score = 0;

console.log("Your response is: " + userResponse);

if (userResponse === "Yes" || userResponse === "yes" || userResponse === "Y" || userResponse === "y")
{
  score+=1;
  console.log("You are absolutely right! \nYour score is: " + score);
}

else if(userResponse === "No" || userResponse === "no" || userResponse === "N" || userResponse === "n")
{
  score-=1;
  console.log("You are totally wrong! \nYour score is: " + score);
}

else
{
  console.log("Invalid response! \nYour score is: " + score);
}