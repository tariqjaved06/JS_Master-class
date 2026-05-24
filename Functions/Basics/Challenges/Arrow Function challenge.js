'use strict';
//--------------------------------Chagllenge #01----------------------------------------
//task 1:Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score)


function calcAverage(score1 , score2 ,score3) {
    const average = (score1 + score2 + score3) / 3
    return `Average  of the scores is ${average}`;
}


//task2:Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

const scoreDolphins = calcAverage(89 , 78 ,9)
const scoreKoalas = calcAverage(15 , 25 , 78)

//task3:Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).\

function checkWinner(averageScoreDolphin, averageScoreKoalas) {
    if(averageScoreDolphin > 2 * averageScoreKoalas){
        console.log(`Dolphin win ${averageScoreDolphin} vs ${averageScoreKoalas} `);
    }else if(averageScoreKoalas > 2 * averageScoreDolphin){
        console.log(`Koalas win ${averageScoreKoalas} vs ${averageScoreDolphin}`);
    }
    else{
        console.log(`NO team wins`);

    }
}
checkWinner(scoreDolphins , scoreKoalas)