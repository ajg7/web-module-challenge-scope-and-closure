// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *        counter1 returns the function counter and the variable count is within the lexical enviornment of the function counter. Counter2 defines count outside of the function, and simply returns the increment for count.
 * 2. Which of the two uses a closure? How can you tell?
 *        counter1 uses a closure because it has a function within it, and the function is using data in its lexical enviornment
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *        counter1 is better if we don't want a global variable, while counter2 is if we do want a global variable
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    return Math.round(Math.random() * 2);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function formatNumber(num) {
    const digit = num % 10;
    if (digit === 1) {
      return `${num}st`
    }
    
    if (digit === 2) {
      return `${num}nd`;
    }
    
    if (digit === 3) {
      return `${num}rd`
    }
    
    return `${num}th`
}

function finalScore(inning, numOfInnings,formatNumber) {
  let score = {
    home: 0,
    away: 0
  };
  const result = [];
  for (let i = 1; i <= numOfInnings; i++) {
      score.home += inning();
      score.away += inning();
      result.push(`${formatNumber(i)} inning: ${score.away} - ${score.home}`);
  }
  return result;
}

// console.log(finalScore(inning, 9, formatNumber))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(finalScore, inning, numOfInnings, formatNumber) {
    return finalScore(inning, numOfInnings, formatNumber)
}

console.log(scoreboard(finalScore, inning, 9, formatNumber));