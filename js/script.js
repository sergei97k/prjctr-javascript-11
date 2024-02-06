"use strict";

// Quiz
// 3
let person = {
  isOnline: true,
};
let newPerson = person;
newPerson.isOnline = false;

console.log(person.isOnline); // ?
console.log(newPerson.isOnline); // ?

// 4
let objA = { name: "John" };
// let objB = { name: "John" };
// console.log(objA === objB); // false

let objB = objA;
console.log(objA === objB); // true

// Функції
// Оголошення функції
// name = аргумент
function sayHello(name) {
  // тіло функції
  //   console.log("Hello World!");
  console.log(`Hello ${name}!`);
}

// виклик функції
sayHello("Serhii");
sayHello("Bob");
sayHello("Marta");
console.log(sayHello("John"));

function add(a, b) {
  return a + b;
}

let result = add(2, 3); // 5
console.log(result - 10); // 5
console.log(add(10, 20)); //30

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 2, 4)); // 2 * 2 * 4

function foo(a) {
  console.log("a", a);
}

foo();

// Параметри за замовчуванням
function createRectangle(width, height = 5) {
  return {
    width: width,
    height: height,
  };
}

console.log(createRectangle(10, 20));
console.log(createRectangle(10));
console.log(createRectangle());

function createRectanglev2(height = 5, width) {
  return {
    width: width,
    height: height,
  };
}

console.log(createRectanglev2(10));

// roundNumber
function roundNumber(number, precision) {
  //   let result = number.toFixed(precision);
  //   return +result;
  return +number.toFixed(precision);
}

console.log(roundNumber(20.33333, 2)); // 20.33
console.log(roundNumber(1.151515, 3)); // 1.152

// --
// Види функцій
// Function Declaration
sayHi("Bob");

function sayHi(name) {
  console.log(`Hello ${name}!`);
}

// --->

// function sayHi(name) {
//   console.log(`Hello ${name}!`);
// }

// // інші функції Function Declaration

// sayHi("Bob");

// Function Expression
const greet = function () {
  console.log("hello world!");
};

greet();

// Arrow function
const greetArrow = () => {
  console.log("hello world!");
};

const sum = (a, b) => a + b;
// return a + b

greetArrow();
sum(2, 3);

let user = {
  sayHello: function () {
    // ...
  },

  sayHello2() {
    // ...
  },

  sayHello3: () => {
    // ...
  },
};

// Чисті функції
// let a = 2;

// function add(b) {
//   return a + b;
// }

// add(3); // 5
// a = 10;
// add(3); // 13

// Перевірка, чи є число парним:
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(10));
console.log(isEven(10));
console.log(isEven(9));

// Отримання першого слова з рядка:
function getFirstWord(str) {
  return str.split(" ")[0];
}

console.log(getFirstWord("Hello world")); // "Hello"
console.log(getFirstWord("Hello world")); // "Hello"
console.log(getFirstWord("Hello world")); // "Hello"
