// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log();

// FIXME IMP

const val = 18;
if (val === 18) {
  console.log('you are adult now');
}
//challange
const temp = [3, -1, -2, -6, 'error', 9, 13, 17, 15, 5];
const temp2 = [5, 3, 234, 234, 20];

const calcAmplitude = function (arr1, arr2) {
  const temp = arr1.concat(arr2);
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== 'number') {
      continue;
    }
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }

    let amplitude = max - min;
    return amplitude;
  }
};

console.log(`amplitude of temp = ${calcAmplitude(temp, temp2)}`);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} centigrade in ${i + 1} days ...`;
  }
  console.log('... ' + str);
};

printForcast(temp);
