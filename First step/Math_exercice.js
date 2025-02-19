let nbr = 10.23;

let age1 = "25 years old";
let age2 = "age is 25";
let age3 = "25";

console.log(Number.parseInt(nbr));
console.log(Math.floor(nbr));
console.log(Math.trunc(nbr));
console.log(Number(nbr.toFixed(1)));
console.log(Number.parseFloat(nbr));
console.log(Number(nbr.toFixed()));
console.log(Number(nbr.toFixed(0)));
console.log(Math.pow(nbr, 2));

console.log(Number.parseInt(age1));
console.log(Number(age1));

console.log(Number.parseInt(age2));
console.log(Number(age2));

console.log(Number.parseInt(age3));
console.log(Number(age3));

console.log(Math.random());
console.log(Math.ceil(Math.random() * (1000 - 500)) + 500);
console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));

//random: Math.floor((Math.random()*(max-min+1)+1))

console.log(Math.min(15, 11, 8, 7, 20));
console.log(Math.max(15, 11, 8, 7, 20));

console.log("AHHF2".toString(10));

/* Conversion rate of 1 EUR=3.31
Conversts a given amount from EUR To TND
*/
function convertUSDtoEUR(amount) {
  const conversionRate = 3.31;
  let result = amount * conversionRate;
  return Number.parseFloat(result.toFixed(2));
}

console.log(convertUSDtoEUR(301));

/* Creat a Function simulates the roll of six-sided dice 
and returns a random integer between 1 and 6  */

function simulation_dice() {
  const dice = 6;
  let result = Math.random(dice);
  return Math.floor(Math.random() * (dice - 1 + 1) + 1);
}
console.log(simulation_dice());
