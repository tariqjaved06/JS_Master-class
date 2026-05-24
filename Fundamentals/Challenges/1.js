console.log("---------Case 1-----------");

let markHeight  = 1.69;
let johnHeight   = 1.95;
let markmass  = 78;
let johnmass   = 92;
console.log("Height and mass:");
console.log("Mark Height is" , markHeight ,"meter", "Mark mass is" , markmass,"kg");
console.log("john Height is" , johnHeight , "meter", "john mass is" , johnmass ,"kg");
console.log("Calculate Body Mass Index:");
let markBMI = markmass / markHeight ** 2;
let johnBMI = johnmass / johnHeight ** 2;
let camparisonBMI = markBMI > johnBMI;
console.log("Is Mark BMI is heigher then John",camparisonBMI);

console.log("---------Case 2--------");

markHeight  = 1.88;
johnHeight   = 1.76;
markmass  = 95;
johnmass   = 85;
console.log("Height and mass:");
console.log("Mark Height is" , markHeight ,"meter", "Mark mass is" , markmass,"kg");
console.log("john Height is" , johnHeight , "meter", "john mass is" , johnmass ,"kg");
console.log("Calculate Body Mass Index:");
markBMI = markmass / markHeight ** 2;
johnBMI = johnmass / johnHeight ** 2;
camparisonBMI = markBMI > johnBMI;
console.log("Is Mark BMI is heigher then John",camparisonBMI);

 