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

// ---
// Рекурсію
// Ітеративний підхід
function pow(x, n) {
  let result = 1;

  // множимо result на x n разів у циклі
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(3, 2)); // 9
console.log(pow(3, 1)); // 3
console.log(pow(3, 3)); // 27

// Рішення з використанням рекурсії
function pow(x, n) {
  if (n === 1) {
    return x;
  }

  return x * pow(x, n - 1);
}

console.log(pow(3, 3));

// 3,3 => 3 * pow(3, 2)
// 3,2 => 3 * pow(3, 1)
// 3,1 => 3
// 3 * 3 * 3 -> 27

// Факторіал
function factorial(n) {
  if (n === 1) {
    return 1; // базовий випадок
  }

  return n * factorial(n - 1); // рекурсивний виклик
}

console.log(factorial(5)); // 120

// factorial(5) -> 5 * factorial(4) -> 4 * factorial(3) ... 1
// 1 * 2 * 3 * 4 * 5

// Група 1
function convertTemperature(temperature, unit = "") {
  //   if (!unit) {
  //     return "Невідома одиниця виміру";
  //   }

  const upperCaseUnit = unit.toUpperCase();

  if (upperCaseUnit === "C") {
    return ((temperature * 9) / 5 + 32).toFixed(1);
  }

  if (upperCaseUnit === "F") {
    return (((temperature - 32) * 5) / 9).toFixed(1);
  }

  return "Невідома одиниця виміру";
}

console.log(convertTemperature(32, "C")); // повинно повертати 89.6 (це 32°C у фаренгейтах)
console.log(convertTemperature(100, "F")); // повинно повертати 37.8 (це 100°F у цельсіях)
console.log(convertTemperature(100)); // повинно повертати "Невідома одиниця виміру!"

// Група 2
// function isStrongPassword(password) {
//   if (
//     password.length >= 8 &&
//     password[0] == password[0].toUpperCase() &&
//     password[password.length - 1] == password[password.length - 1].toLowerCase()
//   ) {
//     return true;
//   }
//   return false;
// }

function isStrongPassword(password, minLength = 8) {
  const hasUpperCase = password[0] === password[0].toUpperCase();
  const lastIndex = password.length - 1;
  const hasLowerCase =
    password[lastIndex] === password[lastIndex].toLowerCase();
  const hasValidLength = password.length >= minLength;

  return hasUpperCase && hasLowerCase && hasValidLength;
}

console.log(isStrongPassword("Example")); // true
console.log(isStrongPassword("example")); // false
console.log(isStrongPassword("Ex")); // false
