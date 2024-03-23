"use strict";

// DOM variables
const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const bookList = document.getElementById("book-list");

// classes
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList({ title, author, isbn }) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${title}</span>
        <span>${author}</span>
        <span>${isbn}</span>
        <button class="delete">Delete</button>
    `;

    bookList.append(li);

    this.clearFields();
    this.showAlert("Book added", "success");
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.closest("li").remove();
    }

    this.showAlert("Book removed", "success");
  }

  clearFields() {
    title.value = "";
    author.value = "";
    isbn.value = "";
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.append(message);

    const form = document.querySelector("#book-form");
    document.body.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

// functions
const handleSubmit = (event) => {
  event.preventDefault();

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  const ui = new UI();

  if (titleValue === "" || authorValue === "" || isbnValue === "") {
    ui.showAlert("Fill the form", "error");
    return;
  }

  const book = new Book(titleValue, authorValue, isbnValue);
  ui.addBookToList(book);
};

const handleRemove = (event) => {
  event.preventDefault();

  const ui = new UI();
  ui.deleteBook(event.target);
};

// Event listeners
bookForm.addEventListener("submit", handleSubmit);

bookList.addEventListener("click", handleRemove);
