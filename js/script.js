"use strict";

// function greet() {
//   console.log("Hello!");
// }

// let person = {
//   name: "John",
//   age: 30,
//   greet: greet,
//   salary: 3000,
// };

// let newPerson = {
//   name: "Bob",
//   age: 33,
//   greet: greet,
//   salary: 1000,
// };

// let newPerson2 = {
//   name: "Mike",
//   age: 13,
//   greet: greet,
//   salary: 1000,
// };

class Person {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  greet() {
    console.log("Hello!", this.name);
  }

  get fullInfo() {
    return `${this.name}, ${this.age}. Salary: ${this.salary}`;
  }

  set fullInfo(newName) {
    this.name = newName;
  }

  static isValidName(name) {
    return typeof name === "string" && name.trim().length > 0;
  }
}

// let person = new Person("John", 30, 3000);
// let newPerson = new Person("Bob", 33, 1000);
// let newPerson2 = new Person("Mike", 13, 1000);
// person.greet();
// console.log(person.fullInfo);
// console.log(person);

// person.fullInfo = "John2";
// console.log(person);

let name = "Bob";

if (Person.isValidName(name)) {
  let person = new Person(name, 20, 2000);
  console.log(person);
}

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.sleepTime = 20;
  }

  meow() {
    console.log(`${this.name} м'явкає!`);
  }

  changeColor(newColor) {
    this.color = newColor;
    console.log(`${this.name} має новий колір ${newColor}!`);
  }

  jump() {
    this.sleepTime -= 1;
  }
}

const cat1 = new Cat("Родзинка", 2, "білий");
const cat2 = new Cat("Паштет", 5, "сірий");
console.log(cat1);
console.log(cat2);

cat1.meow();
cat2.meow();
// cat2.changeColor("червоний");
// cat2.color = "червоний";
cat2.jump();
cat2.jump();
console.log(cat2);

// Створіть клас ShoppingCart, який представляє кошик для покупок.
// Клас повинен мати методи для додавання товару до кошика, видалення товару та
// підрахунку загальної вартості товарів у кошику.
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, quantity, price) {
    this.items.push({ name, quantity, price });
  }

  removeItem(name) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  get totalPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem("Джинси", 2, 800);
shoppingCart.addItem("Футболка", 2, 300);
console.log(shoppingCart.totalPrice);
// --
shoppingCart.addItem("Шкарпетки", 1, 150);
shoppingCart.removeItem("Футболка");

console.log(shoppingCart);
console.log(shoppingCart.totalPrice);
