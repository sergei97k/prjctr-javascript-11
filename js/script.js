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
    `;

    bookList.append(li);

    this.clearFields();
    this.showAlert("Book added");
  }

  clearFields() {
    bookForm.reset();
  }

  showAlert(message) {
    const div = document.createElement("div");
    div.className = "alert success";
    div.textContent = message;

    document.body.insertBefore(div, bookForm);

    setTimeout(() => {
      document.querySelector(".alert").remove();
      // div.remove();
    }, 3000);
  }
}

// functions
const handleSubmit = (event) => {
  event.preventDefault();

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  if (titleValue === "" || authorValue === "" || isbnValue === "") {
    return;
  }

  const book = new Book(titleValue, authorValue, isbnValue);
  const ui = new UI();
  ui.addBookToList(book);
  // ui.clearFields();
};

// Event listeners
bookForm.addEventListener("submit", handleSubmit);
