"use strict";

const link = document.querySelector("a");
const hrefAttribute = link.getAttribute("href");
console.log("hrefAttribute", hrefAttribute);
console.log("href", link.href);

console.log(link.attributes);
console.log(link.attributes.href);

link.setAttribute("class", "link");

//

const progressBar = document.querySelector(".progress");
console.log(progressBar.dataset);
console.log(progressBar.dataset.value);

console.log("nodeName: ", progressBar.nodeName);
console.log("tagName: ", progressBar.tagName);

//

const outerDiv = document.getElementById("outer");
console.log(outerDiv.outerHTML);
console.log(outerDiv.innerHTML);

outerDiv.outerHTML = "<section>HELLO</section>";

// hidden
const box = document.querySelector(".box");
box.hidden = true;

// // disabled
// const button = document.querySelector("button");

// button.disabled = true;
// button.setAttribute("disabled", "");

// ---
// Events
// const button = document.getElementById("my-button");

// button.onclick = function () {
//   console.log("BUTTON CLICKED");
// };

// button.addEventListener("click", function () {
//   console.log("BUTTON CLICKED V2");
// });

// button.addEventListener("click", function () {
//   console.log("BUTTON CLICKED V3");
// });

// Counter
const counter = document.querySelector(".counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.onclick = function () {
  const currentValue = +counter.textContent;
  const newValue = currentValue + 1;

  counter.textContent = newValue;

  if (newValue === 1) {
    minusButton.disabled = false;
  }
};

minusButton.onclick = function () {
  const currentValue = +counter.textContent;
  const newValue = currentValue - 1;

  counter.textContent = newValue;

  if (newValue === 0) {
    minusButton.disabled = true;
  }
};
// ---

const button = document.getElementById("my-button");

button.addEventListener("click", function (event) {
  console.log("Event object: ", event);
});

const countrySelect = document.getElementById("country-select");

countrySelect.addEventListener("change", (event) => {
  console.log(event.target.value);
});

link.addEventListener("click", (event) => {
  event.preventDefault();
});

// Event bubbling
const form = document.querySelector(".form");
const div = document.querySelector(".form div");
const p = document.querySelector(".form p");

form.onclick = () => {
  console.log("form");
};

div.onclick = () => {
  console.log("div");
};

p.onclick = (event) => {
  console.log("p");
  event.stopPropagation();
};

// p.addEventListener("click", (event) => {
//   console.log("p");
//   event.stopPropagation();
// });

// Delegation
const list = document.querySelector(".list");

list.addEventListener("click", (event) => {
  console.log(event.target);

  if (event.target.tagName === "LI") {
    event.target.classList.toggle("active");
  }
});

// Change
const date = document.querySelector("#date");

date.addEventListener("change", (event) => {
  console.log("new date: ", event.target.value);
});

// Function
const handleClick = () => {
  console.log("click");
};

// Знайшли DOM елемент
const newButton = document.querySelector("button");

// Додали обробник події
newButton.addEventListener("click", handleClick);

// Створіть 2 кнопкі: “Turn light” та “Turn dark”.
// При натискані на кнопку “Turn light” колір бекграунда сторінки повинен
// змінитися на білий, при натискані на кнопку “Turn dark” - на темносиній.
const lightButton = document.getElementById("light-button");
const darkButton = document.getElementById("dark-button");

lightButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
});

darkButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "darkblue";
});
