//-----------------------leacture 9(Type Conversion and type coversion)----------------------------
//*****************Manual Conversion(type conversion)*******************
//in this original value is not change instead new variable form having a number
//Convert string to number
const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN not a number(invalid number)
console.log(typeof NaN); //Number

//Number to String
console.log(String(23) , 23);

//*****************Automatic Conversion(type coversion)*******************

console.log('I am ' + 23 + ' year Old');  //Number between the two string in which due to plus operator convert to string
console.log('23' - '10' - 3); //String convert to number (output:10)
console.log('23' * '3');//both convert to Number

let n = '1' + 1 //1 convert to string and then it becomes 11
n = n - 1 // 11 - 1 = 10
console.log(n);//10