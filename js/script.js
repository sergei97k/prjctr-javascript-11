"use strict";

console.log("Hello world");
console.log("Hello world 2");
console.log("Hello world 3");

// Змінні

// 1
let name = "Bob";
console.log(name);

name = "John";
name = "Bill";
console.log(name);
// // ---

let myProfile = "";
let ourFavoritePlanet = "";

// 2
const country = "Ukraine";
// country = "Poland";
console.log(country);

// 3
var user = "John";
var user = "Bob";
console.log(user);
let user = "John";
console.log(user);

// 4
let user = "John";
let newUser = user; // "John"

user = "Mike"; // "user = Mike"

console.log("user: ", user); // Mike
console.log("newUser: ", newUser); // John

let user = "Bob";
user = "John";
console.log(user); // ?
user = "Mike";

const country = "Ukraine";
let myCountry = country;
console.log(country);
console.log(myCountry);

myCountry = "Poland";
console.log(myCountry);

country = "USA";
console.log(country);

let user = "John";
user = "Mike";
let newUser = user; // "Mike"

console.log("user: ", user); // Mike
console.log("newUser: ", newUser); // Mike

// Типи даних
// Number
let x = "10";
let y = 2.5;
let age = 35;
console.log(x);
console.log(y);
console.log(age);

// boolean
let isChild = true;
let isChecked = false;
console.log(isChild);
console.log(isChecked);

// let user = null;
// console.log(user);
// user = "John";
// console.log(user);

// let name;
// console.log(name);
// let movie = undefined;
// console.log(movie);
// let name = "John";
// name = 22;
// name = "Bob";
// name = undefined;
// name = null;
// console.log("name: ", typeof name);

// template string
// let name = "Bob";
// let message = `Hello World, ${name}!`;
// console.log(message);

// Математичні
let x = 10;
let y = 20;
let sum = x + y;
console.log("Sum: ", sum);

console.log(20 + y); // 40
console.log(1 / 0);

let b = 10;
b--;
console.log(b);

console.log(5 > 2); // true
console.log(5 >= 10); // false
console.log(10 < 20); // true
console.log(1 == 1); // true
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log("1" > 0); // "1" -> 1 -> 1 > 0

console.log(2 == 2); // true
console.log("2" == 2); // true
// "2" -> 2 -> 2 == 2
console.log(2 === 2); // true
console.log("2" === 2); // false

console.log(2 == "2"); // true
console.log(2 === "2"); // false

// ||
let hour = 9;
console.log(hour < 10 || hour > 18);
// hour = 9 (true || false) -> true
// hour = 11 (false || false) -> false
// hour = 20 (false || true) -> true

// &&
let hour = "11";
console.log(hour > 10 && hour < 18);
// hour = 11 (true && true) -> true
// hour = 9 (false && true) -> false
// hour = 20 (true && false) -> false

console.log(!true); // false
console.log(!0); // 0 -> false -> !false -> true
console.log(!10); // 10 -> true -> !true -> false

console.log("hello" > 10);
