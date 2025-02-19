/* Filter Even Numbers

Given an array of numbers, return only the even numbers.

Example: [1, 2, 3, 4, 5, 6] → [2, 4, 6] */

let tab = [1, 2, 3, 4, 5, 6];

let Even_tab = tab.filter(function (num) {
  return num % 2 == 0;
});

Even_tab;

/* Filter Words Longer Than 5 Characters

Given an array of words, return only the words that have more than 5 characters.

Example: ["apple", "banana", "kiwi", "strawberry"] → ["banana", "strawberry"]*/

let fruits = ["apple", "banana", "kiwi", "strawberry"];

let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});

longFruits;

/* Sum of All Elements

Compute the sum of all numbers in an array.

Example: [1, 2, 3, 4] → 10 */

tab = [1, 2, 3, 4, 0, 9, 5];
let sum = tab.reduce(function (prev, current) {
  if (prev < current) return current;
  else return prev;
});

sum;

/*Find the Missing Number: Given an array of numbers from 1 to N with one missing, find the missing number.*/
tab = [1, 2, 4, 5, 6, 7, 8, 9, 11];

let missingNum = tab.reduce(function (missing, num, i) {
  console.log(num, i);
  if (num != i + 1 && missing == "no missing number") {
    return i + 1;
  } else return missing;
}, "no missing number");

missingNum;

/*Find the Missing Numbers: Given an array of numbers from 1 to N with multiple missings, find the missing numbers.*/

tab = [1, 2, 4, 5, 6, 7, 8, 9, 11];
let missingNums = [];
let decalage = 1;

for (let index = 0; index < tab.length; index++) {
  const element = tab[index];
  if (element != index + decalage) {
    missingNums.push(index + decalage);
    decalage += 1;
  }
}

missingNums;
// second methode
tab = [1, 2, 4, 5, 6, 7, 8, 9, 11];
missingNums = [];
let expected = tab[0];

for (const num of tab) {
  while (num > expected) {
    missingNums.push(expected);
    expected++;
  }
  expected++;
}

console.log(missingNums);

tab = [1, 2, 4, 5, 6, 7, 8, 9, 11];
dec = 1;
for (let index = 0; index < tab.length; index++) {
  const element = tab[index];
  if (element != index + dec) {
    tab.splice(index, 0, index + dec);
    decalage += 1;
  }
}
tab;
