'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //es6 syntax allows us to even compute properties earlier only values could be computed
  [days[0]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

//looping through objects using for of loop
//looping overs keys / property name
console.log('========= looping through objects ===== ');
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//looping over values
const values = Object.values(openingHours);
console.log(values);

//looping over values and keys both
const objArr = Object.entries(openingHours);
console.log(objArr);
for (const [key, { open, close }] of objArr) {
  console.log(`on ${key} the rest. opens at ${open} and closed at ${close}`);
}

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //use of object destructuring
  orderDelivery: function ({
    time = '20:00',
    address,
    starterIndex = 1,
    mainIndex,
  }) {
    console.log(
      `order at ${time} from ${address} and the starter is ${this.starterMenu[starterIndex]} and the main course is ${this.mainMenu[mainIndex]}`
    );
  },

  //before es6
  // openingHours: openingHourss,
  //es6
  openingHours,

  //es6 functions
  orderPasta(ing1, ing2, ing3) {
    console.log('here is your delicious pasta');
    console.log(`pasta inclused ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPasta(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const dayss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log(restaurant.openingHours.mon.open);
//optional chaining
console.log(restaurant?.openingHours?.tue?.open);

//on methods
const rees = function (dayss) {
  for (const day of dayss) {
    console.log(
      `on ${day} res opens on ${restaurant.openingHours[day]?.open || 'closed'}`
    );
  }
  console.log(dayss);
};

//calling function with optional chaining
restaurant.order?.(1, 2);
restaurant.orderRosetta?.(1, 2);
//with array
const user = [
  {
    name: 'jonas',
    number: 12343434,
  },
];
console.log(user[0]?.name);
rees(dayss);
restaurant.orderPasta(
  'maining',
  'othering1',
  'othering2',
  'othering3',
  'othering4'
);

//use case of spread operator
// const ingredients = [prompt('ing 1 ?'), prompt('ing 2 ?'), prompt('ing 3 ?')];

const ingredients = ['ing1', 'ing2', 'ing3'];
restaurant.orderPasta(...ingredients);

restaurant.orderDelivery({
  time: '23:30',
  address: 'pata nahi',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [2, 3, 5];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// to switch main and secondary
[secondary, main] = [main, secondary];
console.log(main, secondary);

//
const [starter = [], mainitem = [], testunassigned = {}] = restaurant.order(
  2,
  0
); //here the function returns an array and we are destruction on the go also assigning default value in case some values are missing
console.log(starter, mainitem, testunassigned);

//nested array destructuring
const [a, , b, [i = 0, j = 0], c] = [1, 2, 3, [4, 5]];
console.log(a, b, i, j, c);

//object restructuring {is used}
const { names, openingHours: openss, categories } = restaurant;
console.log(names, openss, categories);

//giving custom name and setting up default values
const {
  names: restaurantname = {},
  openingHours: hours = [],
  categories: tags = {},
} = restaurant;
console.log(restaurantname, hours, tags);

let aa = 3;
let bb = 4;
const obj = {
  aa: 34,
  bb: 3442,
};
// }(
//   // {aa,bb} = obj; SyntaxError//this will not work as { starts indicating block}

//   ({ aa, bb } = obj)
// );

// console.log(aa, bb);

const { openingHours: opens } = restaurant;
console.log(opens);

const {
  fri: { open, close },
} = opens;
console.log(open, close);

//spread operator
const arrTest = [1, 2, 3];
const newArrTest = [4, 6, ...arrTest];
console.log(newArrTest);

console.log(...newArrTest);
const newMenu = [...restaurant.mainMenu, 'newItem1', 'newItem2'];
console.log(newMenu);

//copying an array using ... operator
//shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//join two array
const menuthings = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuthings);

//arr, strings, maps, sets are iterables not object and we can use ... operator on any iterable

const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(...letters);

//starting ES2018 we can use spread operator even for objects even through they are not iterable

//shallow copy
const newResturant = { foundedIN: 1998, ...restaurant, founder: 'pata nahi' };
newResturant.mainMenu[0] = 'kuchh bhi test';
console.log(restaurant.mainMenu[0]);
console.log(newResturant.mainMenu[0]);
console.log(newResturant);

//shallow copying an object
const copyResturant = { ...restaurant };
copyResturant.names = 'name test';
console.log(copyResturant.names, restaurant.names);

//REST pattern
// if we are using spread operator on right hand side of assignment operator then this will work as spread operator and if we are using it on left side of assignment operator as a destructring assignment then it will work as rest(remaining) collector operator

const [pasta, , Risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pasta, Risotto, others);
//with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//packing and unpacking at same time
const addPac = function (...numbers) {
  //this is rest parameter
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[0];
  }
  console.log(sum);
};
addPac(2, 3);
addPac(3, 4, 5, 5, 6);
addPac(23, 43, 2, 4, 2, 4, 2, 52, 2);

const xy = [34, 22, 2, 2, 2, 2, 3, 3, 4, 5];
addPac(...xy);

// shorcircuting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || undefined);
console.log(undefined || null);
console.log(undefined || null || '' || 0);
// first truthy or last value

restaurant.numGuests = 34;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// we can write same logic using || as it usage short circuting
const guest2 = restaurant.numGuests || 10;
console.log(guest1, guest2);

console.log('hello' && 0); //first falsy value or last thuthy value if all are true;
console.log('hwll' && 6 && 9);
console.log('howl' && 34 && null);

if (restaurant.orderPasta) {
  restaurant.orderPasta('main', 'other', 'other');
}
// this can be written as
restaurant.orderPasta && restaurant.orderPasta('main', 'other', 'andoperator');

//dealing with situation of 0 or any such falsy value and the null operator

//nullish coalescing operator (??)
// it's works on the principle of nullish value unlike truthy and falsy value

// the nullish values are = null, undefined (it's like falsy when we are using it)

restaurant.numguest = 0;
const guests = restaurant.numguest ?? 10; //0 as it is first non null value or it will return last null value (null or undefined);
console.log(guests);

//for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

//if we want both index and items
for (const item of menu.entries()) {
  console.log(`${item[0]} is ${item[1]}`);
}

//more eligent
for (const [i, j] of menu.entries()) {
  console.log(`${i} at ${j}`);
}

console.log(
  '============== sets(unique, iterable, no any ordering) =========='
);

const arrr = ['pizza', 'macburger', 'macroni', 'pizza', 'macburger', 'pizza'];
//use case of set is to remove duplicates from an array
const arrrUnique = new Set(arrr);
console.log(arrrUnique);

//some methods
console.log(arrrUnique.size);
console.log(arrrUnique.has('pizza'));
//as there is no concept of ordering in sets we can't use indexing the use case also don't demand retrival as we will be mostly checking if an element exists or not
console.log(arrrUnique.delete('macburger')); //doesn't return anything
console.log(arrrUnique);
console.log(arrrUnique.add('macburger'));
// console.log(arrrUnique);
// conversion of sets to Array as set is also iterable use destructuring
const arrayfromset = [...new Set(arrr)];
console.log(arrayfromset);
//clear
console.log(arrrUnique.clear());

// names: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto']
console.log('====== Maps (just like objects but we can have any typeof keys');
const rest = new Map();
// set method returns the updated map so we can chain it
rest
  .set('name', 'Classico Italiano')
  .set(1, 'Via Angelo')
  .set(2, 'firenze')
  .set(true, "we're open")
  .set(false, "we're close")
  .set('open', 18)
  .set('close', 22);
console.log(rest);

console.log(rest.get('name'));
const time = 21;
console.log(rest.get(time >= rest.get('open') && rest.get('close') >= time));

// set get now has(key)
console.log(rest.has(true));
console.log(rest.size);
console.log(rest.delete(2));
console.log(rest);

rest.set([1, 2], 'test array as key');
console.log(rest.get([1, 2])); // this will return undefined as [1,2] as key there and that inside get function are not same object in the heap they look same but they are different object in the heap and the [1,2] in rest is very different

//we can use other method
const arrs = [1, 2];
rest.set(arrs, 'test array as key').set(arrs, 'this is an update');
console.log(rest.get(arrs));
console.log(rest);

const h1tag = document.querySelector('h1');
console.log(h1tag);
rest.set(document.querySelector('h1'), 'heading'); //here DOM object associated with h1 is being used as key
console.log(rest);
console.log(rest.get(h1tag)); //as both are pointing to the same object

// map iteration
const questions = new Map([
  ['question', 'which is the best progamming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['answer', 2],
  [true, 'you are so correct'],
  [false, 'you are so wrong'],
]);

console.log(questions);
//as Object.entries returns the same 2d array structure as used in above map
const arrtomap = new Map(Object.entries(openingHours));
console.log(arrtomap);

console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

const userInput = 3;
// const userInput = Number(prompt('your answer : '));
console.log(questions.get(userInput === questions.get('answer')));

// conversion of map to array just use spread operators as the Maps are iterable
const arrFromMap = [...questions];
//we also get below functions and they will return MapIterator
console.log('testing functions');
console.log([...questions.entries()]);
console.log([...questions.keys()]);
console.log([...questions.values()]); //return array of values

console.log('======= string practice ======');
const strr = 'TAP AIR PORTUGAL';
console.log(strr[0]);
console.log('strr'[0]);
//length of string
console.log(strr.length);
console.log('strr'.length);
console.log(strr.indexOf('A'));
console.log(strr.lastIndexOf('A'));
console.log(strr.indexOf('AI')); //it will give the starting index of where AI starts
console.log(strr.slice(0, 23).length); //[0,4) IMP
//extract last and first word in the airline company
console.log(strr.slice(0, strr.indexOf(' ')));
console.log(strr.slice(strr.lastIndexOf(' ') + 1));

// IMP boxing as strings are primitive how we are able to use methods on them -- as soon as we call method on string the string primitive is converted to the string object and method is applid on it and then while returning result it is again converted back to string primitive IMP also all mostly string methods return string primitives

const cars = ['Mercedes=D', 'Renault-B', 'BMW-D', 'McLaren-S'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].slice(0, -2));
}

function classFinder(car) {
  const carClass = car.slice(-1); //get last character
  if (carClass === 'B') {
    console.log(`${car} :: ${car.slice(0, -2)} is a Family car`);
  } else if (carClass === 'D') {
    console.log(`${car} :: ${car.slice(0, -2)} is a Luxury car`);
  }
  if (carClass === 'S') {
    console.log(`${car} :: ${car.slice(0, -2)} is a SuperSport car`);
  }
}

classFinder(cars[0]);
classFinder(cars[1]);
classFinder(cars[2]);
classFinder(cars[3]);

//function of get correct format name "Jonas"
const namess = 'JoNAs  ';
const getCorrectName = function (names) {
  const trimmed = names.toLowerCase().trim();
  return trimmed[0].toUpperCase() + trimmed.slice(1);
};
console.log(getCorrectName(namess));
//function to get correct email and compare it with the registered email
const loginEmail = '  hellO@JOnas.IO    \n';
const isEmailCorrect = function (login) {
  const correctEmail = 'hello@jonas.io';
  const refinded = login.trim().toLowerCase();
  return refinded === correctEmail;
};
console.log(isEmailCorrect(loginEmail));

//replace method only replaces the first occurance of the search string
const priceGB = '234,234$';
const princeInd = priceGB.replace(',', '.').replace('$', 'RS');
console.log(princeInd);

const announcement =
  'All passangers come to boarding door 20! repeat boarding door 20';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
//using regex
console.log(announcement.replace(/door/g, 'gate'));

//some string methods which return boolean
const plane = 'AIRBUS A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air')); //case sensitive

if (plane.includes('AIRBUS') && plane.endsWith('neo')) {
  console.log('new airbus series');
}
const checkBaggage = function (items) {
  const lowercased = items.toLowerCase();
  if (lowercased.includes('gun') || lowercased.includes('knife')) {
    console.log('you are not allowed to board');
  } else {
    console.log('welcome aboard!');
  }
};
checkBaggage('i have some knife and gun');
checkBaggage('i have food and snacks to enjoy');
checkBaggage('i have two KNife');

//IMP split() and join() methods
const testString = 'a+very+good+string+to+test+split+method';
const newString = testString.split('+'); //this returns the array of splitted substings
console.log(...newString);

const nAmes = 'jonas schmedtmann';
const [firstName, lastName] = nAmes.split(' '); //it will return an array
console.log(firstName, lastName);

//IMP [array].join("divider") => returns as string primitive
const newnAmes = ['MR.', firstName, lastName.toUpperCase()].join('---');
console.log(newnAmes);

//convert first letter of each name word into capital
const capitalizeName = function (name) {
  const nameArray = name.split(' ');
  const capitalname = [];
  for (const names of nameArray) {
    //method 1
    // const capitalName = names[0].toUpperCase() + names.slice(1);
    // name = name.replace(names, capitalName);

    //method 2
    capitalname.push(names.replace(names[0], names[0].toUpperCase()));
  }
  // console.log(capitalname);
  // return name;
  return capitalname.join(' ');
};

console.log(capitalizeName('jonas schmedtmann'));
console.log(capitalizeName('pata nahi kya naam hai'));

//padding
//mask credit card number
const str1 = 'go to terminal 1';
console.log(str1.padStart(34, '+'));
console.log(str1.padEnd(32, '-'));

const maskCredit = function (number) {
  const str = number + '';
  //extract last 4 digits and then padStart with str.length
  return str.slice(-4).padStart(str.length, 'X');
};

console.log(maskCredit(233235235235225));
console.log(maskCredit(12345678));

//repeat
//show emojis number of times == no of planes grounded
console.log('this is test of repeat '.repeat(5));

const groundedPlane = function (number) {
  console.log(`number of grouned planes are ${'🛫'.repeat(number)}`);
};

groundedPlane(4);
groundedPlane(15);
