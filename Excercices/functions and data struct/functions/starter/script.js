'use strict';

//functions

//if you want to skip default parameter you can set the value to undefined
//ex:
// const createBooking = function () {
//   a, (b = 1), (c = 123);
// };
// createBooking('LHC123', undefined, 1000); //this will get a='LHC123" b=1, c=123

//In js there are no passing by reference only passing by value

//if we pass the object to the function and change it inside function
//it will have inpact on object outside function, however, if we pass
//primitive type to the function js will create copy and value outside
//function will not be touched
//ex:
// const adam = {
//   name: 'Adam',
//   passport: 123123123,
// };
// const flight = 'LH32';

// const changePassword = function (passanger, flights) {
//   passanger.passport = Math.trunc(Math.random() * 100000);
//   flights = 'LH45';
// };
// changePassword(adam, flight);
// console.log(adam, flight);

//functions are treated as values

//const hight5=function(){
//...
//}
//document.body.addEventListener('click', high5) addevent... is a higher
//order function, high5 is a callback function

//returning function

// const greet = function (greet) {
//   return function (name) {
//     console.log(`${greet} ${name}`);
//   };
// };

// greet('hello')('Adam');

// const greet2 = greet => {
//   return name => {
//     console.log(`${greet} ${name}`);
//   };
// };

// greet2('hello')('Adam');

//call method, how to tell method witch this heyworld it should use

// const sandwitch = {
//   name: 'Z pasztetem',
//   hasButter: true,
//   calories: 200,
//   ingridients: [],
//   desc(calories) {
//     console.log(
//       `This sandwich is called ${this.name} and it has ${calories} calories`
//     );
//   },
// };
// sandwitch.desc(300);
// console.log(sandwitch);
// const sandwich2 = {
//   name: 'Z szynka',
//   hasButter: true,
//   calories: 200,
//   ingridients: [],
// };

// const description = sandwitch.desc;
// description.call(sandwich2, 500);
// description.call(sandwitch, 150);

// //we can also use bind ...
// const sandwichDesc = description.bind(sandwitch);
// const samdwitchDesc2 = description.bind(sandwich2);
// //now we can use parameters normally without error

// //you can also bind default values
// const sandwichWithPasztet = description.bind(sandwitch, 300);
// sandwichWithPasztet();
// //you can bind object to method with eventlistener
// sandwitch.increaseCalories = function () {
//   console.log(this);
//   this.calories++;
//   console.log(this);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', sandwitch.increaseCalories.bind(sandwitch));

//there is a thing called iife immidietly invoked fuction expression
//we can run a function just once and not assing it to any other varaible
//ex
//(function(){
//...
//})();

//a fucction has access to the variable enviroment (VE) of the execution
//contex in which it was created
//closure: VE attached to the function, exacly as it was at the time and place
//the function was created
//thanks to the closure a function does not lose connection to variables
//that existed at the function's birthplace
//imagine if the function is person closure is backpack and variables
//are inside the backpack, so if the function cant find the variable it will
//look to the backpack to find it

// # Coding Challange 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         'What is your favourite programming language?\n 0:JavaScript \n 1:Python\n 2:Rust \n 3:C++'
//       )
//     );
//     if (answer > 3 || answer < 0) alert('Choose good number');
//     switch (answer) {
//       case 0:
//         this.answers[0]++;
//         break;
//       case 1:
//         this.answers[1]++;
//         break;
//       case 2:
//         this.answers[2]++;
//         break;
//       case 3:
//         this.answers[3]++;
//         break;
//     }
//     checkResultsArray();
//     checkResultsString();
//   },

//   checkResults(type = 'array') {
//     if (type === 'string')
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     else if (type === 'array') {
//       console.log(this.answers);
//     }
//   },
// };

// const register = poll.registerNewAnswer.bind(poll);
// const checkResultsString = poll.checkResults.bind(poll, 'string');
// const checkResultsArray = poll.checkResults.bind(poll);

// document.querySelector('.poll').addEventListener('click', register);

// poll.checkResults.call({ answers: [5, 2, 3] }, 'string');

//Coding Challange #2

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
