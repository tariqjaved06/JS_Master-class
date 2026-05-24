'use strict';

//-----------------Leacture looping Backwards and loop in loops ----------------

const jonasArray = [
    'Jonas' , 
    'Schmedtmann', 
    2037 - 1991 , 
    'techer',
    ['Micheal' , 'Peter' , 'Steven'],
    true
];
for(let i = jonasArray.length - 1; i >= 0; i--){
    console.log(i , jonasArray[i]);
    
}
//Loop inside the loop
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------Starting exercise ${exercise}`);
    for (let rep = 0; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
} 
