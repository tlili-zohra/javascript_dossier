let nbr = 10.25;
let age1 = "23 years old";
let age2 = "age is 23";
let age3 = "23";

console.log(Math.floor(nbr));
console.log(Number.parseFloat(nbr));
console.log(Math.trunc(nbr));
console.log(Number(nbr.toFixed()));

console.log(nbr.toFixed(1));

console.log(Math.pow(nbr, 2));

console.log(Number.parseInt(age1));
console.log(Number(age1));

console.log(Number.parseInt(age2));
console.log(Number(age2));

console.log(Number.parseInt(age3));
console.log(Number(age3));

console.log(Math.min(15, 11, 8, 7, 20));
console.log(Math.max(15, 11, 8, 7, 20));

console.log(nbr.toString(16));

min = 1;
max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// [1..10]
