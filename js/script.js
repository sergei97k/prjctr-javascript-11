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
  addBookToList({ title, author, isbn }, shouldShowAlert = true) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${title}</span>
        <span>${author}</span>
        <span>${isbn}</span>
        <button class="delete">Delete</button>
    `;

    bookList.append(li);

    if (shouldShowAlert) {
      this.clearFields();
      this.showAlert("Book added", "success");
    }
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.closest("li").remove();
    }

    this.showAlert("Book removed", "success");
  }

  displayBooks(books) {
    books.forEach((book) => this.addBookToList(book, false));
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

class Storage {
  #storageKey = "books";

  getBooks() {
    let books;

    if (localStorage.getItem(this.#storageKey) === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem(this.#storageKey));
    }

    return books;
  }

  addBook(book) {
    const books = this.getBooks();
    books.push(book);

    localStorage.setItem(this.#storageKey, JSON.stringify(books));
  }

  removeBook(index) {
    const books = this.getBooks();
    books.splice(index, 1);

    localStorage.setItem(this.#storageKey, JSON.stringify(books));
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

  const storage = new Storage();
  storage.addBook(book);
};

const handleRemove = (event) => {
  event.preventDefault();

  const index = [...bookList.children].findIndex(
    (book) => book === event.target
  );

  const ui = new UI();
  ui.deleteBook(event.target);

  const storage = new Storage();
  storage.removeBook(index);
};

const initBooks = () => {
  const ui = new UI();
  const storage = new Storage();
  const books = storage.getBooks();
  ui.displayBooks(books);
};

// Event listeners
initBooks();

bookForm.addEventListener("submit", handleSubmit);

bookList.addEventListener("click", handleRemove);
