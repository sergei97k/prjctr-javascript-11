"use strict";

// Група 1
// let user_profile = "User profile";
// let salary = 15000;
// let str = "Shevchenko Street";
// let f = "apple";
// let permission = false;
// let city = "Kharkiv";
let userProfile = "User profile";
let salary = 15000;
let streetName = "Shevchenko Street";
let fruit = "apple";
let hasPermission = false;
let city = "Kharkiv";

// Група 2
// let a = "John";
// let b = "Doe";
// let maxUsers = 50;
// let usrNme = "John";
// let first name = "Doe";
// let isVisible = true;
let userFirstName = "John";
let userLastName = "Doe";
let maxUsersAmount = 50;
let userName = "John";
let firstName = "Doe";
let isVisible = true;

// Група 3
// let isActive = "true";
// let age = 25;
// let isOpen = "Hello World!";
// let prc = 1000;
// let foo = false;
// let numberOfOrders = 10;
let text = "true";
let age = 25;
let greeting = "Hello World!";
let price = 1000;
let isActive = false;
let numberOfOrders = 10;

// Перетворення типів
let string = "123";
let number = +string;
console.log(number);

let sum = 20 + +"123"; // 20 + 123 -> 143
console.log(sum);

let number = +prompt("Введи число: ");
console.log(number);
console.log(typeof number);

let result = number ** 2;
console.log(result);

let number = 123;
// let string = String(number);
// let string = number.toString();
let string = number + ""; // "123"
console.log(string);

let x = 20;
let y = +"10"; // "10" -> 10
let result = x + y; // 20 -> "20" -> "2010"
console.log(result); // ?

let number = 0;
// let bool = Boolean(number);
let bool = !!number; //
// 1! 0 -> false -> !false -> true
// 2! true -> !true -> false
console.log(bool);
console.log(typeof bool);

let value = 1; // 1 -> Boolean(1) -> true
console.log(value && true);
// true && true -> true

let value = 0; // 0 -> Boolean(0) -> false
console.log(value && true); // 0
// false && true
console.log(true && value); // 0

let value = 1; // 1 -> Boolean(1) -> true
console.log(value || true); // 1
// true || true
console.log(true || value); // true

let value = 0; // 0 -> Boolean(0) -> false
console.log(value || true); // true
false || true;

let value = 0;
console.log((value >= 0 && value < 10) || value < 100);

let result = 100 * "$";
console.log(result); // NaN
console.log(isNaN(result)); // true

let x = 50;
console.log(isNaN(x)); // false

let y = "50";
console.log(isNaN(y)); // false
// isNaN -> "50" -> Number("50") -> 50 -> 50 == NaN

let randomNumber = Math.random();
console.log(randomNumber);
console.log(Math.round(randomNumber * 100));

// Заокруглення
let sum = 0.1 + 0.2;
let roundedSum = sum.toFixed(2); // "0.30"
let number = +roundedSum; // 0.3
// Коротка версія
let result = +sum.toFixed(10);
console.log(result);
