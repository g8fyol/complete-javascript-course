'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
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
console.log(movements.splice(0, Infinity, 'item1', 'item2'));
console.log(movements);
console.log(movements.splice());
console.log(movements);
console.log(movements.splice(0, 0, 'replace'));
// console.log(movements.splice(undefined));
console.log(movements);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const arr = ['a', 'b', 'c', 'd', 'e'];
//reverse
arr.reverse(); //it returns a new array IMP mutating the original array
console.log(arr);
//concat - doesn't mutate original array
console.log(arr.concat(movements));

//join method takes an array and joins it using separtor and return a string
console.log(movements.join('-'));
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
  ['usd', 'united states dollar'],
  ['eur', 'europe'],
  ['rs', 'rupees india'],
]);
maps.forEach(function (vals, key, map) {
  console.log(`${key}: ${vals}`);
});

const sets = new Set(['usd', 'rs', 'euro', 'rs', 'usd']);
sets.forEach(function (val, _, set) {
  console.log(`${val}`);
});

const mapss = new Map(Object.entries({ key: 'value', 7: '34', 45: 343 }));
console.log(mapss);
/////////////////////////////////////////////////

//more ways of creating an array
const arr2 = [34, 442, 23, 43];
console.log(arr2);
//array constructor creates array object
const arr3 = new Array();
//we can call Array wihout new both will create array instances

//when array is constructed with a single parameter then a new array object with length = argument is created with array elments are just empty slots
const arr4 = Array(6);
//we can't use any array iteration methods like
const resultarr = arr4.map(() => true);
console.log(resultarr); //bcz empty spaces are just skipped
//but in some cases they are treated as undefined
const arrtestt = [...arr4];
console.log(arrtestt);
console.log(arr4[0]);
const arrtest = [];
for (const [key, value] of arr4.entries()) {
  arrtest[key] = value;
}
//for loop works

console.log('test');
console.log(arrtest);
console.log('test');
console.log(arr4);
console.log(arr4[0]); //undefined but actully it is an empty slot

console.log(0 in arr4);

const arrofone = Array('2');
console.log(arrofone);

const fruits = new Array('apple,', 'gdgdag', 'dsf');
console.log(fruits);

//fill method = it changes all elements within a range of indices in an array it mutates the original array

const arra = [1, 2, 3, 4];
console.log(arra.fill(10, 2, 3)); //[2,)

console.log(arra.fill(4));

//mostly used to fill empty slots in an sparse array
const arrb = new Array(6).fill('boy', 0);
console.log(arrb);
console.log(arrb.fill(9, 2, 4));
console.log(arrb.fill(4, 0, 8)); //not any empty slot or extra slot will be created
arrb[14] = 56; // a lot of empty spaces will be created
console.log(arrb);

//from method in array namespace

//Array.from() method creates a new , shallow copied Array instance from an itreable or arrraylike object IMP

//Array.from(arraylike/iterable, mapfunctiontomapvaluesofarraylikeobj, thisArg:valuetouseasthiswhenexecutingmapfunction)
//it returns a new array instance

console.log(Array.from('apna'));
console.log(Array.from([1, 2, 3], x => 2 * x));

console.log(Array.from({ length: 7 }, x => 2 * x));
//it can take iterable and convert it into array
//or we will need arraylike object (with length and indexed elements)
//for missing indexed elements it will put undefined there
console.log(
  Array.from({ 1: 'name', 2: 'okay', length: 5 }, (curr, index) => curr + 'i')
);

const setss = new Set(['foo', 'foot', 'foo', , 'foot', 'bar']);
console.log(Array.from(setss));

const frommaps = new Map([
  [1, 2],
  [1, 3],
  [4, 5],
  [10, 12],
]);
console.log(frommaps);
console.log(Array.from(frommaps.values()));
console.log(Array.from(frommaps.keys()));
console.log(Array.from(frommaps));
// const movementss = document.querySelectorAll();

//create an array with 100 random dice rolls

const dicerollsrandom = function (rollsneeded) {
  const arr = new Array(rollsneeded);
  return Array.from(arr, () => Math.trunc(Math.random() * 6 + 1));
};

console.log(dicerollsrandom(100));

//homework
console.log('==home work==');
const midPoint = function (x, y) {
  return +((x + y) / 2).toFixed(4);
};
const mid = midPoint(1.8554, 1.8556);

const calcValue = function (mid) {
  const valueAnswer = mid ** 4 - mid - 10;
  return valueAnswer;
};
const value = calcValue(mid);
console.log(mid + ' is mid');
console.log(value + ' is value');
