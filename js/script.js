"use strict";

// Залишкові параметри
console.log(Math.max(20, 10, 200, 4, 1)); // 200
console.log(Math.min(20, 10, 200, 4, 1, 90)); // 1

function foo(value, ...args) {
  console.log(value);
  console.log(args); // [...]
}

console.log(foo(2, 3, 4));
console.log(foo(10));
console.log(foo(1, 2, 3));

// ---
function calculate(operator, ...args) {
  if (operator === "+") {
    // ...
  }

  if (operator === "-") {
    // ...
  }
}
calculate("+", 2, 3, 4, 5, 10);
calculate("-", 10, 2);

// Оператор розширення
let array = [2, 4, 9, 10, 1];
console.log(Math.max(...array)); // ?
// ---
// Замість методу concat
const numbers = [1, 2, 3];
const otherArray = [10, 11];
const newArray = [...numbers, ...otherArray];
console.log("newArray", newArray);

// У рядок
let string = "Hello";
console.log("string", [...string]);

// Копіювання масивів (slice())
let arr = [1, 2, 3];
let copied = [...arr];
console.log(copied); // [1, 2, 3]

// Копіювання об'єктів (Object.assign)
let obj = {
  a: 1,
  b: 2,
};
let copyObj = { ...obj };

// Задача
// Функцію яка буде знаходити сумму 2 найменших числа серед аргументів
function sumTwoSmallestNumbers(...args) {
  console.log("args", args);

  const copyArgs = [...args];
  const [firstNumber, secondNumber] = copyArgs.sort((a, b) => a - b);
  // console.log("copyArgs", copyArgs);

  // return copyArgs[0] + copyArgs[1];
  return firstNumber + secondNumber;
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
