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

// function delayedOutput(string, delay) {
//   let index = 0;

//   function showChar() {
//     if (string.length === index) {
//       return;
//     }

//     console.log(string[index]);
//     index++;

//     setTimeout(showChar, delay);
//   }

//   showChar();
// }

// // delayedOutput("hello", 500);
// // h
// // e
// // l
// // l
// // o
// delayedOutput("lorem ipsum dolot sit amet", 700);

// -------------
// варіант 1
// const user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
// };

// user.sayPhrase = function (phrase) {
//   console.log(phrase);
// };

// user.sayPhrase("Привіт!");

// варіант 2
// const user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
// };

// function sayPhrase(phrase) {
//   console.log(phrase);
// }

// user.sayPhrase = sayPhrase;

// user.sayPhrase("Здоров!");

// варіант 3
// const user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
//   sayPhrase: function (phrase) {
//     console.log(phrase);
//   },
// };

// user.sayPhrase("Що там?");

// варіант 4
// const user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
//   sayPhrase(phrase) {
//     console.log(phrase);
//   },
// };

// user.sayPhrase("Як там?");

/// ----
// this
// const user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
//   introduce() {
//     console.log(`My name is ${this.name}!`);
//   },
// };

// user.introduce(); // "Helga"
// user.name = "Anna";
// user.introduce(); // "Anna"

// ---
// приклад чому не варто використовувати пряме посилання
// let user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
//   introduce() {
//     console.log(`My name is ${user.name}!`);
//   },
// };

// let anotherUser = user; // copy obj
// user = null; // видаляємо об'єкт

// anotherUser.introduce();

// значення this не є фіксованим
// function introduceUser() {
//   console.log(`My name is ${this.name}!`);
// }

// let user = {
//   name: "Helga",
//   gender: "female",
//   age: 43,
//   introduce: introduceUser,
// };

// let anotherUser = {
//   name: "Derek",
//   gender: "male",
//   age: 35,
//   introduce: introduceUser,
// };

// user.introduce();
// anotherUser.introduce();
// introduceUser();

// this + arrow function
// let person = {
//   fullName: "John",
//   introduce: () => {
//     console.log("Hi", this.fullName);
//   },
// };

// person.introduce();

// Контекст
// let user = {
//   firstName: "Василь",
//   sayHi() {
//     console.log(`Мене звати ${this.firstName}!`);
//   },
// };

// setTimeout(user.sayHi, 1000);

// 1 = ненайдійне
// setTimeout(() => user.sayHi(), 1000);
// user = null;

// 2
// let user = {
//   firstName: "Василь",
//   sayHi() {
//     console.log(`Мене звати ${this.firstName}!`);
//   },
// };

// let bindedSayHi = user.sayHi.bind(user);

// setTimeout(bindedSayHi, 1000);

// 3
// let user = {
//   firstName: "Василь",
// };

// let anotherUser = {
//   firstName: "bob",
// };

// function sayPhrase(phrase) {
//   console.log(`${phrase} ${this.firstName}!`);
// }

// let bindedSayHi = sayPhrase.bind(user, "Привіт");
// let bindedSayBye = sayPhrase.bind(anotherUser, "Бувай");
// let bindedSayPhrase = sayPhrase.bind(user);

// setTimeout(bindedSayBye, 1000);

// bindedSayHi();
// bindedSayPhrase("Wwwwww");

// call and apply
// call
// function introduce(experience) {
//   console.log(
//     `My name is ${this.name}. I've been working in the company ${experience} years.`
//   );
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// introduce.call(person1, 5); // "My name is Alice"
// introduce.call(person2, 3); // "My name is Bob"
// introduce.apply(person1, [5]);
// introduce.apply(person2, [6]);

// apply
// function introduce() {
//   console.log(`My name is ${this.name}`);
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// introduce.apply(person1); // "My name is Alice"
// introduce.apply(person2); // "My name is Bob"

// const book1 = {
//   title: "Brave New World",
//   author: "Aldous Huxley",
// };

// const book2 = {
//   title: "1984",
//   author: "George Orwell",
// };

// function summary() {
//   console.log(`${this.title} was written by ${this.author}.`);
// }

// summary.bind(book1)();
// summary.bind(book2)();

// summary.call(book1);
// summary.apply(book2);

// function showLongerSummary(genre, year) {
//   console.log(
//     `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
//   );
// }

// showLongerSummary.call(book1, "dystopian", 1932);
// showLongerSummary.apply(book2, ["dystopian", 1948]);

// // ---

// function add(a, b) {
//   console.log(this.base + a + b);
// }

// const numbers = { base: 10 };

// add.apply(numbers, [5, 3]); // 18
// add.call(numbers, 5, 3); // 18

// ------------------------
// 1
// let test = 123;

// function b() {
//   let test = 456;
//   a();
// }

// function a() {
//   console.log(test);
// }

// b(); // 123

// 2
// arguments
// function foo(a, b) {
//   console.log(arguments);
// }

// foo(20, 10);

// function b(x, y, a) {
//   // Перезапусуємо третій аргумент
//   arguments[2] = 10;
//   console.log(a); // 10
// }

// b(1, 2, 3);

// Що буде виведено в консоль і чому?
function wtf() {
  function f1() {
    return 666;
  }

  return f2();

  // function f2() {
  //   return 777;
  // }
  let f2 = function () {
    return 777;
  };
}

console.log(wtf()); //  777
