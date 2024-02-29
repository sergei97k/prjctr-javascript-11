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

// let user = {
//   name: "Bob",
//   email: "test@test.com",
// };

// localStorage.setItem("user", JSON.stringify(user));

// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser);
// console.log(typeof storedUser);

// DOM
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.children);

let header = document.getElementById("header");
console.log("header", header);

let titles = document.getElementsByClassName("title");
console.log("titles", titles);

let titleInsideDiv = document.querySelector("div .title");
console.log(titleInsideDiv);

let elements1 = document.getElementsByTagName("li");
console.log(elements1);

let elements2 = document.querySelectorAll(".links li");
console.log(elements2);

let section = document.querySelector("section");
let sectionTitle = section.querySelector(".title");

// closest
let grandchild = document.querySelector(".grandchild");
let parentDiv = grandchild.closest(".parent");
console.log(parentDiv);

// Маніпуляції з DOM

const list = document.querySelector(".links");
const listLength = list.children.length;
console.log("listLength", listLength);

const listItem = document.createElement("li");
// listItem.textContent = `Пункт ${listLength + 1}`;
listItem.innerHTML = "<span>Пункт з HTML</span>";

list.append(listItem);

// console.log(list.textContent);

// setTimeout(() => {
//   list.remove();
// }, 5000);

// Класи/стили
const menu = document.querySelector(".menu");
// console.log(menu.className);

// menu.className = "mobile__menu";
// menu.className += " mobile__menu";

menu.classList.add("mobile__menu");
// menu.classList.remove("menu");
console.log(menu.classList);

menu.style.backgroundColor = "#eee";
menu.style.fontSize = "24px";

setTimeout(() => {
  const firstMenuItem = menu.querySelector("li");
  firstMenuItem.classList.add("active");
}, 3000);

// Пошук параграфів
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  paragraph.textContent = "Hello, this is JavaScript!";
});

console.log("paragpaphs", paragraphs);
console.log("array", [...paragraphs]);
