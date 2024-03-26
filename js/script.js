"use strict";

// DOM variables
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

// functions
const handleSubmit = (event) => {
  event.preventDefault();

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  if (titleValue === "" || authorValue === "" || isbnValue === "") {
    return;
  }

  console.log(titleValue, authorValue, isbnValue);
};

// Event listeners
bookForm.addEventListener("submit", handleSubmit);
