let markHeight = 1.69;
let johnHeight = 1.95;
let markmass = 78;
let johnmass = 92;
console.log("Height and mass:");
console.log(`Mark's Height is ${markHeight} and His mass is ${markmass}`);
console.log(`John's Height is ${johnHeight} and His John is ${johnmass}`);
console.log("Calculate Body Mass Index:");
let markBMI = markmass / markHeight ** 2;
let johnBMI = johnmass / johnHeight ** 2;
if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})! `);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})! `);
}

