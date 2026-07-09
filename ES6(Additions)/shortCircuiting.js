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

//------------------------------leacture short Circuiting (&& and || )

//1.they can use  any data type
//2.they can return any data type
//3.they can done short circuiting

console.log("-----OR------");
// In OR operator it will return the first truthy operand in it
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("------AND------");
//In AND operator short circuting give u first falsy operand in it and if both are truthy then last value returned
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "spinach");


//--------------------------------Practice Problems----------------------------------

// Predict the output of each line (guess before running):

console.log(0 || "default"); //it gives 'default'
console.log("" && "hello"); // ''
console.log("Tariq" && "passed"); //'passed'
console.log(null || undefined || "fallback"); //null
console.log(1 && 2 && 3); //3
console.log(0 && "never reached"); //0

// Explain in your own words: what does || return — true/false, or something else? Same question for &&.

// ===================Rewrite this using short-circuit &&===================

// if (isLoggedIn) {
//   showDashboard();
// }

function showDashboard() {
  console.log("showDashboard");
}
const isLoggedIn = false;

console.log(isLoggedIn && showDashboard());

// if (user) {
//   console.log(user.name);
// }

const user = {
  name: "tariq",
};
console.log(user && user.name);
// ===================Rewrite this using short-circuit ||===================

// Write a function greet(name) that logs "Hello, Guest" if no name is passed, or "Hello, <name>" otherwise — using || for the default.

function greet(name) {
  console.log(`Hello, ${name}` || `Hello, Guest`);
}

greet();
greet("tariq");
