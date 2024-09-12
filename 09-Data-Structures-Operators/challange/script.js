"use strict";
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:






GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const player1 = game.players[0];
const player2 = game.players[1];
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = player1;
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...player1, ...player2];
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...player1, "Thiago", "Coutinho", "perisic"];
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
// const { team1, draw, team2 } = game.odds;
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored`);
  console.log(...playerNames);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Lewandowski", "Kimmich");
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("team1 is more likely to win");
team2 < team1 && console.log("team2 is more likely to win");

// Coding Challenge #2

//Let's continue with our football betting app!

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [no, player] of game.scored?.entries()) {
  console.log(`Goal ${no}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let oddsss = Object.values(game.odds);
let avgValue = 0;
for (const value of Object.values(game.odds)) {
  avgValue += value;
}
console.log(avgValue / oddsss.length);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
const allOdd = Object.entries(game.odds);
console.log(allOdd);
for (const [team, valueOdd] of allOdd) {
  console.log(
    `Odd of ${game[team] ? "victory" : "draw"} ${
      game[team] || ""
    } : ${valueOdd}`
  );
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
/*4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL */

for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key} : ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log(gameEvents.size);
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const lastel = [...gameEvents.keys()];
console.log(lastel[lastel.length - 1] + " and " + gameEvents.size);
console.log(
  `An event happened, on average, every ${
    lastel[lastel.length - 1] / gameEvents.size
  } minutes`
);
console.log(gameEvents.keys());
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
/* 
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
 */
const underToCamel = function (name) {
  const str = name.toLowerCase().trim();
  const splitstr = str.split("_");
  // console.log(splitstr.length);
  for (let i = 1; i < splitstr.length; i++) {
    splitstr[i] = splitstr[i][0].toUpperCase() + splitstr[i].slice(1);
  }
  console.log(splitstr);
  return splitstr.join("");
};
console.log(underToCamel("underscore_case"));
console.log(underToCamel("first_name"));
console.log(underToCamel("Some_Variable"));
console.log(underToCamel("calculate_AGE"));
console.log(underToCamel("delayed_departure"));

//dom
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const userInput = document.querySelector("textarea").value;
  const rows = userInput.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const splitarr = row.toLowerCase().trim().split("_");
    for (let i = 1; i < splitarr.length; i++) {
      splitarr[i] = splitarr[i][0].toUpperCase() + splitarr[i].slice(1);
    }
    console.log(splitarr.join("").padEnd(20, " ") + `${"✅".repeat(i + 1)}`);
  }
});
/* 




SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
