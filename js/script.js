"use strict";

function roundNumber(number) {
  number.toFixed(2);
}

console.log(roundNumber(2.3333)); // ?

// Просунуті методи масивів
// Масив об'єктів
const students = [
  { id: 1, name: "Іван", age: 20 },
  { id: 2, name: "Олена", age: 22 },
  { id: 3, name: "Микола", age: 21 },
];

// forEach

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element, index, array) => {
//   console.log(`Element at index ${index} is ${element}`);
// });

// let result = numbers.forEach((number) => {
//   console.log(number);
// });
// console.log(result); // undefined

// students.forEach((student) => {
//   student.age = 100;
//   console.log(student.name, student.age);
// });

// map
// const numbers = [1, 2, 3, 4];
// // const doubled = numbers.map((num) => num * 2);
// const doubled = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubled); // [2, 4, 6, 8]

// Отримати список імен з масиву об'єктів:
// const users = [
//   { id: 1, name: "Іван" },
//   { id: 2, name: "Олена" },
//   { id: 3, name: "Микола" },
// ];
// const names = users.map((user) => user.name);
// console.log(names); // ["Іван", "Олена", "Микола"]

// const namesAndAges = students.map((student) => {
//   return { fullName: student.name, years: student.age };
// });
// console.log(namesAndAges);

// ---------
// find
// Знайти число більше 10 в масиві чисел:
// const numbers = [4, 7, 12, 5, 9, 10, 20];
// const found = numbers.find((num) => num >= 10);
// console.log(found); // 12

// const index = numbers.findIndex((num) => num >= 10);
// console.log(index); // 2

// const filteredNumbers = numbers.filter((num) => num >= 10);
// console.log(filteredNumbers); // [12, 10, 20]
// let fruits = ["apple", "banana", "cherry", "apple"];
// let apples = fruits.filter((fruit) => fruit === "apple");
// console.log("apples", apples);

// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2, 4, 6]

// const users = [
//   { id: 1, name: "Іван", age: 25 },
//   { id: 2, name: "Олена", age: 18 },
//   { id: 3, name: "Микола", age: 32 },
// ];

// const userById = users.find((user) => user.id === 2);
// console.log(userById);

// const adults = users.filter((user) => user.age >= 21);
// console.log("adults", adults);

// const userById2 = users.find(function (user) {
//   return user.id === 2;
// });

// Arrow functions
const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => a + b;

// ---------
// some/every
// const numbers = [1, 3, 5, 7, 9, 10];
// // const numbers = [2, 4, 6, 8, 10];
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven); // true

// const areAllEven = numbers.every((num) => num % 2 === 0);
// console.log(areAllEven); // true | false

// sort
// Сортування рядків у масиві:
// const fruits = ["apple", "cherry", "dates", "Banana"];
// fruits.sort();
// console.log(fruits); // ["apple", "banana", "cherry", "dates"]

// const numbers = [10, 5, 40, 25, 100, -10];
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [5, 10, 25, 40, 100]

const users = [
  { id: 1, name: "Іван", age: 25 },
  { id: 2, name: "Олена", age: 18 },
  { id: 3, name: "Микола", age: 32 },
];
users.sort((a, b) => b.age - a.age);
console.log(users);

// ------------
// reduce
// Обчислення суми всіх елементів масиву:
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// i=0 => 0 + 1 = 1
// i=1 => 1 + 2 = 3
// i=2 => 3 + 3 = 6
// i=3 => 6 + 4 = 10
// i=4 => 10 + 5 = 15
// console.log(sum); // 15

// const mult = numbers.reduce(
//   (accumulator, currentValue) => accumulator * currentValue,
//   1
// );

// Підрахунок входжень слова в масиві:
const initialValue = {};
const fruits = ["apple", "banana", "apple", "cherry", "banana"];
const count = fruits.reduce((accumulator, fruit) => {
  if (fruit in accumulator) {
    accumulator[fruit] += 1;
  } else {
    accumulator[fruit] = 1;
  }

  return accumulator;
}, initialValue);
// i=0 {} -> { apple: 1 }
// i=1 { apple: 1 } -> { apple: 1, banana: 1 }
// { apple: 1, banana: 1 } -> { apple: 2, banana: 1 }
// { apple: 2, banana: 1 } -> { apple: 2, banana: 1, cherry: 1 }
// { apple: 2, banana: 1, cherry: 1 } -> { apple: 2, banana: 2, cherry: 1 }
console.log("count", count);

// Мутації
const original = [1, 2, 3, 4, 5];

function reverseAndLog(arr) {
  const copy = arr.slice();
  copy.reverse();
  console.log(copy); // [5, 4, 3, 2, 1]
}

reverseAndLog(original);

console.log(original); // [1, 2, 3, 4, 5]

let array = [1, 2, 3, 2, 4, 2];

const countOccurrences = function (array, element) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue === element) {
      accumulator++;
    }
    return accumulator;
  }, 0);
};

console.log(countOccurrences(array, 2)); // 3

function doubleOddNumbers(array) {
  return array.map((number) => {
    if (number % 2 !== 0) {
      return number * 2;
    } else {
      return number;
    }
  });
}
console.log(doubleOddNumbers([1, 2, 3, 4, 5, 6]));

let array = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(array) {
  return array.reduce((accumulator, evenValue) => {
    if (evenValue % 2 === 0) {
      return accumulator + evenValue;
    } else {
      return accumulator;
    }
  }, 0);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
