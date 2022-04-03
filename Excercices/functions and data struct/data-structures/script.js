'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  oder: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at 
    ${time}`);
  },
  orderPasta: function (ig1, ig2, ig3) {
    console.log(`You ordered pasta made from ${ig1}, ${ig2}, ${ig3}`);
  },
};

//coding challange #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//two arrays from one array
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // n amount of things + array
// const [gk, ...fieldPlayers] = players1;
// //two arrays merged to one
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// //passing large ammounts of data to the function
// const printGoals = function (...names) {
//   console.log(names);
//   console.log(`There were ${names.length} goals scored in total`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//coding challange #2
// for (let [i, x] of game.scored.entries()) {
//   console.log(`Goal ${i}: ${x}`);
// }
// //2
// let average = 0;
// for (let odd of Object.values(game.odds)) {
//   average += odd;
// }
// average /= Object.values(game.odds).length;
// console.log(average);
// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamstr = team === `x` ? `draw` : `victory${game[team]}`;
//   console.log(`Odd of ${teamstr}  ${odd}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//Coding Challange #3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// let gameEventsSet = new Set(gameEvents.values());
// console.log(gameEventsSet);
// gameEvents.delete(64);
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
// for (let x of gameEvents.keys()) {
//   console.log(
//     `${x <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${x}: ${gameEvents.get(x)} `
//   );
// }

//Coding Challange #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const text = document.querySelector('textarea');

button.addEventListener('click', function () {
  let textFromBox = text.value;
  const rows = textFromBox.split('\n');
  let output;
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    output = `${first}${second[0].toUpperCase() + second.substring(1)}`;
    // output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${`blee`.repeat(i + 1)}`);
  }
});

//Notes
//destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// //get the data and set it to variable from object(array)
// const [main, secondary] = restaurant.categories;
// console.log(main, secondary); //first and second position in categories array

// //you can get data from array by passing index and then getting the thing
// //from arrays
// const [starter, mainCourse] = restaurant.oder(2, 0);
// console.log(starter, mainCourse);

//destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //get the data from the object const{data=your_variable}=object_from
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurant, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables based on object, a and b become 23 and 7
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested object, first get to object friday=> then opening and close
// //and set that variables then = to the main object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //you can pass the whole object to the function the arguments must be the
// //exact same with function parameters and syntax is something:function({})
// //you can also set default values in declaraction
// restaurant.orderDelivery({
//   time: '22:30',
//   address: `via del Sole 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

//spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr]; //adding 1,2 to the arr
// console.log(newArr);

// //merging two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //using spread you can go trough every iterable element
// const str = 'adam';
// console.log(...str);
// const letters = [...str];
// console.log(letters);

// // for example:

// const ingredients = ['ig1', 'ig2', 'ig3'];
// restaurant.orderPasta(...ingredients);

// //coping objects

// const newRestaurant = { foundIn: 1999, ...restaurant };
// console.log(newRestaurant);

//spread operator

//others print the rest of of array so 3,4,5 as a
//new array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //eg. you can get two first entries than just get the rest as "otherfood"
// //from whole mianMenu and StarterMenu entries
// const [pizza, , rosotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rosotto, otherFood);
// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions

// //you can pass to the functions unlimited numbers
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// const x = [3, 4, 5, 6, 7];
// add(...x);

// A short circuit happens because the result is clear even before the
//complete evaluation of the expression, and the result is returned
// for example in & operator if(false&& true ...) this will not go cuz
// the compilator will stop on falsey value but if you get all trues then the opartion
//will happen and return the first element

//for of loop
// for (const item of restaurant.mainMenu) {
//   console.log(item); //you get all the items from mainMenu
// }

//
// console.log(restaurant.openingHours.mon?.open); //if method open dont exist
//the program will not crush insted will return undifined

//some array stuf

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(airline.slice(0, airline.indexOf(' '))); //this will return first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //=||= last

// console.log(airline.slice(-2)); //this will return two last indexes

//.trim() remove whitespaces
// const priceUS = '288.97$';
// const pricePL = priceUS.replace('$', 'PLN').replace('.', ',');
// console.log(pricePL);

// const someString = 'Door aiehfaiuenhi Door';
// console.log(someString.replace(/Door/g, 'Gate')); // /something/g is a regular expression

// const fullName = 'Adam Rogalski';
// const [firstName, lastName] = fullName.split(' ');
// console.log(firstName, lastName);

// const newName = ['Pan. ', firstName, lastName].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const arr = name.split(' ');
//   const namesUpper = [];
//   for (const n of arr) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('adam rogalski');

//padstart() method adds a sing too achieve that long string
//padstart(25, '+') adds + until string has lenght of 25
//padend does the same but the other way

//working with string
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${
//     type.startsWith('_Delayed') ? 'emoji' : ''
//   } ${type.replaceAll('_', ' ')} ${from
//     .slice(0, 3)
//     .toUpperCase()} ${to} ${time.replace(':', 'h')}`;
//   console.log(output);
// }
