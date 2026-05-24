//-----------------------leacture 9(Truthy and falsy values)----------------------------

//falsy Values: 0 , '' , undefined , null ,NaN

console.log(Boolean(0));//False
console.log(Boolean(undefined));//False
console.log(Boolean('jonas'));//True
console.log(Boolean({}));//true
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean(''));//false

//type coversion in if/else statement
const money = 0;
if (money) { //Js convert the value into boolean
console.log(`Don't Spend it all :)`);
}else{
    console.log(`You should get a job`);
}