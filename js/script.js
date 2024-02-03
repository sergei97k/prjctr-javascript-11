"use strict";

let user = {
  name: "John",
  age: 22,
};

console.log(user);
console.log(user.name); // John
console.log(user["name"]); // John

user.name = "Mike";
user.isAdmin = true;
console.log(user);

let user = {
  name: "John",
  age: 22,
  22: 2000,
};

delete user.age;
console.log(user);
console.log("email" in user);
console.log("name" in user);

console.log(user["name"]); // John
console.log(user["22"]); // 2000

let user = {
  name: "Mike",
  age: 20,
  salary: 500,
  isAdmin: false,
};

for (let key in user) {
  console.log("key: ", key);
  console.log("value: ", user[key]);
  // key = "name" -> user['name']
  // key = "age" -> user['age']
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let person = {
  name: "John Johnson",
  salary: 1000,
  address: {
    street: "Shevchenko str.",
    name: "Lviv",
    number: 42,
    postcode: {
      mainNumber: 1,
    },
  },
};

console.log(person.address?.street);
console.log(person.address?.postcode?.mainNumber);

let person2 = {
  name: "Boris Johnson",
  salary: 900,
};

// console.log(person2.address); // undefined
// console.log(person2.address.street); // undefined.street
console.log(person2.address?.street);

let name = "John";
name = "Bob";
let newUser = {
  // name: name,
  name,
};

console.log(newUser);

let fruit = "cherry";
let bag = {
  [fruit]: 30, // apple: 30
};

console.log(bag);

let contact = {
  firstName: "Oleksii",
  lastName: "II",
  phoneNumber: "38096435283",
};

contact.email = "myemail@com.ua";
delete contact.phoneNumber;
console.log("lastName" in contact);
console.log(Object.keys(contact));

let student = {
  name: "Lida",
  age: 16,
  specialization: "programmer",
};

student.hobby = "music";
delete student.age;
console.log("specialization" in student);
console.log(Object.keys(student));

let book = {
  title: "Буквар",
  author: "Невідомий",
  year: 2024,
};
book.genre = "Навчальна";
delete book.year;
console.log("author" in book);
console.log(Object.keys(book));

// ---
// Особливості роботи з об'єктами
let user = {
  name: "John",
};

// copy
// let admin = user;

// copy with for .. in
// let admin = {};

// for (let key in user) {
//   admin[key] = user[key];
// }

// copy with Object.assign
let admin = Object.assign({}, user);

admin.name = "Mike";
console.log("user", user); // ?
console.log("admin", admin); // ?

let person = {
  name: "John Johnson",
  salary: 1000,
  address: {
    street: "Shevchenko str.",
    name: "Lviv",
    number: 42,
    postcode: {
      mainNumber: 1,
    },
  },
};

let clonedPerson = Object.assign({}, person);
let clonedPerson = structuredClone(person);
clonedPerson.salary = 2000;
clonedPerson.address.street = "Maidan square";
console.log("person", person);
console.log("clonedPerson", clonedPerson);

let user1 = {
  name: "John",
  age: 20,
};
let user2 = {
  name: "John",
  age: 20,
};

console.log(user1 === user2); // false

// Поверхневе порівняння - приклад вирішення
let objA = { name: "John" };
let objB = { name: "John" };
let isEqualObject = true;

const keysA = Object.keys(objA); // ['name', 'age']
const keysB = Object.keys(objB);

if (keysA.length !== keysB.length) {
  isEqualObject = false;
} else {
  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      isEqualObject = false;
    }
  }
}

console.log(isEqualObject);

let user = {
  name: "John",
};

let freezeUser = Object.freeze(user);
let clonedFreezeUser = structuredClone(freezeUser);
clonedFreezeUser.name = "Mike";
console.log("freezeUser", freezeUser);
console.log("clonedFreezeUser", clonedFreezeUser);

// ---
// Symbol
let id = Symbol("My symbol");
console.log(id);

let object = {
  value: "Hello World",
  [id]: "my secret value",
};
console.log(object);

console.log(object[id]);

let anotherId = Symbol("My symbol");
console.log(object[anotherId]);

console.log(Object.keys(object));
