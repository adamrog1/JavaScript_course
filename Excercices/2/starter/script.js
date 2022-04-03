'use strict'
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} milion people and its capital city is ${capitalCity}`;

// }
// const poland = describeCountry("Poland", 40, "Warsaw")
// const finland = describeCountry("Finland", 15, "Helsinki")
// const germany = describeCountry("Germany", 50, "Berlin");
// console.log(poland, finland, germany)

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const poland = percentageOfWorld1(40)
// console.log(poland);

// const calcPercentage = function (populaiton) {
//     return (populaiton / 7900) * 100;
// }

// console.log(calcPercentage(40))

const calcPercentage2 = populaiton => (populaiton / 7900) * 100;

// console.log(calcPercentage2(40))

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return console.log(`${country} has ${population} milion people wich is about
//     ${percentage} of the world`)
// }

// describePopulation('Poland', 40);
// describePopulation('China', 1441)
// describePopulation('Finland', 15);

//const countries = ["Poland", "China", "Finland", "Germany"]
// if (countries.length == 4) console.log("has 4 elements")
// else console.log("dont have")

// const percentages = [calcPercentage2(40), calcPercentage2(1444), calcPercentage2(14), calcPercentage2(50)]
// console.log(countries, percentages);

//const neighbours = ["Germany", "Czechia", "Belarus", "Russia", "Ukraine", "Slovakia"];
// console.log(neighbours)
// neighbours.push("Utopia")
// console.log(neighbours);
// neighbours.pop()
// console.log(neighbours);
// if (!neighbours.includes("Germany")) console.log("Probably not a central European country :D")
// neighbours[neighbours.indexOf("Czechia")] = "Republic of Czechia"
// console.log(neighbours)

// const myCountry = {
//     country: "Poland",
//     capital: "Warsaw",
//     language: "Polish",
//     population: 40,
//     neighbours: neighbours,
//     describe: function () {
//         return console.log(`${this.country} has ${this.population} milion
//         ${this.language}-speaking people, ${this.neighbours.length}
//         neighbouring countries and a capital called ${this.capital}`)
//     },
//     checkIsIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// }

// myCountry.describe();
// myCountry.population += 2
// console.log(myCountry.population)
// myCountry["population"] -= 2
// console.log(myCountry.population)
// myCountry.checkIsIsland();
// console.log(myCountry);

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

// const populations = [10, 1441, 332, 83];
// const array = [];
// for (let i = 0; i < populations.length; i++) {
//     const value = calcPercentage2(populations[i]);
//     array.push(value);
// }
// console.log(array);

// const listOfNeighbours = [[`Canada, Mexico`], [`Spain`], [`Norway`, 'Sweden', `Russia`]]
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[j]}`)
//     }
// }

// const populations = [10, 1441, 332, 83];
// const array = [];
// let i = 0;
// while (i < populations.length) {
//     const value = calcPercentage2(populations[i])
//     array.push(value);
//     i++
// }
// console.log(array)

// coding challange #1

// const scoreKoalas = [44, 23, 71];
// const scoreDolphins = [65, 54, 27]
// const calcAverage = array => (array[0] + array[1] + array[2]) / 3;
// const pointsKoalas = calcAverage(scoreKoalas)
// console.log(pointsKoalas)
// const pointsDolphins = calcAverage(scoreDolphins)
// console.log(pointsDolphins)
// function checkWinner(pointsDolphins, pointsKoalas) {
//     if (pointsDolphins > 2 * pointsKoalas) console.log(`Dolphins win(${pointsDolphins} vs. ${pointsKoalas})`)
//     else if (pointsDolphins < 2 * pointsKoalas) console.log(`
//     Koalas win(${pointsDolphins} vs. ${pointsKoalas}`)
//     else console.log("Its a draw")
// }
// checkWinner(pointsDolphins, pointsKoalas)

//coding challange #2

// function calcTip(bill) {
//     let tip = 0;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15
//     }
//     else tip = bill * 0.2
//     return tip
// }
// let bills = [125, 555, 44]
// let tips = [];

// bills.forEach(element => {
//     let i = calcTip(element)
//     tips.push(i)
// });

// console.log(tips)
// let total = []

// for (let i = 0; i < tips.length; i++) {
//     total[i] = bills[i] + tips[i]
// }
// console.log(total)

//coding challange #3

// let mark = {
//     firstName: "Mark",
//     secondName: "Miller",
//     weight: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//     }
// }

// let john = {
//     firstName: "John",
//     secondName: "Smith",
//     weight: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//     }
// }
// john.calcBmi()
// mark.calcBmi()
// if (john.bmi > mark.bmi) {
//     console.log(`${john.firstName}(${john.bmi}) bmi is higher that
//     ${mark.calcBmi}(${mark.bmi})`)
// }
// else console.log(`${john.firstName}(${john.bmi}) bmi is lower that
// ${mark.firstName}(${mark.bmi})`)

// coding challange #4

// function calcTip(bill) {
//     let tip = 0;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15
//     }
//     else tip = bill * 0.2
//     return tip
// }
// let bills = [125, 555, 44]
// let tips = [];

// bills.forEach(element => {
//     let i = calcTip(element)
//     tips.push(i)
// });

// console.log(tips)
// let total = []

// for (let i = 0; i < tips.length; i++) {
//     total[i] = bills[i] + tips[i]
// }
// console.log(total)

// function calcAverage(arr) {
//     let sum = 0
//     let average = 0;
//     arr.forEach(element => {
//         sum += element
//         average = sum / arr.length
//     });
//     return average
// }
// console.log(calcAverage(total))


