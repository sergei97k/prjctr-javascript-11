"use strict";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filterInput = document.querySelector(".filter-input");

// "tasks" functions
const addTask = (event) => {
  event.preventDefault();

  // Перевірка на пусте значення
  const value = taskInput.value.trim();
  if (value === "") {
    return;
  }

  // Create and add LI element
  const li = document.createElement("li");
  li.textContent = value; // Значення яке ввів користувач
  taskList.append(li);

  // Очистити форму
  // 1 - скидає значення у input'a taskInput
  taskInput.value = "";
  // 2 - скидає всі значення форми
  // form.reset();

  // Фокусуємось на input
  taskInput.focus();
};

// Event listeners
// onsubmit
form.addEventListener("submit", addTask);
