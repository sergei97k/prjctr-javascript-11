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
  // li.textContent = value; // Значення яке ввів користувач
  li.innerHTML = `${value} <i class="fa fa-remove delete-item"></i>`;
  taskList.append(li);

  // Очистити форму
  // 1 - скидає значення у input'a taskInput
  taskInput.value = "";
  // 2 - скидає всі значення форми
  // form.reset();

  // Фокусуємось на input
  taskInput.focus();
};

const clearTasks = () => {
  taskList.innerHTML = "";
};

const removeTask = (event) => {
  const isDeleteButton = event.target.classList.contains("delete-item");
  if (!isDeleteButton) {
    return;
  }

  const isConfirmed = confirm("Ви впевнені що хочете видалити це завдання?");
  if (!isConfirmed) {
    return;
  }

  const li = event.target.closest("li");
  li.remove();
};

const filterTasks = ({ target: { value } }) => {
  const text = value.toLowerCase();
  const list = taskList.querySelectorAll("li"); // []

  list.forEach((li) => {
    const liText = li.textContent.trim().toLowerCase();

    // if (liText.includes(text)) {
    //   li.hidden = false;
    // } else {
    //   li.hidden = true;
    // }
    li.hidden = !liText.includes(text);
  });
};

// Event listeners
// onsubmit
form.addEventListener("submit", addTask);

clearButton.addEventListener("click", clearTasks);

taskList.addEventListener("click", removeTask);

filterInput.addEventListener("input", filterTasks);
