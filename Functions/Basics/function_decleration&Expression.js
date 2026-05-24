//-----------------Leacture Function declaration vs Expression------------------
//In function declaration the calling of funcxtion before the function ocuures but not in the Function Expression
//Function declaration
function calAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge1(1991);

//Function Expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1991);
console.log(age1 ,age2);
