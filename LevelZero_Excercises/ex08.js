// function to add two numbers

var readlineSync = require('readline-sync');

var score = 0;

function checkAnswer(question, rightAnswer)
{
  var userAnswer = readlineSync.question(question);

  var result;

  if (userAnswer === rightAnswer)
  {
    result = "You are absolutely right! " ;
    score+=1;
  }
  else 
  {
    result = "You are totally wrong! ";
    score-=1;
  }
  return result;
}

console.log(checkAnswer("What is the capital of US? ","Washington"));

console.log(checkAnswer("Where is Eiffel Tower located? ","Paris"));

console.log("Your score is: ",score);