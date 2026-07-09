"strict";

console.log(this);

//Simple function has its own this keyword so it gives undefined because it cannot have the parent(scope) object in it
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);
// Arrow func use the lexial this it means it access the this keyword of the parent object(scope) that is window object
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1991);

//In this method we use the "this" keyword and we get this complete object means parent object
const jonas = {
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

// in this we think that if we make the method inside the object it is calling the object becaues it create in it not it will simply done by making any other object call this method for it
//this keyword always point the object which is called that method where this is use
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; // brow the method from another object
matilda.calcAge();

const f = jonas.calcAge;
// f(); // act as a simple/regular function

////////////////// leacture Regular Function vs Arrow function////////////////

// var firstName = 'Matilda'
// Var creates the value in global object so arrow function call it and ended up adding the value
//arrow donot have this keyword
const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments Keywords(regular function have this but arrow cannot)
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 11);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 6);
