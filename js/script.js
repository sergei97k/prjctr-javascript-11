"use strict";

const currentDate = new Date();
console.log("date: ", currentDate);
console.log(typeof currentDate);

// Рядочком
// const dateFromString = new Date("December 17, 1995 03:24:00");
// const dateFromString = new Date("2022-09-01");
const dateFromString = new Date("03/20/2020");
// const dateFromString = new Date("29.01.2020"); // Не працює! - Invalid date
console.log(dateFromString);

// Параметрами, через кому
// Рік, місяць (0 для січня, 1 для лютого і т. д.), день, година, хвилина, секунда, мілісекунда.
const specificDate = new Date(2020, 4, 15, 14, 56, 0);
console.log(specificDate);

// Мілісекунди
const dateFromMilliseconds = new Date(1000000000000);
console.log(dateFromMilliseconds);

// ---

const today = new Date();
console.log(today.getFullYear()); // Отримати поточний рік
console.log(today.getMonth()); // Отримати поточний місяць (0-11)
console.log(today.getDate()); // Отримати поточний день місяця (1-31)
console.log(today.getDay()); // Поточний день тижня
console.log(today.getHours());
console.log(today.getMinutes());

const setDateExample = new Date();
setDateExample.setDate(5); // Встановити 5-те число місяця
setDateExample.setFullYear(2023); // Встановити рік 2023
console.log(setDateExample); // 5 лютого 2023

console.log(today.toString()); // Повний рядок дати і часу
console.log(today.toDateString()); // Рядок лише з датою
console.log(today.toISOString()); // Дата у форматі ISO

// timestamp
const timestamp = Date.now(); // Повертає поточний timestamp
console.log("timestamp", timestamp);
const dateFromTimestamp = new Date(timestamp);
console.log("dateFromTimestamp", dateFromTimestamp);

const someDate = new Date("2023-01-01");
const timestampForSomeDate = someDate.getTime();
console.log(timestampForSomeDate); // Поверне timestamp для 1 січня 2023 року

// Date.parse
console.log(Date.parse("2023-01-01T00:00:00Z")); // Повертає timestamp для 1 січня 2023 року, 00:00:00 UTC
console.log(Date.parse("March 12, 2022")); // Повертає timestamp для 12 березня 2022 року
console.log(Date.parse("Invalid Date String")); // Повертає NaN

// Функція isWeekend
// date - Дата, рядок, timestamp
function isWeekend(date) {
  const dayOfWeek = new Date(date).getDay(); // 0 .. 6
  return dayOfWeek === 0 || dayOfWeek === 6;
}

// const today1 = new Date();
// console.log(isWeekend(today1)); // false

// const sundayDate = new Date("2024-02-25");
// console.log(isWeekend(sundayDate)); // true

// const mondayDate = new Date("2024-02-21");
// console.log(isWeekend(mondayDate)); // false

// console.log(isWeekend("2024-02-21")); // false

const sundayDate = new Date("2024-02-25");
console.log(!isWeekend(sundayDate)); // false -> робочий день

// Підписка
const subscriptionDate = new Date("2024-02-05"); // 5 лютого 2024 заплатив за підписку
const days = 30;
const current = subscriptionDate.getDate();

// Додаємо 30 днів
subscriptionDate.setDate(current + days);
console.log("subscriptionDate", subscriptionDate);
