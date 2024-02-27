"use strict";

// Декоратор
function greet(name) {
  return `Hello, ${name}`;
}

function add(a, b) {
  return a + b;
}

function logger(func) {
  return function (...args) {
    // const result = func.apply(this, args);
    const result = func(...args);
    console.log(`Function called with arguments: ${args}. Result: ${result}`);

    return result;
  };
}

// console.log(greet("Bob"));
const decoratedGreet = logger(greet);
console.log(decoratedGreet("Bob")); // Hello Bob
console.log(decoratedGreet("Mike"));

const decoratedAdd = logger(add);
console.log(decoratedAdd(3, 4));

// ---
// Curry

function sum(a, b, c) {
  return a + b + c;
}

function curry(func) {
  return function curried(...args) {
    if (func.length === args.length) {
      return func(...args);
    }

    return function (...args2) {
      console.log("current arguments: ", args);
      console.log("next arguments: ", args2);
      return curried(...args, ...args2);
    };
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1, 2, 3)); // 6
