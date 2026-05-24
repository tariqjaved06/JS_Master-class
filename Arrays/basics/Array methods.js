'use strict';

//-----------------Leacture Array Methods-----------------

const friends = ['Micheal' , 'Steven' , 'Peter']

//Add elements
const newLength = friends.push('jay') //return the length of new array
console.log(friends);
console.log(newLength);

friends.unshift('John')
console.log(friends);

// Remove ELememts 
friends.pop() // last elememt removed
const popped = friends.pop() //it will give the removed element
console.log(friends);
console.log(popped);

friends.shift();//remove first element
console.log(friends);

console.log(friends.indexOf('Steven'));//return the index
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven')); // return the true/false value
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}