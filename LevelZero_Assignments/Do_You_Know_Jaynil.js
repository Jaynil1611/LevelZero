// quiz app which tests whether your friends know you

var chalk = require('chalk');
var readlineSync = require('readline-sync');

const normalText = chalk.whiteBright.bold;
const correct = chalk.greenBright.bold;
const headerColor = chalk.bold.black.bgRgb(3, 252, 252);
const scoreColor = chalk.bgWhite.bold.black;

var score = 0;

const questions = [
	{
		question: 'Which is my favourite sport? ',
		answer: 'Football'
	},
	{
		question: 'What is the activity which I do the most throughout the day? ',
		answer: 'studies'
	},
	{
		question: 'What degree am I pursuing? ',
		answer: 'Engineering'
	},
	{
		question: 'Which genre of music I like to listen? ',
		answer: 'EDM'
	},
	{
		question: 'Which is my favourite and most liked social media app? ',
		answer: 'LinkedIn'
	}
];

var highScorers = ['Jaynil','Karan','Kartik'];

function evaluateAnswer(question, answer) {
	var userAnswer = readlineSync.question(
		'\n' + chalk.blueBright(question) + '\n'
	);
	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		score += 1;
		console.log(chalk.greenBright('\nYou are absolutely right!'));
    if(score === 5){
      highScorers.push(userName);
    }
	} else {
		console.log(chalk.red('\nYour answer is wrong!'));
		console.log(correct('\nThe correct answer is: ' + answer));
	}
	console.log(scoreColor('\nScore is: ' + score));
  lineBreak();
}

function lineBreak()
{
  	console.log(
		chalk.cyanBright.bold('\n-----------------------------------------')
	);
}

function printQuestions(questionList) {
	for (var i = 0; i < questionList.length; i++) {
		evaluateAnswer(questionList[i].question, questionList[i].answer);
	}
}

function printHighSCorers(){
    lineBreak();
    console.log(chalk.bgRed("\n TOP SCORERS \tSCORE "));
    for(var i = 0; i <highScorers.length; i++) {
      console.log(chalk.yellowBright.bold("\n "+highScorers[i]+"\t\t\t"+"  5"));
    }
}

console.log(
	chalk.redBright.bold("\nLet's play a game called 'DO YOU KNOW JAYNIL ?'\n")
);

var userName = readlineSync.question(
	headerColor('Please enlighten us with your good name:\n')
);

console.log(
	normalText(
		'\nWelcome ' + scoreColor(' ' + userName + ' ') + ' to this quiz!\n'
	)
);

console.log(
	chalk.bold.underline('\nHere are some rules before you start playing: ')
);

console.log(
	'\n1. There are a total of ' +
		chalk.bgRed(' 5 ') +
		' Questions.\n2. Each correct answer gives you +1 while wrong answer gives you 0.\nNo negative marking.\n3. You need type your answers for each question.\n'
);

if (
	readlineSync.keyInYNStrict(
		normalText('\nAre you ready to take this quiz challenge? \n')
	)
) {
	printQuestions(questions);
  finalScores();
} else {
	console.log(
		chalk.redBright('\nSeems like you are not ready. Please try again later\n')
	);
	lineBreak();
}

function finalScores()
{
  console.log(
	correct('\nCongratulations! on completing the quiz. Here are the results: ')
);

console.log(
	scoreColor('\nFinal score of ' + chalk.bold(userName) + ' is: ') +
		chalk.bgRed(' ' + score + ' ')
);

if(score === 5)
{
  console.log(correct("\nYou are one of the Top Scorers. Congrats!!!"));
}

printHighSCorers();

console.log(
	chalk.greenBright(
		'\nTo know more about me please visit: ' +
			chalk.underline('https://bit.ly/jaynil-gaglani')
	)
);
}