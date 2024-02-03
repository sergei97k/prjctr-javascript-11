"use strict";

let tecnhologies = ["HTML", "CSS", "JavaScript"];
console.log(tecnhologies);
console.log(tecnhologies[0]); // HTML
console.log(tecnhologies[2]); // JavaScript

tecnhologies[5] = "React";
console.log(tecnhologies);
console.log(tecnhologies[4]);

let array = ["HTML", 22, null, true];
console.log(array);

console.log(tecnhologies.length); // 3
tecnhologies.length = 1;
console.log(tecnhologies);

let tecnhologies = ["HTML", "CSS", "JavaScript"];

// for
for (let i = 0; i < tecnhologies.length; i++) {
  console.log(tecnhologies[i].toUpperCase());
}

// while
let i = 0;
while (i < tecnhologies.length) {
  console.log(tecnhologies[i]);
  i++;
}

// for .. of
for (let technology of tecnhologies) {
  console.log(technology);
}
let cats = ["Barsik", "Tom", "Murka"];
for (let cat of cats) {
  console.log(cat);
}

// Знайти середнє арифметичне цих значень
// (1 + 4 + 6 + 8 + 10) / 5 = 5.8
let numbers = [1, 4, 6, 8, 10];
let sum = 0;

for (let number of numbers) {
  sum += number;
  // sum = sum + number
  // 0 | 0 + 1 = 1
  // 1 | 1 + 4 = 5
  // 2 | 5 + 6 = 11
  // 3 | 11 + 8 = 19
}

let average = sum / numbers.length;
console.log(sum); // 29
console.log("average: ", average);

let numbers = [12, 3, 25, 16, 8, 91, 90];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

for (let number of numbers) {
  if (number % 2 == 1) {
    console.log(number);
  }
}

let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
  i++;
}

// Методи масивів
let tecnhologies = ["HTML", "CSS", "JavaScript"];

let lastTechnology = tecnhologies.pop();
console.log(tecnhologies); // ?
console.log(lastTechnology);

tecnhologies.push("React");
tecnhologies.push("Node.js");
console.log(tecnhologies);

tecnhologies.shift();
console.log(tecnhologies);

tecnhologies.unshift("React");
console.log(tecnhologies);

let numbers = [12, 3, 25, 16, 8, 91, 90];
let oddNumbers = [];
let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 === 1) {
    // Додати до масиву oddNumbers
    oddNumbers.push(number);
  } else {
    evenNumbers.push(number);
  }
}

console.log("oddNumbers", oddNumbers);
console.log("evenNumbers", evenNumbers);
let allNumbers = oddNumbers.concat(evenNumbers);
console.log("allNumbers", allNumbers);

let tecnhologies = ["HTML", "CSS", "JavaScript"];

console.log(typeof tecnhologies);
console.log(Array.isArray(tecnhologies));
console.log(Array.isArray("tecnhologies"));

let array = [1, 2, [4, 6, [8, 10]]];
let flattedArray = array.flat(Infinity);
console.log(flattedArray);

let elements = ["Fire", "Air", "Water"];
console.log(elements.join());
console.log(elements.join("-"));
console.log(elements.join(""));
console.log(elements.join(" "));

let text = "How are you";
let array = text.split(" ");
console.log(array);
console.log(text.split(""));
console.log(text.split());

let tecnhologies = ["HTML", "CSS", "JavaScript"];
tecnhologies.splice(0, 2);
console.log(tecnhologies); // ["JavaScript"]

tecnhologies.splice(2, 0, "React", "Node.js");
console.log(tecnhologies);

tecnhologies.splice(2, 1, "React");
console.log(tecnhologies);

let tecnhologies = ["HTML", "CSS", "JavaScript"];
let newTechologies = tecnhologies.slice(1, 3);
console.log("tecnhologies", tecnhologies);
console.log("newTechologies", newTechologies);
console.log("all elements", tecnhologies.slice());

let numbers = [10, 2, 20, 1, 9, 0, 5];
console.log(numbers.includes(2)); // true
console.log(numbers.includes(22)); // false

let reversedNumbers = numbers.slice().reverse();

console.log("numbers", numbers);
console.log("reversedNumbers", reversedNumbers);

const tecnhologies = ["HTML", "CSS", "JavaScript"];
tecnhologies.push("React");
console.log(tecnhologies);
