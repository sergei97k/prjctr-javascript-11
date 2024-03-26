"use strict";

// DOM variables
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const genre = document.getElementById("genre");

// classes
class Book {
  constructor(title, author, isbn, genre) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.genre = genre;
  }
}

class UI {
  addBookToList({ title, author, isbn, genre }) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${title}</span>
      <span>${author}</span>
      <span>${isbn}</span>
      <span>${genre}</span>
      <button class="delete">Delete</button>
    `;

    bookList.append(li);
  }

  deleteBook(target) {
    target.closest("li").remove();
    this.showAlert("Book deleted");
  }

  displayBooks(books) {
    books.forEach((book) => this.addBookToList(book));
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

class Storage {
  #storageKey = "books";

  getBooks() {
    const storageData = localStorage.getItem(this.#storageKey);

    if (storageData === null) {
      return [];
    }

    return JSON.parse(storageData);
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

// class using
const ui = new UI();
const storage = new Storage();

const initBooks = () => {
  const books = storage.getBooks();
  ui.displayBooks(books);
};

// init
initBooks();

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

  const book = new Book(titleValue, authorValue, isbnValue, genre.value);
  ui.addBookToList(book);
  ui.clearFields();
  ui.showAlert("Book added");

  storage.addBook(book);
};

const handleRemove = (event) => {
  if (event.target.className === "delete") {
    const removedLi = event.target.closest("li");
    const children = [...bookList.children];
    const index = children.findIndex((li) => li === removedLi);

    ui.deleteBook(event.target);
    storage.removeBook(index);
  }
};

// Event listeners
bookForm.addEventListener("submit", handleSubmit);

bookList.addEventListener("click", handleRemove);
