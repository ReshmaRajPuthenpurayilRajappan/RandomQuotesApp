/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'First, solve the problem. Then, write the code.',
  'Experience is the name everyone gives to their mistakes.',
  'In order to be irreplaceable, one must always be different',
  'Java is to JavaScript what car is to Carpet.',
  'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\’s code.',
  'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
  'Code is like humor. When you have to explain it, it\’s bad.',
  'Optimism is an occupational hazard of programming: feedback is the treatment.',
  'Before software can be reusable it first has to be usable.'
];

var author = [
  'Martin Fowler',
  'John Johnson',
  'Oscar Wilde',
  'Coco Chanel',
  'Chris Heilmann',
  'Dan Salomon',
  'Antoine de Saint-Exupery',
  'Cory House',
  'Kent Beck',
  'Ralph Johnson'
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  console.log(randomNum);
  return randomNum;
}

/***
 * `printQuote` function
***/
function printQuote() {
  var randNo = getRandomQuote();
  console.log(randNo);
  var newQuote = quotes[randNo];
  var authorName = author[randNo];
  console.log(newQuote);
  console.log(authorName);
  document.getElementById('quote-display').innerHTML = newQuote;
  document.getElementById('author').innerHTML = authorName;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);