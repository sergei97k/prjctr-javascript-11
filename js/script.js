"use strict";

// DOM variables
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

// classes
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${book.title}</span>
      <span>${book.author}</span>
      <span>${book.isbn}</span>
      <button class="delete">Delete</button>
    `;

    bookList.append(li);

    this.clearFields();
    this.showAlert("Book added");
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.closest("li").remove();

      this.showAlert("Book deleted");
    }
  }

  clearFields() {
    bookForm.reset();
  }

  showAlert(message, mode = "success") {
    const div = document.createElement("div");
    div.className = `alert ${mode}`;
    div.textContent = message;

    document.body.insertBefore(div, bookForm);

    setTimeout(() => {
      document.querySelector(".alert").remove();
      // div.remove();
    }, 3000);
  }
}

// class using
const ui = new UI();

// functions
const handleSubmit = (event) => {
  event.preventDefault();

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  if (titleValue === "" || authorValue === "" || isbnValue === "") {
    ui.showAlert("Please fill the form", "error");
    return;
  }

  const book = new Book(titleValue, authorValue, isbnValue);
  ui.addBookToList(book);
  // ui.clearFields();
};

const handleRemove = (event) => {
  ui.deleteBook(event.target);
};

// Event listeners
bookForm.addEventListener("submit", handleSubmit);

bookList.addEventListener("click", handleRemove);
