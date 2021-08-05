'using strict';
/**
 * @file This program performs different calculations such as points, player value, player contribution,
 * turnovers, etc for WNBA players
 * @author Prakat Bhatta
 * @date 09/25/2020
 */
 
 
//
// DO NOT TOUCH CODE BETWEEN HERE...
//
// Import a file that contains test data that you can use for this project.
let data = require('./data.js');

// The licensePlates variable contains your array of license plate data.
// See the assignment specification for the format of the elements within
// the array.
let players = [...data.players];

//
// ... AND HERE.
//

// YOUR CODE MUST BEGIN BELOW THIS LINE...


// initializing array
let scores = [88, 75, 92, 69, 58, 83, 76, 83];

// adding extra elements to the array
scores.push(76, 63);
console.log({scores});
// console.log(`${scores}`);

// finding the length of the scores array
let scoresLength =scores.length;
console.log({scoresLength});


// sum of all the elements of the scores array
let runningSum = 0;
for (let counter = 0; counter < scoresLength; counter++){
   runningSum = scores[counter] + runningSum;
}
console.log({runningSum});

// finding out average of the sum of scores array
let avgScore = runningSum / scoresLength;
console.log({avgScore});

//filtering scores greater than average
let betterThanAvg = scores.filter(score => score > avgScore);
console.log({betterThanAvg});

// using .fliter() to return even scores
let evenScores = scores.filter(score => (score % 2 == 0));
console.log({evenScores});

console.log('\n');
// creating a 2D array
let arr2D = [
   [8, 78, 81, 64, 81],
   [13, 60, 86, 28, 47],
   [85, 17, 26, 86, 97],
   [81, 100, 76, 42, 39],
   [6, 12, 37, 68, 67]
];

console.log({arr2D});

/**
* printing out the elements of the the 2D array named arr2D
* calculating sum of the arr2D elements in arr2DSum
* calculating sum of the diagonal elements in arr2DDiagonal
*/
let length2D = arr2D.length;
let arr2DSum = 0;
let arr2DDiagonal = 0;
for (let rows = 0; rows < length2D; rows++ ){
   for (let cols = 0; cols < length2D; cols++ ){
       console.log('row ' + rows + ' col ' + cols + ' has value ' + arr2D[rows][cols]);
       arr2DSum += arr2D[rows][cols];
       if (rows == cols){
           arr2DDiagonal += arr2D[rows][cols];
       }
   }
}
console.log({arr2DSum});

// sum of the elements at the 4 corners of arr2D 
let arr2DFourCorners = 0;
for (let counter3 = 0; counter3 < length2D; counter3 += length2D - 1){
   for (let counter4 = 0; counter4 < length2D; counter4 += length2D - 1){
       arr2DFourCorners += arr2D[counter3][counter4];
   }
}
console.log({arr2DFourCorners});

/**
let arr2DDiagonal = 0;
for (let counter3 = 0; counter3 < length2D; counter3 += 4){
   for (let counter4 = 0; counter4 < length2D; counter4 += 4 ){
       arr2DFourCorners += arr2D[counter3][counter4];
   }
}
*/
// printing the sum of diagonals of array, did both code in above section with arr2DSum
console.log({arr2DDiagonal});

// One-Dimensional array rowSums whose elements are the sum of each rows of arr2D
let rowSums = [];
for (let rows = 0; rows < length2D; rows++ ){
   let sumOfRow = 0;
   for (let cols = 0; cols < length2D; cols++ ){
       sumOfRow += arr2D[rows][cols];
   }
   rowSums[rows] = sumOfRow;
}
console.log({rowSums});

// One-Dimensional array colSums, with sum of each columns of arr2D
let colSums = [];
for (let cols = 0; cols < length2D; cols++ ){
   let sumOfCol = 0;
   for (let rows = 0; rows < length2D; rows++ ){
       sumOfCol += arr2D[rows][cols];
   }
   colSums[cols] = sumOfCol;
}
console.log({colSums});


// New 2D array arr2DIntersectionSum, intersecting sum values in the row and column 
let arr2DIntersectionSum = [];
for (let rows = 0; rows < length2D; rows++ ){
   //initializing newArray inside the outer loop to store the sum values through .push()
   let newArray = [];
   for (let cols = 0; cols < length2D; cols++ ){
       let sum = rowSums[rows] + colSums[cols] - arr2D[rows][cols];
       newArray.push(sum);
   }
   arr2DIntersectionSum.push(newArray);
}
console.log({arr2DIntersectionSum});

// #4 #5
// console.log(players);
let numPlayers = players.length;
console.log({numPlayers});

/**
 * #6 - #10
 * splitting the elements seperated by single-ticks and sending them to wnba2D array
 * parsing the string values other than player name, position and team into integer
*/
let wnba2D = [];
for (let count = 0; count < numPlayers; count++){
    console.log(players[count]);
    let newRow = players[count].split(',');
    for (let count2 = 0; count2 < newRow.length; count2++){
        if (count2 >= 3){
            newRow[count2] = parseInt(newRow[count2]);
        }
    }
    wnba2D.push(newRow);
}
console.log({wnba2D});

/**
 * #12
 * printing out 3 character team abbreviation
 * finding the number of NYL players
 * calulating the total points made by NYL Players
 */

let nylTotalPoints = 0;
let nylPlayers = 0;
for (let i = 0; i < wnba2D.length; i++){
    console.log(wnba2D[i][2]);
    if (wnba2D[i][2] == 'NYL'){
        nylPlayers += 1;
        nylTotalPoints += wnba2D[i][20];
    }
}
console.log({nylPlayers});

/**
 * #13 #14
 * calculating bonus payout for 3PTs made and shots blocked
 * name of the players with > 500 points are kept in a new array playerPoints
 */
let bonusPayout = 0;
let _3P = 0;
let blkd = 0;
let playersPoints = [];
for (let row = 0; row < wnba2D.length; row++){
    let _3ptShots = wnba2D[row][7] * 100;
    blockedShots = wnba2D[row][17] * 75;
    _3P += _3ptShots;
    blkd += blockedShots;
    if (wnba2D[row][20] > 500){
        playersPoints.push(wnba2D[row][0]);
    }
}
bonusPayout = _3P + blkd;
console.log({bonusPayout});
console.log({playersPoints});

/**
 * #15 #16 
 * OPTIONAL #17, #18, #19
 * calculating player's overall contribution in playerValue
 * storing names of players in playersContribution array with player value >= 30
 */
let playersContribution = [];
let mostAssists = null;
let fewestTurnovers = null;
for (let row = 0; row < wnba2D.length; row++){
    let playerValue = ((wnba2D[row][20]) + (wnba2D[row][17] * 2) + (wnba2D[row][15] * 2) +
                     (wnba2D[row][16]) + (wnba2D[row][13]) + (wnba2D[row][14]) - 
                     ((wnba2D[row][18]) * 1.33) - (wnba2D[row][19])) / ((wnba2D[row][4]) / 32);
    console.log({playerValue});
    if (playerValue >= 30){
        playersContribution.push(wnba2D[row][0]);
    }
    if (wnba2D[row][15] >= mostAssists){
        mostAssists = wnba2D[row][0];
    }
    if (wnba2D[row][18] <= fewestTurnovers){
        fewestTurnovers = wnba2D[row][0];
    }
}
console.log({playersContribution});


// OPTIONAL #17 - coded along #12
console.log({nylTotalPoints});

// OPTIONAL #18 - coded along #15
console.log({mostAssists});

// OPTIONAL #19 - code along #15
console.log({fewestTurnovers});


/**
 * OPTIONAL 20
 * let fullName = [];
 *  let fName = [];
 * for (let row = 0; row < wnba2D.length; row++){
 * fullName = wnba2D[row][0].split(' ');
 *  fName = fullName.splice();
 * console.log(fName);
 * // console.log(fullName);
 * }
 */




// 
// DO NOT TOUCH CODE BELOW THIS LINE.
// MODIFYING THE CODE BELOW MAY NEGATIVELY AFFECT YOUR GRADE!
// 
if(typeof(scores) === 'undefined') { let scores; module.exports.scores = scores; } else { module.exports.scores = scores; }
if(typeof(scoresLength) === 'undefined') { let scoresLength; module.exports.scoresLength = scoresLength; } else { module.exports.scoresLength = scoresLength; }
if(typeof(avgScore) === 'undefined') { let avgScore; module.exports.avgScore = avgScore; } else { module.exports.avgScore = avgScore; }
if(typeof(betterThanAvg) === 'undefined') { let betterThanAvg; module.exports.betterThanAvg = betterThanAvg; } else { module.exports.betterThanAvg = betterThanAvg; }
if(typeof(evenScores) === 'undefined') { let evenScores; module.exports.evenScores = evenScores; } else { module.exports.evenScores = evenScores; }
if(typeof(arr2D) === 'undefined') { let arr2D; module.exports.arr2D = arr2D; } else { module.exports.arr2D = arr2D; }
if(typeof(arr2DSum) === 'undefined') { let arr2DSum; module.exports.arr2DSum = arr2DSum; } else { module.exports.arr2DSum = arr2DSum; }
if(typeof(arr2DFourCorners) === 'undefined') { let arr2DFourCorners; module.exports.arr2DFourCorners = arr2DFourCorners; } else { module.exports.arr2DFourCorners = arr2DFourCorners; }
if(typeof(arr2DDiagonal) === 'undefined') { let arr2DDiagonal; module.exports.arr2DDiagonal = arr2DDiagonal; } else { module.exports.arr2DDiagonal = arr2DDiagonal; }
if(typeof(rowSums) === 'undefined') { let rowSums; module.exports.rowSums = rowSums; } else { module.exports.rowSums = rowSums; }
if(typeof(colSums) === 'undefined') { let colSums; module.exports.colSums = colSums; } else { module.exports.colSums = colSums; }
if(typeof(arr2DIntersectionSum) === 'undefined') { let arr2DIntersectionSum; module.exports.arr2DIntersectionSum = arr2DIntersectionSum; } else { module.exports.arr2DIntersectionSum = arr2DIntersectionSum; }
if(typeof(numPlayers) === 'undefined') { let numPlayers; module.exports.numPlayers = numPlayers; } else { module.exports.numPlayers = numPlayers; }
if(typeof(wnba2D) === 'undefined') { let wnba2D; module.exports.wnba2D = wnba2D; } else { module.exports.wnba2D = wnba2D; }
if(typeof(nylPlayers) === 'undefined') { let nylPlayers; module.exports.nylPlayers = nylPlayers; } else { module.exports.nylPlayers = nylPlayers; }
if(typeof(otherPlayers) === 'undefined') { let otherPlayers; module.exports.otherPlayers = otherPlayers; } else { module.exports.otherPlayers = otherPlayers; }
if(typeof(centers) === 'undefined') { let centers; module.exports.centers = centers; } else { module.exports.centers = centers; }
if(typeof(playersHighPointsAssists) === 'undefined') { let playersHighPointsAssists; module.exports.playersHighPointsAssists = playersHighPointsAssists; } else { module.exports.playersHighPointsAssists = playersHighPointsAssists; }
if(typeof(playersBlocksFouls) === 'undefined') { let playersBlocksFouls; module.exports.playersBlocksFouls = playersBlocksFouls; } else { module.exports.playersBlocksFouls = playersBlocksFouls; }
if(typeof(bonusPayout) === 'undefined') { let bonusPayout; module.exports.bonusPayout = bonusPayout; } else { module.exports.bonusPayout = bonusPayout; }
if(typeof(playersPoints) === 'undefined') { let playersPoints; module.exports.playersPoints = playersPoints; } else { module.exports.playersPoints = playersPoints; }
if(typeof(playerValue) === 'undefined') { let playerValue; module.exports.playerValue = playerValue; } else { module.exports.playerValue = playerValue; }
if(typeof(playersContribution) === 'undefined') { let playersContribution; module.exports.playersContribution = playersContribution; } else { module.exports.playersContribution = playersContribution; }
if(typeof(nylTotalPoints) === 'undefined') { let nylTotalPoints; module.exports.nylTotalPoints = nylTotalPoints; } else { module.exports.nylTotalPoints = nylTotalPoints; }
if(typeof(mostAssists) === 'undefined') { let mostAssists; module.exports.mostAssists = mostAssists; } else { module.exports.mostAssists = mostAssists; }
if(typeof(fewestTurnovers) === 'undefined') { let fewestTurnovers; module.exports.fewestTurnovers = fewestTurnovers; } else { module.exports.fewestTurnovers = fewestTurnovers; }
if(typeof(namesAsAy) === 'undefined') { let namesAsAy; module.exports.namesAsAy = namesAsAy; } else { module.exports.namesAsAy = namesAsAy; }




