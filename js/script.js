"use strict";

// Зберігання значення
// localStorage.setItem("username", "Ivan");

// setTimeout(() => {
//   localStorage.setItem("username", "Bob");
// }, 5000);

// Отримання значення
// let username = localStorage.getItem("username");
// console.log(username);

// setTimeout(() => {
//   localStorage.removeItem("username");
// }, 5000);

// let username = localStorage.getItem("username");
// if (username) {
//   console.log("username from storage", username);
// } else {
//   localStorage.setItem("username", "Bob");
// }

// localStorage.setItem("number", 5);

// console.log(localStorage.getItem("number"));

let user = {
  name: "Bob",
  email: "test@test.com",
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
console.log(typeof storedUser);
