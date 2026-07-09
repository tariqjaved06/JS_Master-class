"strict";
//we access the VAR variable before decelaration but it gives the "undefined" this is called hoisting
//but in the case of LET/CONST the variable did not access before decelaration that why it is in Temporal dead zone

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

//Functions(we can access the function before decleration)

console.log(addDecl(2, 4));
// console.log(addExpr(2,4));
console.log(addArrow);
// console.log(addArrow(2,4));

function addDecl(a, b) {
  return a + b;
}
// var addExpr = function (a,b) {
const addExpr = function (a, b) {
  return a + b;
};
// const addArrow = (a,b) => a+b
var addArrow = (a, b) => a + b;

//Example

if (!numProduct) {
  deleteShopping();
} //here num product is undefined so it is true always

var numProduct = 10;

function deleteShopping() {
  console.log("All products Deleted");
}

var x = 1; //var creates the properties in global window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(z === window.z);
console.log(y === window.y);
