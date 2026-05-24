'use strict';

//-----------------Leacture Iteraation : the for loop ----------------


for(let rep = 1; rep <= 10; rep++){
    console.log("Lifting weight repetition" , rep);
}

//-----------------Leacture While loop----------------

let rep = 1;
while (rep <= 10) {
    // console.log("While: Lifting weight repetition" , rep);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`loop is about to end----`);
    }
}
