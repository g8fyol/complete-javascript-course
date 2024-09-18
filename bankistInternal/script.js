"use strict";
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//selectors
const forms = document.querySelectorAll("form");
const bodyelement = document.querySelector("body");

const containerApp = document.querySelector(".app");
const containerMovement = document.querySelector(".movements");
const lableBalance = document.querySelector(".balance_value");
const lableSummaryIn = document.querySelector(".summary_value_in");
const lableSummaryOut = document.querySelector(".summary_value_out");
const lableSummaryInterest = document.querySelector(".summary_value_interest");
const lablenavigationwelcome = document.querySelector(".title");

const buttonlogin = document.querySelector(".login_btn");

//inputs
const inputLoginUser = document.querySelector(".login_input-user");
const inputLoginPin = document.querySelector(".login_input-pin");

const inputtranferto = document.querySelector(".form_input_to");
const inputtransferamount = document.querySelector(
  ".form_input_transfer_amount"
);

const inputloanamout = document.querySelector(".form_input_loan_amount");
const inputcloseaccountuser = document.querySelector(".form_input_user");
const inputcloseaccoutpin = document.querySelector(".form_input_pin");

const buttontranfer = document.querySelector(".oprations_button-tranfer");
const buttonloan = document.querySelector(".oprations_button-loan");
const buttoncloseaccount = document.querySelector(".oprations_button-close");

const buttonsort = document.querySelector(".summary_btn");

//fuctionalities:
//Movements display
const displayMovements = function (account1) {
  containerMovement.innerHTML = "";
  const objCopy = Object.assign({}, account1);
  objCopy.movements.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdraw";
    const newMove = `
      <div class="movements_row">
          <div class="movements_type movements_type_${type}">${
      index + 1
    } ${type}</div>
          <div class="movements_value">${movement}€</div>
      </div>    
    `;
    containerMovement.insertAdjacentHTML("afterbegin", newMove);
  });
};

//username creation
const createUserNames = function (acc) {
  acc.forEach(function (eachaccout) {
    eachaccout.username = eachaccout.owner
      .split(" ")
      .map(([first]) => first)
      .join("")
      .toLowerCase();
  });
};

//global balance
const CalcGlobalBalace = function (acc) {
  acc.balance = acc.movements.reduce(function (mov, cur, i, arr) {
    return mov + cur;
  }, 0);
  lableBalance.textContent = acc.balance + "€";
  return acc.balance;
};

//summary
const interestrate = 1.2;
const caluculateSummary = function (movements, accout) {
  const deposits = movements
    .filter((move) => move > 0)
    .reduce((sum, curr) => sum + curr);
  lableSummaryIn.textContent = deposits + "€";
  const out = Math.abs(
    movements.filter((mov) => mov < 0).reduce((sum, curr) => sum + curr)
  );
  lableSummaryOut.textContent = out + "€";
  //for each deposite interest is 1.2%
  const interest = movements
    .filter((move) => move > 0)
    .map((move) => (move * accout.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((sum, curr) => sum + curr);
  lableSummaryInterest.textContent = interest + "€";
  console.log(deposits, out, interest);
};

//implementing login functionality
// const forms = document.querySelector("form");
// function handleForm(event) {
//   event.preventDefault();
// }
// forms.addEventListener("submit", handleForm);

//current user logged in
const updateui = function (correctUser) {
  CalcGlobalBalace(correctUser);
  caluculateSummary(correctUser.movements, correctUser);
  displayMovements(correctUser);
};

let userLoggedInCurrent = {};

createUserNames(accounts);
const tasksLogin = function (e) {
  // prevent form form submitting
  e.preventDefault();
  // console.log(e);
  createUserNames(accounts);
  const userNameInp = inputLoginUser.value.trim().toLowerCase();

  const userPinInp = Number(inputLoginPin.value.trim().toLowerCase());

  const correctUser = accounts.find((acc, i, obj) => {
    console.log(acc);
    return acc.username === userNameInp && acc.pin === userPinInp;
  });
  console.log(correctUser);
  if (correctUser === undefined) {
    containerApp.classList.add("hidden");
  } else {
    userLoggedInCurrent = correctUser;
    lablenavigationwelcome.textContent = `Welcome back ${correctUser.owner
      .split(" ")
      .at(0)}`;
    updateui(correctUser);

    containerApp.classList.remove("hidden");
    inputLoginUser.value = "";
    inputLoginPin.value = "";

    inputLoginUser.blur();
    inputLoginPin.blur();
  }
};

buttonlogin.addEventListener("click", tasksLogin);

//we don't need this key down event as if any of the form input field is selected or being inputted hittin enter key will automatically trigger a "click event";

// bodyelement.addEventListener("keydown", function (e) {
//   if (containerApp.classList.contains("hidden") && e.key === "Enter") {
//     tasksLogin();
//   } else {
//     console.log(`eat five star and do nothing`);
//   }
// });

// const areasofenter = [inputLoginUser, inputLoginPin, buttonlogin];
// console.log(areasofenter);
// areasofenter.forEach((area) => {});

// bodyelement.addEventListener("keydown", function (events) {
//   console.log(events);
// });

// const keypressobj = { target: body, key: "Enter", charCode: 0, keyCode: 13 };

// transer oprationsss

buttontranfer.addEventListener("click", function (e) {
  e.preventDefault();
  const userto = inputtranferto.value.trim().toLowerCase();
  const amount = Number(inputtransferamount.value);
  console.log(userto, amount);
  const toUserobj = accounts.find((acc) => {
    return acc.username === userto;
  });
  const fromuserobj = userLoggedInCurrent;
  if (
    amount > 0 &&
    toUserobj &&
    fromuserobj.balance >= amount &&
    toUserobj?.username !== fromuserobj.username
  ) {
    fromuserobj.movements.push(-amount);
    toUserobj.movements.push(amount);
    //updattions
    updateui(fromuserobj);
  } else {
    console.log("invalid transfer");
  }
  //clear input fields
  // inputtranferto.value = "";
  // inputtransferamount.value = null;
  forms[1].reset();
  inputtranferto.blur();
  inputtransferamount.blur();
});

//loan
//rule loan is granted only when there is atleast 1 deposit with atleast 10% of loan amount
buttonloan.addEventListener("click", function (e) {
  e.preventDefault();
  const reqamout = Number(inputloanamout.value);
  //use of some() IMP find() return element if callback fucntion returns true that first element is returned and then IMP findIndex() returns the index of that now some() method returns true/false only that is boolean if the callback ever returned true or not

  //some will return true if it finds any deposite movement is greater than 10% of the requested loan amount
  if (
    reqamout > 0 &&
    userLoggedInCurrent.movements.some((move) => {
      return move > 0 && move > (reqamout * 10) / 100;
    })
  ) {
    userLoggedInCurrent.movements.push(reqamout);
    updateui(userLoggedInCurrent);
    inputloanamout.value = "";
    inputloanamout.blur();
  } else {
    console.log("can't grant loan you are not eligible");
  }
});

//close account
buttoncloseaccount.addEventListener("click", function (e) {
  e.preventDefault();
  const userinp = inputcloseaccountuser.value.trim().toLowerCase();
  const userpininp = Number(inputcloseaccoutpin.value);

  //find the index of user
  if (
    userinp === userLoggedInCurrent.username &&
    userpininp === userLoggedInCurrent.pin
  ) {
    //finding it's index
    const index = accounts.findIndex((acc) => {
      return acc.username === userinp && acc.pin === userpininp;
    });
    console.log(index);
    accounts.splice(index, 1);
    userLoggedInCurrent = {};
    //fade ui for current user
    tasksLogin(e);
    inputcloseaccountuser.value = inputcloseaccoutpin.value = "";
  }
});

//sort functionality
let isSorted = false;
buttonsort.addEventListener("click", function (e) {
  const movementCopy = [...userLoggedInCurrent.movements];
  movementCopy.sort((a, b) => {
    return a - b;
  });
  if (isSorted === false) {
    const objTest = Object.assign({}, { movements: movementCopy });
    console.log(objTest);
    displayMovements(objTest);
    isSorted = true;
  } else {
    displayMovements(userLoggedInCurrent);
    isSorted = false;
  }
});

//IMP like some we have every() method which return true if all the elements satisfy the callback functions condition that is callback function is true for all elements
// console.log(account4.movements.every((mov, i, arr) => mov > 0));  //true

//IMP flat(depth) flattens the nested array by putting nested array elements into a big array return new arr
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const arr1 = arr;
// const arr2 = [...arr];
// console.log(arr2);
// console.log(arr);
// console.log(arr1 === arr); // for objects if they ref same
// console.log(arr.flat());
// const arrdeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arr.flat(3));
// // console.log(arr == arrdeep);

//bank want to know all movements
const accountMovements = accounts.map((acc) => acc.movements).flat();
const totalmovements = accountMovements.reduce((sum, cur) => sum + cur, 0);
console.log(accountMovements);
console.log(totalmovements);

//IMP more frquently we do map() and than flat() as above
// so we have flatMap() method which can only go upto 1 level deep
const accountMovements2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((sum, crr) => sum + crr, 0);
console.log(accountMovements2);

//IMP sort() be default it sorts elements  based on string but we can pass in a callback to control it's behaviour of sorting

const owners = ["jonas", "zach", "adam", "martha"];
console.log(owners.sort());
console.log(owners);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//as we are not passing any compartor function all will be converted to string and there utf-16 code will be compared undefined will simply go to end (even callback is given for them callback is n't called) and for sparse matrix the empty spaces are preserved and put to the far end
console.log(movements.sort());

//now to sort them property we provide callback method
// if +ve value returned means we will swap if negative value is returned means no switch also if 0 or NaN is returned it's indicate they both are equal
// IMP it sorted elements inplace so original array is mutated

//for ascending
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
});
console.log("ascending");
console.log(movements);

//decending order
movements.sort((a, b) => {
  // console.log(a, b);
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
//simplified implementation
movements.sort((a, b) => a - b); //ascending
movements.sort((a, b) => b - a); //decending order
console.log("decending");
console.log(movements);

//array practice
//calculate sum across all accounts
const bankDepositeSum = function (acc) {
  // acc.map((eachac)=>eachac.movements).flat();
  return acc
    .flatMap((eachacc) => eachacc.movements)
    .filter((move) => move > 0)
    .reduce((sum, curr) => sum + curr, 0);
};
console.log("total deposits accross all accounts");
console.log(bankDepositeSum(accounts));

//deposites in the bank with atleast 1000 dollars
const bankDespositThounds = function (acc) {
  // return acc
  //   .flatMap((eachacc) => eachacc.movements)
  //   .filter((move) => move >= 1000).length;
  return acc
    .flatMap((eachacc) => eachacc.movements)
    .reduce((sum, curr, i, arr) => (curr >= 1000 ? sum + 1 : sum), 0);
};
console.log(bankDespositThounds(accounts));

//count total deposites and withdrawals
const alldepostswithdrawals = function (acc) {
  return acc
    .flatMap((eachacc) => eachacc.movements)
    .reduce(
      (sum, curr, _, arr) => {
        // console.log(arr);
        // curr > 0
        //   ? (sum.deposits = sum.deposits + 1)
        //   : (sum.withdrawals = sum.withdrawals + 1);

        sum[curr > 0 ? "deposits" : "withdrawals"] += 1;
        // console.log(sum);
        return sum;
      },
      { deposits: 0, withdrawals: 0 }
    );
};
console.log(alldepostswithdrawals(accounts));

// this is a nice title => This Is a Nice Title

const titleit = function (title) {
  const captalizestring = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const cap = title
    .split(" ")
    .map((eachtitle) => {
      // console.log(eachtitle);
      return exceptions.includes(eachtitle)
        ? eachtitle
        : captalizestring(eachtitle);
    })
    .join(" ");

  //to avoid first letter in string to not to be in title case wehnever exception words are at begnning
  return captalizestring(cap);
  // return title
  //   .split(" ")
  //   .map((eachtitle) => {
  //     if (eachtitle.length === 1) {
  //       return eachtitle.toLowerCase();
  //     } else {
  //       return eachtitle[0].toUpperCase() + eachtitle.slice(1).toLowerCase();
  //     }
  //   })
  //   .join(" ");
};
console.log(titleit("and this is a nice title"));
