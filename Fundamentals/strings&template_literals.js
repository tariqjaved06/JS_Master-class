//-----------------------leacture 6 (String & Template literals)----------------------------
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' Years old ' + job + '!';
console.log(jonas);

const jonasnew = `I'm ${firstName} , a ${year - birthYear} years old ${job}!`
console.log(jonasnew);

console.log(`Just a Regular String...`);

console.log('String with \n\
multiple \n\
lines');
console.log(`    String
multiple
lines`);