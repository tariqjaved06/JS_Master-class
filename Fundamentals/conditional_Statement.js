//-----------------------leacture 7 (if/else statement)----------------------------
// variable not declare in if/else
    const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving car 🚗`);
}
else{
    const yearleft = 18 - age;
console.log(`Sarah is too young. wait another ${yearleft} years :)`);
}
const birthYear = 1998;
let century;
if (birthYear <=2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
