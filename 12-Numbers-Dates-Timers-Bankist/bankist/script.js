"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
//data2
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  //dummy copy
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  //dummy copy
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//slice
console.log(movements.slice()); //gives shallow copy of existing array
console.log(movements.slice(1, -1));
console.log(movements.slice(-1));
//returns an array IMP also it don't modify or mutate the original array

//splice it mutates original array removing the part mentioned in it from the original array
console.log(movements.splice(-1)); //just remove last elment from original array
//splice (start index, count number of elements which we want to delete)
//splice(start, count, items to add inplace)
// console.log(movements);
// console.log(movements.splice(1, 4));
// console.log(movements);
// console.log(movements.splice(1)); //if only 1 arguemt is given then
// console.log(movements);
console.log(movements);
console.log(movements.splice(0, Infinity, "item1", "item2"));
console.log(movements);
console.log(movements.splice());
console.log(movements);
console.log(movements.splice(0, 0, "replace"));
// console.log(movements.splice(undefined));
console.log(movements);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const arr = ["a", "b", "c", "d", "e"];
//reverse
arr.reverse(); //it returns a new array IMP mutating the original array
console.log(arr);
//concat - doesn't mutate original array
console.log(arr.concat(movements));

//join method takes an array and joins it using separtor and return a string
console.log(movements.join("-"));
console.log(movements);

//ES2022 - .at() method like indexing
console.log(movements[0]);
console.log(movements.at(0));

//getting last element got much more easier with at() method
console.log(movements[movements.length - 1]);
console.log(movements.slice(-1)[0]);
console.log(movements.at(-1));

//forEach method is a higher order method that takes in callback function and calls the callback funtion for each iteration over the array elements
//IMP forEach don't suppost break and countinue statements it will iterate over entire array so use for...of incase we want to break or continue
//IMP arguments passed are
// arr.forEach(currentElement, index, arr)
// map.forEach(value, key, map);
// set.forEach(value, _ , set); //as sets neither have key nor index so 2nd index is just set to value as first index so not that useful

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (move, index, arr) {
  move > 0
    ? console.log(`movement ${index}: deposited ${move}`)
    : console.log(`movement ${index}: withdrawl of ${move}`);
});

const maps = new Map([
  ["usd", "united states dollar"],
  ["eur", "europe"],
  ["rs", "rupees india"],
]);
maps.forEach(function (vals, key, map) {
  console.log(`${key}: ${vals}`);
});

const sets = new Set(["usd", "rs", "euro", "rs", "usd"]);
sets.forEach(function (val, _, set) {
  console.log(`${val}`);
});

const mapss = new Map(Object.entries({ key: "value", 7: "34", 45: 343 }));
console.log(mapss);
/////////////////////////////////////////////////

console.log("----------- array methods start here ---------------");

//now map method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// IMP map method take an array and iterated over each of it's element and applies a callback method in each itration and returns a new array with those new values at corresponding locations
const mappedArr = movements.map(function (mov, i, move) {
  for (let i = 0; i <= 5; i++) {
    if (i === 2) {
      break;
    }
    mov = mov + i;
  }
  return mov;
});
console.log(mappedArr);
console.log(movements);

// const movemeusd = movements.map(function (mov) {
//   return mov * 2;
// });
//same using arrow function
const moveArrow = movements.map((mov) => mov * 2);
console.log(moveArrow);
//doing same using for of
const resultArr = [];
for (let mov of movements) {
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      break;
    }
    mov = mov + i;
  }
  resultArr.push(mov);
}
console.log("result of for of :: ");
console.log(resultArr);

const array1 = ["a", "b", "c"];

for (const element of array1) {
  if (element === "b") {
    break;
  }
  console.log(element);
}

const test = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `movement ${i + 1}: you deposited ${mov}`;
  } else {
    return `movement ${i + 1}: you withdrew ${Math.abs(mov)}`;
  }
});
console.log(test); //all elements will be set to undefined if we don't return anything from the callback

const resultString = test.map(function (val) {
  return null;
});
console.log(resultString);

//forEach() throws away return values and always returns undefined
//Unfortunately returning from the forEach callback does nothing to the outer scope, it simply exits the callback scope. While forEach can be used it's not the most efficient as there's no real way of exiting the loop early.
const testforeach = typeof movements.forEach(function (mov) {
  return mov + 1;
});
console.log(testforeach);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter method returns a boolean value based on which an item will be taken into the resulting array that it will return
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);
console.log(movements);
const withdrawals = movements.filter((move) => move < 0);
console.log(withdrawals);

//reduce method
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(balance);
let balance2 = 0;
for (const movement of movements) balance2 += movement;
console.log(balance2);

//get maximum form movement array
const maxVal = movements.reduce(function (acc, cur, i, arr) {
  return acc > cur ? acc : cur;
}, -Infinity);

console.log(maxVal);

const usdtors = 80;
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsrs = function (movement) {
  return movement
    .filter((move) => move > 0)
    .map((move, i, arr) => {
      console.log(arr);
      return move * usdtors;
    })
    .reduce((sum, curr) => sum + curr);
};
const totaldepositedrs = totalDepositsrs(movements);
console.log(totaldepositedrs);

// Coding Challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(2, -2);
  const combined = [...dogsJuliaCorrected, ...dogsKate];
  combined.forEach(function (dogage, i, dogarr) {
    if (dogage >= 3) {
      console.log(`Dog number ${i} is an adult, and is ${dogage} years old`);
    } else {
      console.log(`Dog number ${i} is still a puppy 🐶"`);
    }
  });
};
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
const dogJulia2 = [9, 16, 6, 8, 3];
const dogKate2 = [10, 5, 6, 1, 4];
checkDogs(dogJulia, dogKate);
checkDogs(dogJulia2, dogKate2);

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Coding Challenge #2
const dogJuliaa = [5, 2, 4, 1, 15, 8, 3];
const dogKatee = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge2chain = function (arr) {
  return arr
    .map((dogage) => {
      return dogage <= 2 ? 2 * dogage : 16 + 4 * dogage;
    })
    .filter((age, i, arr) => {
      // console.log(arr);
      return age >= 18;
    })
    .reduce((sum, curr, i, arr) => sum + curr / arr.length, 0);
};

console.log("thiss is coming from chained methods");
console.log(calcAverageHumanAge2chain(dogJuliaa));
console.log(calcAverageHumanAge2chain(dogKatee));

const calcAverageHumanAge2 = function (arr) {
  const humanAges = arr.map((dogage) =>
    dogage <= 2 ? 2 * dogage : 16 + 4 * dogage
  );
  const filted = humanAges.filter((humanAge) => humanAge >= 18);
  const avg = filted.reduce((sum, curr, i, arr) => sum + curr / arr.length, 0);
  console.log(humanAges);
  console.log(filted);
  console.log(avg);
};
calcAverageHumanAge2(dogJuliaa);
calcAverageHumanAge2(dogKatee);

// const calcAverageHumanAge = function (arr, arrr) {
//   const complete = [...arr, ...arrr];
//   return complete.filter(function (dogage, i, dogarr) {
//     let humanAge = 0;
//     if (dogage <= 2) {
//       humanAge = 2 * dogage;
//     } else {
//       humanAge = 16 + dogage * 4;
//     }
//     return humanAge >= 18;
//   });
// };
// console.log(
//   calcAverageHumanAge(dogJuliaa, dogKatee).reduce(
//     (sum, curr) => sum + curr,
//     0
//   ) / calcAverageHumanAge(dogJuliaa, dogKatee).length
// );
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//find() return only one element and that too any first element in the array that satisfy the given callback method condition
const firstiwithdrawal = movements.find((move) => move < 0);
console.log(firstiwithdrawal);

const accountJessicaDevice = accounts.find((acc, i, obj) => {
  console.log(i);
  return acc.owner === "Jessica Davis";
});
console.log(accountJessicaDevice);

// Coding Challenge #4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
const dogFoodMeasure = function (dogs) {
  dogs.forEach((dog) => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
  });
};
// dogFoodMeasure(dogs);
// console.log(dogs);
const eatingmuchorless = function (dog) {
  const dogcurrfood = dog.curFood;
  const dogrecomd = dog.recommendedFood;
  dogcurrfood < dogrecomd
    ? console.log(
        `dog need ${dogrecomd} :but current is ${dogcurrfood} so undernurished`
      )
    : console.log(
        `dog need ${dogrecomd} :but current is ${dogcurrfood} so overeating`
      );
};

dogFoodMeasure(dogs);
console.log("function 2");
const sarahdogfoodstatus = function (dogsobj) {
  const sarahsdog = dogsobj.find(({ owners }) => {
    console.log(owners);
    return owners.includes("Sarah");
  });
  console.log(sarahsdog);
  eatingmuchorless(sarahsdog);
};
sarahdogfoodstatus(dogs);
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownerlist = function (dogs) {
  return dogs.reduce(
    (acc, currentdog, i) => {
      if (currentdog.recommendedFood < currentdog.curFood) {
        console.log(...currentdog.owners);
        acc.ownersEatTooLittle.push(...currentdog.owners);
      } else {
        acc.ownersEatTooMuch.push(...currentdog.owners);
      }
      console.log(acc);
      return acc;
    },
    { ownersEatTooMuch: [], ownersEatTooLittle: [] }
  );
};
const { ownersEatTooMuch, ownersEatTooLittle } = ownerlist(dogs);
console.log(
  `owner whose dog eat much : ${ownersEatTooMuch} \nowner whose dog eat little : ${ownersEatTooLittle}`
);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dog eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dog eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(
  dogs.some((dog) => {
    return dog.curFood === dog.recommendedFood;
  })
);
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

console.log(
  dogs.some((dogObj) => {
    return (
      (dogObj.recommendedFood * 90) / 100 <= dogObj.curFood &&
      dogObj.curFood <= (dogObj.recommendedFood * 110) / 100
    );
  })
);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const okayFoodDog = function (dogObj) {
  return (dogObj.recommendedFood * 90) / 100 <= dogObj.curFood &&
    dogObj.curFood <= (dogObj.recommendedFood * 110) / 100
    ? true
    : false;
};
const okayfooddoglist = dogs.filter((dog) => {
  return okayFoodDog(dog);
});
console.log(okayfooddoglist);
console.log(`okeyfooddoglist : ${okayfooddoglist}`);
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
// const copydogs = Object.assign({}, dogs);
// console.log(copydogs);
const copy = [...dogs];
console.log(copy);

copy.sort((dog1, dog2) => {
  const recdog1 = dog1.recommendedFood;
  const recdog2 = dog2.recommendedFood;
  if (recdog1 < recdog2) {
    return -1;
  } else if (recdog1 > recdog2) {
    return 1;
  }
  return 0;
});

console.log(copy);
copy.sort((a, b) => {
  const recdog1 = a.recommendedFood;
  const recdog2 = b.recommendedFood;
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
});
console.log(copy);
// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];
