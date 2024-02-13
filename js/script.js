"use strict";

// Залишкові параметри
// console.log(Math.max(20, 10, 200, 4, 1)); // 200
// console.log(Math.min(20, 10, 200, 4, 1, 90)); // 1

// function foo(value, ...args) {
//   console.log(value);
//   console.log(args); // [...]
// }

// console.log(foo(2, 3, 4));
// console.log(foo(10));
// console.log(foo(1, 2, 3));

// // ---
// function calculate(operator, ...args) {
//   if (operator === "+") {
//     // ...
//   }

//   if (operator === "-") {
//     // ...
//   }
// }
// calculate("+", 2, 3, 4, 5, 10);
// calculate("-", 10, 2);

// // Оператор розширення
// let array = [2, 4, 9, 10, 1];
// console.log(Math.max(...array)); // ?
// // ---
// // Замість методу concat
// const numbers = [1, 2, 3];
// const otherArray = [10, 11];
// const newArray = [...numbers, ...otherArray];
// console.log("newArray", newArray);

// // У рядок
// let string = "Hello";
// console.log("string", [...string]);

// // Копіювання масивів (slice())
// let arr = [1, 2, 3];
// let copied = [...arr];
// console.log(copied); // [1, 2, 3]

// // Копіювання об'єктів (Object.assign)
// let obj = {
//   a: 1,
//   b: 2,
// };
// let copyObj = { ...obj };

// // Задача
// // Функцію яка буде знаходити сумму 2 найменших числа серед аргументів
// function sumTwoSmallestNumbers(...args) {
//   console.log("args", args);

//   const copyArgs = [...args];
//   const [firstNumber, secondNumber] = copyArgs.sort((a, b) => a - b);
//   // console.log("copyArgs", copyArgs);

//   // return copyArgs[0] + copyArgs[1];
//   return firstNumber + secondNumber;
// }

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3

// Замикання
// Lexical environment
// function getName() {
//   //   let name = "Pete";
//   console.log(name);
// }

// let name = "John";
// getName(); // ?
// name = "Bob";
// getName(); // ?

// 1
// let test = 666;

// function a() {
//   console.log(test);
// }

// function b() {
//   let test = 777;
//   console.log(test);
// }

// test = 888;
// a(); // 888
// b(); // 777

// 2
// let test = 666;

// function a() {
//   console.log(test);
// }

// function b() {
//   let test = 777;
//   a();
// }

// b(); // 666

// 3
let test = 666;

function b() {
  let test = 777;

  function a() {
    console.log(test); // 777
  }

  a();
}

b();

// makeWorker
function makeWorker() {
  let name = "John";

  return function () {
    console.log(name);
  };
}

let name = "Bob";
let work = makeWorker();
work(); // це - функція!

// makeCounter
function makeCounter() {
  let count = 0;

  return function () {
    return (count += 1);
  };
}

const counter = makeCounter(); // counter == function
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2

function createCalculator(defaultValue = 0) {
  let value = defaultValue;

  return {
    sum: function (a) {
      value += a;
    },
    getValue: function () {
      return value;
    },
  };
}

const calc = createCalculator();
calc.sum(15);
calc.sum(15);
console.log(calc.getValue()); // 30

const calc2 = createCalculator(10);
calc2.sum(15);
calc2.sum(15);
console.log(calc2.getValue()); // 40

// 1
// let price1 = 1;

// function simpleSum() {
//   let innerPrice = 10;
//   return price1 + innerPrice;
// }

// price1 = 2;
// console.log(simpleSum()); // 12

// 2
// let price1 = 1;

// function complexSum() {
//   let price1 = 100;

//   function simpleSum() {
//     let innerPrice = 10;
//     return price1 + innerPrice;
//   }

//   return simpleSum();
// }

// price1 = 2;
// console.log(complexSum()); // 110

// 3
// let price1 = 1;

// function simpleSum() {
//   let innerPrice = 10;
//   return price1 + innerPrice;
// }

// function complexSum() {
//   let price1 = 100;
//   return simpleSum();
// }

// price1 = 2;
// console.log(complexSum()); // 12

// 4
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayPhrase() {
    console.log(`${phrase}, ${user}`);
  }
}

let user = "Peter";

sayPhrase(); // ?

user = "Jack";
