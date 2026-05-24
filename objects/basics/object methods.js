'use strict';

//-----------------Leacture Objects Method ----------------

//Function can act as a keyvalue pair in the Object
//Any function that attached to object is called as method
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schematmann',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Micheal' , 'Steven' , 'Peter'],
    hasDriverLicense : true, 
    
    // calcAge : function (birthYear) {
        //     return 2037 - birthYear;
        // }
        //this is equal to object calling the method(in this case this is act as a general calling the object)
        // calcAge : function () {
            //     // console.log(this);
            //     return 2037 - this.birthYear;
            // }
            
            calcAge : function () {
                this.age = 2037 - this.birthYear;
                return this.age;
    },
    
    getsummary : function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'not'} driver's license `
    }
};

console.log(jonas.calcAge());


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge 
//"jonas is 46 years old teacher.He has a/not driver's liscence"

console.log(jonas.getsummary());
//array are also a object but it is use the built in methods 

