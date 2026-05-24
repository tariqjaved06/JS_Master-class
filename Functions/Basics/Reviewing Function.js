//-----------------Leacture Reviewing Function-----------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
    
}
const yearsUntilReteriment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const reteriment = 65 - age;
    if (reteriment > 0) {
        console.log(`${firstName} retires in ${reteriment}`);
        return reteriment;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
}
}
console.log(yearsUntilReteriment(1991, 'Jonas'))
console.log(yearsUntilReteriment(1950, 'Jonas'))