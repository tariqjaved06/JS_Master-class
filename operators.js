//-----------------------leacture 4 (Basic Operators)----------------------------

//****Arthemetic Operators***
const now = 2037;
const agejonas  = now - 1991;
const ageSarah  = now - 2018;
console.log(agejonas , ageSarah);

console.log(agejonas * 2 , agejonas / 10 , 2 ** 3 ); //2 ** 3 means 2 to the power of 3 = 2x2x2

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName); //Concatenation

//***Assignment operator***

let x = 10 + 5; //Output 15
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//***Camparison operator(> , < , >= , <=)***

console.log(agejonas > ageSarah);  //45 > 19 = true
console.log(ageSarah  >= 18);  // 16 >= 18   = false

const isFullage = ageSarah  >= 18;
console.log(now - 1991 > now - 2018);  //same as agejonas > ageSarah
