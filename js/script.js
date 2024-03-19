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
