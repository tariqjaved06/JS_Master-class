'strict'
// var firstName = 'Matilda'
// Var creates the value in global object so arrow function call it and ended up adding the value
//arrow donot have this keyword
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    
    //Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    }
    isMillenial();
    
    //Solution 2
    const isMillenial =  () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    }
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
const addExpr = function (a,b) {
  console.log(arguments);
  return a+b;
}
addExpr(2,5)
addExpr(2,5,8,11)

var addArrow = (a , b) =>{
  console.log(arguments);
  return a + b;
}
addArrow(2,5,6)