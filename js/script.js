"use strict";

let value = 12.34;
console.log(+value.toFixed(1)); // "12.3" -> +"12.3" -> 12.3

let a = "10";
let b = 5;
// let sum = a + b; // "105"
let result = +a + b; // "10" -> 10 -> 10 + 5 = 15

// String
let message = "Hello world!";
console.log(message.length); // 12
console.log(message[0]); // H
console.log(message[1]); // e
console.log(message[5]); // " "
console.log(message[6]); // w

let lastIndex = message.length - 1; // 12 - 1 = 11
console.log(message[lastIndex]); // message[11] = !

console.log(message.toUpperCase());
console.log(message.toLowerCase());

let message = "Widget with id";
console.log(message.indexOf("id")); // 1
console.log(message.indexOf("d")); // 2
console.log(message.indexOf(" ")); // 6

console.log(message.includes("Widget")); // true
console.log(message.includes("widget")); // false

// Написати програму, яка перетворює перший символ рядка на велику літеру.
let message = "hello world";
// Hello world
let startElement = message[0].toUpperCase(); // "H"
let restMessage = message.slice(1); // "ello world"
let result = `${startElement}${restMessage}`;
// let result = startElement + restMessage;

// one line
console.log(`${message[0].toUpperCase()}${message.slice(1)}`);

// Умовні конструкції
let name = "Bob";

if (name === "John") {
  console.log("Hello, John");
} else {
  console.log("You're not John!");
}

let x = 3;

if (x >= 3) {
  console.log("Ok!");
}

let age = prompt("Enter your age"); // string
let userStatus;

if (age >= 18) {
  userStatus = "adult";
} else {
  userStatus = "child";
}

console.log(userStatus);

let hour = 13;

if (hour >= 13 && hour <= 14) {
  console.log("Перерва");
} else if (hour >= 10 && hour <= 18) {
  console.log("Офіс відкритий");
} else {
  console.log("Офіс зачінений");
}

// Тернарний оператор
let age = 22;
// let userAge = age >= 18 ? "adult" : "child";
let userAge = age < 18 ? "child" : "adult";

// Switch
let dayOfWeek = "Saturday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the workweek");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("End of the workweek");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Error!");
}

if (dayOfWeek === "Monday") {
  console.log("Start of the workweek");
} else if (
  dayOfWeek === "Tuesday" ||
  dayOfWeek === "Wednesday" ||
  dayOfWeek === "Thursday"
) {
  console.log("Midweek");
} else if (dayOfWeek === "Friday") {
  console.log("End of the workweek");
} else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Error!");
}

let dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;
  default:
    console.log("Такого номера дня немає!");
}

let grade = 55;

switch (true) {
  case grade >= 90 && grade <= 100:
    console.log("Відмінно (A)");
    break;
  case grade >= 80 && grade < 90:
    console.log("Добре (B)");
    break;
  case grade >= 70 && grade < 80:
    console.log("Задовільно (C)");
    break;
  case grade >= 60 && grade < 70:
    console.log("Достатньо (D)");
    break;
  case grade < 60:
    console.log("Не задовільно (F)");
    break;
  default:
    console.log("Некоректне значення оцінки!");
}

let value = prompt("Enter number: "); // string

// Чи є це НЕ число
if (isNaN(value)) {
  console.log("Please, enter valid number!!");
}

let month = +prompt("Enter month");
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 11:
  case 9:
  case 10:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}

let age = prompt("How old are you?");

// if (isNaN(age)) {
//     age = +prompt('Please, enter correct number!');
// }

if (age < 18) {
  console.log("child");
} else if (age >= 18 && age < 65) {
  console.log("adult");
} else if (age >= 65) {
  console.log("retired");
} else {
  console.log("error");
}

let salary = prompt("Salary: ");
if (salary < 1000) {
  console.log("податок становить 10%");
} else if (salary >= 1000 && salary <= 5000) {
  console.log("податок становить 15%");
} else {
  console.log("податок становить 20%");
}

// i++ === i = i + 1
// i++ === i += 1
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// i = 0
// i = 1
// i = 2
// i = 3
//....
// i = 11 -> end

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

// for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// i = i + 4
// i += 4

// while
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do..while
let i = 0;
do {
  console.log(i); // 0
  i++;
} while (i > 10);

// break
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue
let i;
for (i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log(i);

// Факторіал
// 5! = 5 * 4 * 3 * 2 * 1
let result = 1;

for (let i = 1; i <= 5; i++) {
  result *= i;
}

console.log(result);
