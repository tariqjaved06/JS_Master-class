'use strict'
//-----------------Leacture Introduction to Array-----------------

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal' , 'Steven' , 'Peter']
console.log(friends);

const years = new Array(1991 , 1994 , 2020 , 2006)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);//it will give me the last number 3-1 = 2 

friends[2] = 'Jay'
console.log(friends); // Array is non premitive and if we declare as constant we cannot replace the entire array we only change its values

const firstName = 'Jonas'
const jonas = [firstName , 'SChenmeted' , 2037-1991 , 'teacher' , friends]
console.log(jonas);
console.log(jonas.length);

//Exercise
function calAge(birthYear) {
    return 2037 - birthYear;
}
const yearsforbirth = [1990 , 1967 ,2002 , 2010 , 2018]

const age1 = calAge(yearsforbirth[0])
const age2 = calAge(yearsforbirth[1])
const age3 = calAge(yearsforbirth[yearsforbirth.length - 1])
console.log(age1 , age2 , age3);

const age = [calAge(yearsforbirth[0]) , calAge(yearsforbirth[1])]
calAge(yearsforbirth[yearsforbirth.length - 1])
console.log(age);
