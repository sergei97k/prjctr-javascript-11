"use strict";

// const obj = {
//   a: 3,
// };

// const { a = 10, b = 20 } = obj;
// // x = 3
// // y = 20
// console.log(a + b); // 23

// setTimeout
function sayHi(name) {
  console.log("hello", name);
}

setTimeout(sayHi, 1000, "John"); // 1000 ms = 1 s
setTimeout(sayHi, 1000, "Mike");

// setTimeout(function () {
//   console.log("my function");
// }, 1000);

setTimeout(function () {
  sayHi("John");
}, 1000);
setTimeout(() => sayHi("Mike"), 1000);

// Виконання функцій в послідовному порядку з різними затримками:

function firstFunction() {
  console.log("Перша функція виконана");
}

function secondFunction() {
  console.log("Друга функція виконана");
}

setTimeout(firstFunction, 2000); // виконається через 2 секунди
setTimeout(secondFunction, 4000); // виконається через 4 секунди

// clearTimeout
let timerId = setTimeout(function () {
  console.log("Цей текст ніколи не виведеться");
}, 5000);

clearTimeout(timerId); // скасовує виконання функції з таймером

// setTimeout 0
setTimeout(() => console.log("timeout"), 0);
console.log("Hello world");

// -----------------------------------------------------
