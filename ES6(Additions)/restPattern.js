"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilevered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1} , ${ing2} and ${ing3}`,
    );
  },

  orderPizza: function (mainIngredients, ...otherIngridents) {
    console.log(mainIngredients);
    console.log(otherIngridents);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//-------------------------------leacture Rest Pattern and Parameters---------------

//1. Destructring

// =================== Arrays ====================
//Rest pack elements into array
//SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
// (in this we contain the rest of the elements remain after the destructring)
// there is not only a rest
//it must be the last in destructring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//=================Objects===================
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2.Fucntions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 4, 6, 7, 9, 3);
const x = [22, 5, 7];
add(...x);

(restaurant, orderPizza("mushromms", "onion", "olives", "spinach"));
restaurant.orderPizza("mushrooms");

//---------------------------Practice Problems ------------------------------

//====================Arrays========================

// Given, destructure so first gets 10, second gets 20, and everything else goes into an array called rest.

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Given, destructure to get just the firstColor, with all remaining colors collected into otherColors. Predict what otherColors looks like if the array only has one item, e.g. ['red'].

const colors = ["red", "green", "blue"];

const [firstColor, ...otherColors] = colors;
console.log(firstColor, otherColors);

//======================Objects=======================

// Destructure brand and model out, and put the remaining properties into an object called details.
const car = { brand: "Toyota", model: "Corolla", year: 2022, color: "white" };

const { brand, model, ...details } = car;
console.log(brand, model, details);

// Write a function printSummary that takes this object as a parameter, destructures name directly in the parameter list, and collects everything else into rest. Log name and rest separately.
const student = { name: "Ali", roll: 12, marks: 88, grade: "A" };

function printSummary({ name, ...rest } = student) {
  console.log(name, rest);
}
printSummary(student);

//===============Functions=================

// Write a function multiplyAll(...nums) that takes any number of arguments and returns their product (multiplied together).

function multiplyAll(...nums) {
  return nums.reduce((total, n) => total * n, 1);
}

console.log(multiplyAll(1, 65, 35, 6)); // pass separate args, not an array

//==================Real world Problems=================

// You're building a simple event logger. Write a function createLog(eventType, ...details) that returns an object like:
// { eventType: 'click', details: ['button-1', 'header'] }
// when called as createLog('click', 'button-1', 'header').

function createLog(eventType, ...details) {
  return { eventType, details };
}

console.log(createLog("click", "button-1", "header"));

// Write a function logMessage(level, ...messages) where level is a single required argument (like 'ERROR' or 'INFO') and the rest of the arguments get joined into one string separated by spaces. Example call:
// logMessage('ERROR', 'Failed', 'to', 'connect', 'to', 'server');
// should log: ERROR: Failed to connect to server

function logMessage(level, ...messages) {
  const string = messages.join(" ");
  console.log(`${level}: ${string}`);
}

logMessage("ERROR", "Failed", "to", "connect", "to", "server");

// Given a form object:
// Write code using rest that separates out password (you don't want to log this) from the rest of the fields, so you can safely console.log only the non-sensitive fields.
const formData = {
  username: "tariq06",
  password: "12345",
  confirmPassword: "12345",
};
const { password, ...safeFields } = formData;
console.log(safeFields);

// Combine rest + spread in the same function — write a function addToFront(newItem, ...existingItems) that returns a new array with newItem placed at the very front, followed by all existingItems, without mutating anything. Test with:

// addToFront('first', 'second', 'third', 'fourth');
// expected: ['first', 'second', 'third', 'fourth']

function addToFront(newItem, ...existingItems) {
  return [newItem, ...existingItems];
}

console.log(addToFront("first", "second", "third", "fourth"));
