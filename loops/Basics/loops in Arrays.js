'use strict';

//-----------------Leacture looping arrays breaking and continuing ----------------


const jonasArray = [
    'Jonas' , 
    'Schmedtmann', 
    2037 - 1991 , 
    'techer',
    ['Micheal' , 'Peter' , 'Steven'],
    true
];

const types = [];
// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ---
// console.log(jonasArray[4]);

for(let i = 0; i < jonasArray.length; i++ ){
    console.log(jonasArray[i] , typeof(jonasArray[i]));

    //Filling  types of array
    // types[i] = typeof jonasArray[i]; //type[0] = 'string'
    
    types.push(typeof jonasArray[i])
}

console.log(types);

const years = [1991 , 2007 , 1969 , 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    
ages.push(2037 - years[i])
}
console.log(ages);

//Continue and break Statement
console.log('---Only Strings----');
for(let i = 0; i < jonasArray.length; i++ ){
    if (typeof jonasArray[i] !== 'string' ){
        continue;//it will skip the current value during the loop
    }
    console.log(jonasArray[i] , typeof(jonasArray[i]));
}
console.log('---Stop after the number----');
for(let i = 0; i < jonasArray.length; i++ ){
    if (typeof jonasArray[i] === 'number' ){
        break;//it will stop the loop
    }
    console.log(jonasArray[i] , typeof(jonasArray[i]));
}