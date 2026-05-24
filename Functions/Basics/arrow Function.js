//-----------------Leacture Arrow Function ------------------
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilReteriment = (birthYear , firstName) => {
    const age = 2037 - birthYear;
    const reteriment  = 65 - age;
    // return reteriment;
    return `${firstName} retires in ${reteriment}`
}

console.log(yearsUntilReteriment(1991 , 'jonas '));
console.log(yearsUntilReteriment(1980 , 'Bob'));