"use strict";

// const currentDate = new Date();
// console.log("date: ", currentDate);
// console.log(typeof currentDate);

// // Рядочком
// // const dateFromString = new Date("December 17, 1995 03:24:00");
// // const dateFromString = new Date("2022-09-01");
// const dateFromString = new Date("03/20/2020");
// // const dateFromString = new Date("29.01.2020"); // Не працює! - Invalid date
// console.log(dateFromString);

// // Параметрами, через кому
// // Рік, місяць (0 для січня, 1 для лютого і т. д.), день, година, хвилина, секунда, мілісекунда.
// const specificDate = new Date(2020, 4, 15, 14, 56, 0);
// console.log(specificDate);

// // Мілісекунди
// const dateFromMilliseconds = new Date(1000000000000);
// console.log(dateFromMilliseconds);

// // ---

// const today = new Date();
// console.log(today.getFullYear()); // Отримати поточний рік
// console.log(today.getMonth()); // Отримати поточний місяць (0-11)
// console.log(today.getDate()); // Отримати поточний день місяця (1-31)
// console.log(today.getDay()); // Поточний день тижня
// console.log(today.getHours());
// console.log(today.getMinutes());

// const setDateExample = new Date();
// setDateExample.setDate(5); // Встановити 5-те число місяця
// setDateExample.setFullYear(2023); // Встановити рік 2023
// console.log(setDateExample); // 5 лютого 2023

// console.log(today.toString()); // Повний рядок дати і часу
// console.log(today.toDateString()); // Рядок лише з датою
// console.log(today.toISOString()); // Дата у форматі ISO

// // timestamp
// const timestamp = Date.now(); // Повертає поточний timestamp
// console.log("timestamp", timestamp);
// const dateFromTimestamp = new Date(timestamp);
// console.log("dateFromTimestamp", dateFromTimestamp);

// const someDate = new Date("2023-01-01");
// const timestampForSomeDate = someDate.getTime();
// console.log(timestampForSomeDate); // Поверне timestamp для 1 січня 2023 року

// // Date.parse
// console.log(Date.parse("2023-01-01T00:00:00Z")); // Повертає timestamp для 1 січня 2023 року, 00:00:00 UTC
// console.log(Date.parse("March 12, 2022")); // Повертає timestamp для 12 березня 2022 року
// console.log(Date.parse("Invalid Date String")); // Повертає NaN

// // Функція isWeekend
// // date - Дата, рядок, timestamp
// function isWeekend(date) {
//   const dayOfWeek = new Date(date).getDay(); // 0 .. 6
//   return dayOfWeek === 0 || dayOfWeek === 6;
// }

// // const today1 = new Date();
// // console.log(isWeekend(today1)); // false

// // const sundayDate = new Date("2024-02-25");
// // console.log(isWeekend(sundayDate)); // true

// // const mondayDate = new Date("2024-02-21");
// // console.log(isWeekend(mondayDate)); // false

// // console.log(isWeekend("2024-02-21")); // false

// const sundayDate = new Date("2024-02-25");
// console.log(!isWeekend(sundayDate)); // false -> робочий день

// // Підписка
// const subscriptionDate = new Date("2024-02-05"); // 5 лютого 2024 заплатив за підписку
// const days = 30;
// const current = subscriptionDate.getDate();

// // Додаємо 30 днів
// subscriptionDate.setDate(current + days);
// console.log("subscriptionDate", subscriptionDate);

// Set
let uniqueNumbers = new Set();

// uniqueNumbers.add(4);
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2);

console.log(uniqueNumbers); // Set { 1, 2, 3 }

const filled = new Set([1, 2, 3, 3, 3, "hello"]);
console.log(filled); // 1, 2, 3, "hello"

// 1️. Використовувати метод forEach(), який працює аналогічно
// однойменному методу масиву:

const filled1 = new Set([1, 2, 3, 3, 3, "hello"]);
filled1.forEach(function (value) {
  console.log(value);
});
// 1
// 2
// 3
// 'hello'

// 2. Використати 'for...of' :

const filled2 = new Set([1, 2, 3, 3, 3, "hello"]);
for (let n of filled2) {
  console.log(n);
}
// 1
// 2
// 3
// 'hello'

const set = new Set();
set.add(1);
set.add("1");
console.log(set);

const cheapShirt = { size: "L", color: "white" };
// const fancyShirt = { size: "L", color: "white" };
const fancyShirt = cheapShirt;

const clothes = new Set();
clothes.add(cheapShirt);
clothes.add(fancyShirt);
// clothes.add(cheapShirt);
console.log(clothes);
console.log(clothes.size); // 1

// Map
let userRoles = new Map([
  ["admin", "John"],
  ["user", "Bob"],
]);
userRoles.set("manager", "Anna");
userRoles.set("admin", "Serhii");
console.log(userRoles);
console.log(userRoles.get("user")); // Bob
console.log(userRoles.get("boss")); // undefined
console.log(userRoles.has("manager")); // true

// forEach
userRoles.forEach((value, key) => {
  console.log(`${key} - ${value}`);
});

let user = { name: "John" };
let visits = new Map();
visits.set(user, 123);

console.log(visits);
console.log(visits.get(user)); // { name: "John" }
console.log(visits.get({ name: "John" })); // undefined

// Set
// Set -> масив
let set1 = new Set([1, 2, 3]);
let array = [...set1]; // перетворемо Set на масив
console.log(array);

function getWordFrequency(string) {
  const arrayOfWords = string.split(" ");
  const wordFrequencyMap = new Map();

  arrayOfWords.forEach((element) => {
    if (!wordFrequencyMap.has(element)) {
      wordFrequencyMap.set(element, 1);
    } else {
      wordFrequencyMap.set(element, wordFrequencyMap.get(element) + 1);
    }
  });

  return wordFrequencyMap;
}

console.log(getWordFrequency("apple banana apple orange"));

function createUnionArrays(firstArray, secondArray) {
  //   let concatedArray = firstArray.concat(secondArray);
  let newSet = new Set([...firstArray, ...secondArray]);
  return [...newSet];
}

console.log(createUnionArrays([1, 2, 3], [3, 4, 5]));

function intersectionArrays(array1, array2) {
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  const intersection = [...set1].filter((value) => set2.has(value));
  return intersection;
}
console.log(createIntersectionArrays([1, 2, 3, 4], [3, 4, 5, 6]));
