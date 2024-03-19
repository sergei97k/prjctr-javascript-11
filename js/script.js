"use strict";

// DOM variables
const value = document.querySelector(".input");
const result = document.querySelector(".result");
const buttonClear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

const OPERATORS = ["+", "-", "×", "÷"];

// Functions
const handleOperatorClick = (event) => {
  const currentOperator = event.target.textContent;
  const currentValue = value.textContent;

  // Не можна ввести оператор першим символом
  if (currentValue.length === 0) {
    return;
  }

  // Не можна ввести інший оператор після оператору
  const lastIndex = currentValue.length - 1;
  const lastChar = currentValue[lastIndex];

  if (OPERATORS.includes(lastChar)) {
    // Замінюємо знак на новий
    const newString = currentValue.slice(0, lastIndex);
    const result = `${newString}${currentOperator}`;

    value.textContent = result;
    return;
  }

  value.textContent += currentOperator;
};

const handleNumberClick = (event) => {
  const currentNumber = event.target.textContent;
  const currentValue = value.textContent;

  // Ігноруємо більше однієї крапки
  // if (currentNumber === "." && currentValue.endsWith(".")) {
  //   return;
  // }
  if (currentNumber === "." && currentValue[currentValue.length - 1] === ".") {
    return;
  }

  value.textContent += currentNumber;
};

const handleClear = () => {
  value.textContent = "";
};

const handleResult = () => {
  const currentValue = value.textContent;
  const lastIndex = currentValue.length - 1;
  const lastChar = currentValue[lastIndex];

  if (OPERATORS.includes(lastChar) || lastChar === ".") {
    return;
  }

  // Отримуємо масив всіх введених чисел
  const numbersResult = currentValue
    .split(/\+|\-|\×|\÷/g)
    .map((value) => +value);
  console.log(numbersResult);

  // Отримуємо масив всіх операторів "+-+-"
  const operatorsResult = currentValue.replace(/\d+|\./g, "").split("");
  console.log(operatorsResult);

  // 5x2x3
  // numbers = [5, 2, 3]
  // operators = [x, x]
  let mupltiplyIndex = operatorsResult.indexOf("×");

  while (mupltiplyIndex !== -1) {
    // Отримуємо результат операції
    const tempResult =
      numbersResult[mupltiplyIndex] * numbersResult[mupltiplyIndex + 1];

    // Видаляємо оператор, який вже виконав математичну операцію
    operatorsResult.splice(mupltiplyIndex, 1); // [x, x] => [x]

    // Отриманий результат замінити у масиві numbers
    numbersResult.splice(mupltiplyIndex, 2, tempResult); // [5, 2, 3] => [10, 3]

    // console.log("numbers", numbersResult);
    // console.log("operators", operatorsResult);

    // Знаходимо наступний оператор
    mupltiplyIndex = operatorsResult.indexOf("×");
  }

  let divideIndex = operatorsResult.indexOf("÷");
  while (divideIndex !== -1) {
    const tempResult =
      numbersResult[divideIndex] / numbersResult[divideIndex + 1];
    operatorsResult.splice(divideIndex, 1);
    numbersResult.splice(divideIndex, 2, tempResult);
    divideIndex = operatorsResult.indexOf("÷");
  }

  let substractIndex = operatorsResult.indexOf("-");
  while (substractIndex !== -1) {
    const tempResult =
      numbersResult[substractIndex] - numbersResult[substractIndex + 1];
    operatorsResult.splice(substractIndex, 1);
    numbersResult.splice(substractIndex, 2, tempResult);
    substractIndex = operatorsResult.indexOf("-");
  }

  let sumIndex = operatorsResult.indexOf("+");
  while (sumIndex !== -1) {
    const tempResult = numbersResult[sumIndex] + numbersResult[sumIndex + 1];
    operatorsResult.splice(sumIndex, 1);
    numbersResult.splice(sumIndex, 2, tempResult);
    sumIndex = operatorsResult.indexOf("+");
  }

  value.textContent = numbersResult[0];
};

// Event listeners
// Обробка події оператів
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});

// Обробка події чисел
numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});

buttonClear.addEventListener("click", handleClear);

result.addEventListener("click", handleResult);

// Регулярні вирази
// let string = "The quick brown fox jumps over the lazy dog.";
// let regExp = /fox/;
// console.log(regExp.test(string)); // true

//
// let string = "Hello World!";
// let newString = string.replace("World", "Ukraine");
// console.log(newString);

// let string = "Today is 15th March, 2024.";
// console.log(string.replace(/\d+/, "XX")); // "Today is XXth March, 2024."
// console.log(string.replace(/\d+/g, "XX")); // "Today is XXth March, XX."

// //

// let resultMult = "2*3*4";
// console.log(resultMult.split(/\*/g)); // ['2', '3', '4']
