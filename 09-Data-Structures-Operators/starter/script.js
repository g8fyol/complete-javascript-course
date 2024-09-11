'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log('here is your delicious pasta');
    console.log(`pasta inclused ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPasta: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

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
