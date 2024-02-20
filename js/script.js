"use strict";

// const obj = {
//   a: 3,
// };

// const { a = 10, b = 20 } = obj;
// // x = 3
// // y = 20
// console.log(a + b); // 23

// setTimeout
// function sayHi(name) {
//   console.log("hello", name);
// }

// setTimeout(sayHi, 1000, "John"); // 1000 ms = 1 s
// setTimeout(sayHi, 1000, "Mike");

// // setTimeout(function () {
// //   console.log("my function");
// // }, 1000);

// setTimeout(function () {
//   sayHi("John");
// }, 1000);
// setTimeout(() => sayHi("Mike"), 1000);

// // Виконання функцій в послідовному порядку з різними затримками:

// function firstFunction() {
//   console.log("Перша функція виконана");
// }

// function secondFunction() {
//   console.log("Друга функція виконана");
// }

// setTimeout(firstFunction, 2000); // виконається через 2 секунди
// setTimeout(secondFunction, 4000); // виконається через 4 секунди

// // clearTimeout
// let timerId = setTimeout(function () {
//   console.log("Цей текст ніколи не виведеться");
// }, 5000);

// clearTimeout(timerId); // скасовує виконання функції з таймером

// // setTimeout 0
// setTimeout(() => console.log("timeout"), 0);
// console.log("Hello world");

// -----------------------------------------------------
// setInterval
// setInterval(() => {
//   console.log("hello");
// }, 2000);

// Лічильник
// let count = 0;

// let intervalId = setInterval(function () {
//   console.log(`Пройшло ${(count += 2)} секунди`);

//   if (count >= 10) {
//     clearInterval(intervalId); // зупиняємо лічильник після 10 секунд
//   }
// }, 2000);

// Симуляція прогресу завантаження:
// let progress = 0;

// let intervalId = setInterval(function () {
//   console.log(`Завантаження: ${progress}%`);
//   progress += 10;

//   if (progress > 100) {
//     clearInterval(intervalId);
//     console.log("Завантаження завершено!");
//   }
// }, 500); // 500 ms = 0.5 s

// Таймер зворотного відліку:
// let timeLeft = 10; // відлік з 10 секунд

// let intervalId = setInterval(function () {
//   console.log(`Залишилось часу: ${timeLeft--} секунд`);

//   if (timeLeft < 0) {
//     clearInterval(intervalId); // зупиняємо таймер, коли час вийшов
//     console.log("Час вийшов!");
//   }
// }, 1000);

// let timerId = setTimeout(function tick() {
//   console.log("ping");
//   timerId = setTimeout(tick, 2000); // ось вкладений setTimeout
// }, 2000);

// const delay = 2000;
// let count = 0;

// function logMessage() {
//   console.log(`Пройшло ${(count += 2)} секунди`);

//   if (count < 10) {
//     setTimeout(logMessage, delay); // плануємо наступний виклик
//   }
// }

// setTimeout(logMessage, delay);

function delayedOutput(string, delay) {
  let index = 0;

  function showChar() {
    if (string.length === index) {
      return;
    }

    console.log(string[index]);
    index++;

    setTimeout(showChar, delay);
  }

  showChar();
}

// delayedOutput("hello", 500);
// h
// e
// l
// l
// o
delayedOutput("lorem ipsum dolot sit amet", 700);
