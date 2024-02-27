"use strict";

// // Декоратор
// function greet(name) {
//   return `Hello, ${name}`;
// }

// function add(a, b) {
//   return a + b;
// }

// function logger(func) {
//   return function (...args) {
//     // const result = func.apply(this, args);
//     const result = func(...args);
//     console.log(`Function called with arguments: ${args}. Result: ${result}`);

//     return result;
//   };
// }

// // console.log(greet("Bob"));
// const decoratedGreet = logger(greet);
// console.log(decoratedGreet("Bob")); // Hello Bob
// console.log(decoratedGreet("Mike"));

// const decoratedAdd = logger(add);
// console.log(decoratedAdd(3, 4));

// // ---
// // Curry

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(func) {
//   return function curried(...args) {
//     if (func.length === args.length) {
//       return func(...args);
//     }

//     return function (...args2) {
//       console.log("current arguments: ", args);
//       console.log("next arguments: ", args2);
//       return curried(...args, ...args2);
//     };
//   };
// }

// const curriedSum = curry(sum);

// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1, 2, 3)); // 6

// Parsing function
const staffData = {
  firstName: "John",
  secondName: "Smith",
  age: 42,
  gender: "male",
  role: "CEO",
  yearsOfExperience: 22,
  inCompanySince: "03 Aug 2005",
  subordinators: [
    {
      firstName: "Jane",
      secondName: "Clark",
      age: 34,
      gender: "female",
      role: "Chief HR officer",
      yearsOfExperience: 12,
      inCompanySince: "12 May 2017",
      subordinators: [
        {
          firstName: "Ferenz",
          secondName: "Derd",
          age: 27,
          gender: "male",
          role: "Senior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "15 Oct 2019",
          subordinators: [
            {
              firstName: "Gregor",
              secondName: "Bur",
              age: 26,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 7,
              inCompanySince: "22 Apr 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
                {
                  firstName: "Peri",
                  secondName: "Hafar",
                  age: 22,
                  gender: "female",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "18 Dec 2021",
                  subordinators: null,
                },
              ],
            },
          ],
        },
        {
          firstName: "Syenn",
          secondName: "Gungvind",
          age: 38,
          gender: "female",
          role: "Senior HR manager",
          yearsOfExperience: 15,
          inCompanySince: "12 May 2012",
          subordinators: [
            {
              firstName: "Enos",
              secondName: "Zey",
              age: 30,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 5,
              inCompanySince: "18 Dec 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
              ],
            },
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Enos",
          secondName: "Zey",
          age: 30,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 5,
          inCompanySince: "18 Dec 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Gregor",
          secondName: "Bur",
          age: 26,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 7,
          inCompanySince: "22 Apr 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Caleb",
          secondName: "Ottvik",
          age: 24,
          gender: "male",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "04 Jun 2020",
          subordinators: null,
        },
        {
          firstName: "Peri",
          secondName: "Hafar",
          age: 22,
          gender: "female",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "18 Dec 2021",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Olga",
      secondName: "Petrenko",
      age: 31,
      gender: "female",
      role: "CTO",
      yearsOfExperience: 12,
      inCompanySince: "15 Apr 2019",
      subordinators: [
        {
          firstName: "Peter",
          secondName: "Barton",
          age: 29,
          gender: "male",
          role: "JS competence manager",
          yearsOfExperience: 11,
          inCompanySince: "01 Feb 2020",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Jack",
      secondName: "Black",
      age: 45,
      gender: "male",
      role: "Office manager",
      yearsOfExperience: 20,
      inCompanySince: "24 Apr 2016",
      subordinators: null,
    },
  ],
};

// 1.
function flatStaff(worker, workers) {
  workers.push(worker);

  // Базіс рекурсія
  if (worker.subordinators === null) {
    return;
  }

  worker.subordinators.forEach((subordinator) => {
    flatStaff(subordinator, workers);
  });
}

// 2.
function filterUniqueWorkers(workers) {
  // 1.
  // let uniqueWorkers = [];

  // workers.forEach((worker) => {
  //   const foundedWorker = uniqueWorkers.find(
  //     (uniqueWorker) =>
  //       uniqueWorker.firstName === worker.firstName &&
  //       uniqueWorker.secondName === worker.secondName
  //   );

  //   if (!foundedWorker) {
  //     uniqueWorkers.push(worker);
  //   }
  // });

  // return uniqueWorkers;

  // 2. Map
  // [["key", "value"]]
  const initialMapData = workers.map((worker) => {
    const key = `${worker.firstName} ${worker.secondName}`;
    const value = worker;
    return [key, value];
  });

  // console.log("initialMapData", initialMapData);
  const workerMap = new Map(initialMapData);
  // console.log("workerMap: ", workerMap);

  return [...workerMap.values()];
}

// 3.
function convertMillisecondsToYears(milliseconds) {
  const MILLISECONDS_PER_YEAR = 31536000000; // Кількість мілісекунд у році
  return Math.floor(milliseconds / MILLISECONDS_PER_YEAR);
}

function showWorkersDescription(workers) {
  workers.forEach(
    ({ firstName, secondName, role, yearsOfExperience, inCompanySince }) => {
      // "Jane Clark is a Chief HR officer, has 12 years of experience and works 5 years in the company"

      const yearName = yearsOfExperience > 1 ? "years" : "year";

      const inCompanySinceTimestamp = Date.parse(inCompanySince);
      const differenceBetweenDates = Date.now() - inCompanySinceTimestamp;
      const workDuration = convertMillisecondsToYears(differenceBetweenDates);
      const workDurationName = workDuration > 1 ? "years" : "year";

      console.log(
        `${firstName} ${secondName} is a ${role}, has ${yearsOfExperience} ${yearName} of experience and works ${workDuration} ${workDurationName} in the company.`
      );
    }
  );
}

// 4.
function byProperty(property) {
  return (a, b) => (a[property] < b[property] ? 1 : -1);
}

function parseStaff(data, property = "yearsOfExperience") {
  // 1. Отримати усіх працівників у вигляді масиві
  let workers = [];
  flatStaff(data, workers);
  console.log("workers: ", workers);

  // 2. Відфільтрувати унікальних працівників
  const uniqueWorkers = filterUniqueWorkers(workers);
  console.log("uniqueWorkers: ", uniqueWorkers);

  // 4. Додаємо аргумент для сортування та сортуємо за цим аргументом
  const sortedWorkers = [...uniqueWorkers].sort(byProperty(property));
  console.log("sortedWorkers: ", sortedWorkers);

  // 3. Вивести опис про кожного працівника
  showWorkersDescription(sortedWorkers);
}

console.log("1");
parseStaff(staffData);
console.log("------------");
console.log("2");
parseStaff(staffData, "age");
