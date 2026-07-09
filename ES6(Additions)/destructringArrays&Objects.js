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

//-------------------------Leacture Destructring of Arrays-----------------------------
//Complex data stuctures to break it into smaller like variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructring of array
console.log(x, y, z);
console.log(arr); //Original array is safe

const [first, second] = restaurant.categories;
console.log(first, second); //we take first two elements only
const [first, , second] = restaurant.categories;
console.log(first, second); //we take first & third elements only and it is done by simply give spacing it

//For example the resturant owner wanted the main dish is the second one element of the array and secoundary is the first one dish of the array

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//Method 1: Without destructring the thing is happen like this
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main , secondary);

//Method 2: By destructring
[main, secondary] = [secondary, main]; //make new array and destruncting the new array

//function Return an array and we destructured it into variables
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

//Nested Array
const nested = [2, 4, [5, 6]];
// const [i ,  , j] = nested;
// console.log(i , j);
const [i, , [j, k]] = nested; //nested destructring
console.log(i, j, k);

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//-------------------------Leacture Destructring of Objects-----------------------------

restaurant.orderDelivery({
  time: "22:30",
  address: "Val del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Val del Sole, 21",
  starterIndex: 1,
});
//squence doesnot matter in objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//name the variable other than property
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating(Switching) variavles
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 }(({ a, b } = obj));
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(fri, o, c);

//---------------------------Practice Problems ------------------------------

//=============Destuctring of Arrays====================

//Example 1:
//Given use destructuring to get r, g, b in one line.
const rgb = [255, 100, 50];
const [r, g, b] = rgb;
console.log(r, g, b);

//Example 2
//Given use destructuring to grab the first two values, skip the third, and put the rest into an array called remaining.
const nums = [10, 20, 30, 40, 50];
const [first, second, ,] = nums;
console.log(first, second, remaining);
//Example 3
//Swap two variables  using array destructuring in ONE line (no temp variable).
let a = 5,
  b = 10;
[b, a] = [a, b];
console.log(`value of a = ${a} and value of b = ${b}`);

//=============Destuctring of Objects====================

// Example 1
// Destructure name and city only, and rename name to username while doing it.
const user = { name: "Tariq", age: 21, city: "Islamabad" };
const { name: username, age, city } = user;
console.log(username, age, city);

//Example 2
//Destructure name and job, giving job a default value of 'Unemployed' if it doesn't exist.
const person = {
  name: "Sara",
};
const { name, job = "Unemployed" } = person;
console.log(name, job);

//Example 3
//Destructure city and zip directly (nested destructuring) in one line.
const student = {
  name: "Ali",
  address: {
    city: "Lahore",
    zip: "54000",
  },
};

const {
  name,
  address: { city, zip },
} = student;
console.log(name, city, zip);

//=================Real World Problems=======================

// Write a function createUser({ name, email, age = 18 }) that logs a formatted string like "Tariq (21) - tariq@email.com". Call it with an object missing age and confirm the default kicks in.

function createUser({ name, email, age }) {
  console.log(`${name} (${age}) - ${email}`);
}

const user = {
  name: "tariq",
  email: "tariqjaved@gmail.com",
  age: 18,
};
createUser(user);

// Rewrite this function to use destructuring in its parameters instead of accessing config.x repeatedly:
// function setupServer(config) {
//   console.log(config.host);
//   console.log(config.port);
//   console.log(config.protocol);
// }

function setupServer(config) {
  const { host, port, protocol } = config;
  console.log(host, port, protocol);
}
const config = {
  host: 1232423,
  port: 34242,
  protocol: 3422345464,
};

setupServer();

// Write a function movePlayer({ x, y } = { x: 0, y: 0 }) that logs the new position. Call it with no arguments at all — what happens and why does the = { x: 0, y: 0 } matter here?

function movePlayer({ x, y } = { x: 0, y: 0 }) {
  console.log(`Value of x = ${x} and Value of Y = ${y}`);
}
movePlayer();
movePlayer({ x: 3, y: 4 });

// In one destructuring statement, extract temp_c (rename to currentTemp) and text (rename to condition) from nested data.
// From the same response object, destructure to get the date and maxtemp_c of just the first forecast day

const response = {
  location: "Karachi",
  current: {
    temp_c: 34,
    condition: { text: "Sunny", icon: "sun.png" },
  },
  forecast: {
    days: [
      { date: "2026-07-09", maxtemp_c: 36 },
      { date: "2026-07-10", maxtemp_c: 33 },
    ],
  },
};

const {
  current: {
    temp_c: currentTemp,
    condition: { text: condition },
  },
} = response;
console.log(currentTemp, condition);

const {
  forecast: {
    days: [{ date, maxtemp_c }],
  },
} = response;
console.log(`${date} and ${maxtemp_c}`);

// Destructure an array of objects in a single line to get just the name of the second person:

const team = [
  { name: "Ali", role: "Backend" },
  { name: "Sara", role: "Frontend" },
  { name: "Zain", role: "Design" },
];

const [{ name, role }, { name: name2, role: role2 }] = team;
console.log(name2, role2);

// You're building a form handler. Given this event-like object:
// Write a function handleInput(event) that uses destructuring in the parameter list to directly pull out name, value, and validation (renamed from dataset.validation), then logs:
// "email field changed to: tariq@gmail.com (required)"
const formEvent = {
  target: {
    name: "email",
    value: "tariq@gmail.com",
    dataset: { validation: "required" },
  },
};

function handleInput({
  target: {
    name,
    value,
    dataset: { validation },
  },
}) {
  console.log(`${name} field changed to: ${value} (${validation})`);
}
handleInput(formEvent);

//Combine destructuring + default + rename in one go — given:
// Extract status and, from data, extract user but rename it to userInfo and default it to { name: 'Guest' } if it's null or undefined. (Hint: default values in destructuring only trigger on undefined, not null — so think about how you'd actually handle this.)

const apiResponse = { status: 200, data: { user: null } };

const {
  status,
  data: { user: userInfo = "Guest" },
} = apiResponse;
console.log(status, userInfo);
