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

//-----------------------leacture Spread Operators-------------

// expand an Array into individial elements
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or More arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterable: Arrays,string,Maps,sets, NOT objects

const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str}`);//Unexpected Token

// Real-World Example
const ingredients = [
  // prompt("let's make pasta! Ingredients 1?"),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0] , ingredients[1] , ingredients[2])
restaurant.orderPasta(...ingredients);

//Objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };

console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//---------------------------Practice Problems ------------------------------

//===================Arrays======================

// Given , create a new array moreFruits that has 'mango' added at the end, without mutating fruits, using spread.

const fruits = ["apple", "banana"];
const newFruits = [...fruits, "mango"];
console.log(newFruits);

// Given , combine them into const merged so the result is [1,2,3,4,5,6]

const a = [1, 2, 3];
const b = [4, 5, 6];
const combine = [...a, ...b];
console.log(combine);

//Insert a new item 'orange' in the middle of this array using spread:
// target result: ['apple', 'banana', 'orange', 'grape']

const fruits = ["apple", "banana", "grape"];
const newFruit = [fruits[0], fruits[1], "orange", fruits[2]];
// const newFruit2 = [...fruits.slice(0, 2), 'orange', ...fruits.slice(2)];
console.log(newFruit2);

//====================objects===============

// Create a new object updatedUser that has all of user's properties, but with age changed to 22, without mutating the original.

const user = { name: "Tariq", age: 21 };

const updatedUser = { ...user };
updatedUser.age = 22;
console.log(user);
console.log(updatedUser);

//Given , merge them so userPrefs values override defaults where they overlap. What will the final fontSize be?

const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { fontSize: 18 };

const combine = { ...defaults, ...userPrefs };
console.log(combine);

//=================function calls ====================

//Given , use spread to pass these as separate arguments to Math.max() in one line, instead of writing Math.max(4, 9, 16) manually.

const nums = [4, 9, 16];
const max = Math.max(...nums);
console.log(max);

// Write a function introduce(name, age, city). Given , call introduce by spreading info as the arguments.

function introduce(name, age, city) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

const info = ["Tariq", 21, "Islamabad"];
introduce(...info);

//=========================Real World Example=======================

// You're managing state in a simple to-do app:
// Write code that adds a new todo { id: 3, task: 'Push to GitHub', done: false } to the array without mutating the original todos array, using spread.

const todos = [
  { id: 1, task: "Learn JS", done: false },
  { id: 2, task: "Build project", done: false },
];

const newTodo = { id: 3, task: "Push to GitHub", done: false };
const newTodos = [...todos, newTodo];
console.log(todos);
console.log(newTodos);

// you need to "toggle" a todo's done status without mutating the original object. Given:
// Create a new object updatedTodo where done is flipped to true, keeping everything else the same, using spread.

const todo = { id: 1, task: "Learn JS", done: false };

const updatedTodo = { ...todo };
updatedTodo.done = true;
console.log(updatedTodo);

// Copying with spread has a catch — predict the output here (this is a classic gotcha about shallow copy):
// Why does this happen even though you used spread to "copy" the object?

const original = { name: "Tariq", address: { city: "Islamabad" } };
const copy = { ...original };
copy.address.city = "Lahore";

console.log(original.address.city);

//Ans:because even after getting the copy of original object using the spread operators in heep memory when we try to change the nested object it change the original because both original and copied object key address refers to same object

// Combine spread with a function parameter — write a function addItem(cart, newItem) that returns a new array (doesn't mutate cart) with newItem added at the end. Test it with:

function addItem(cart, newItem) {
  return [...cart, newItem];
}
const cart = ["pen", "notebook"];
const updatedCart = addItem(cart, "eraser");
console.log(updatedCart);
