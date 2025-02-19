/*Create a function that converts a given amount from EUR to TND
with a conversion rate of 1 EUR = 3.31 TND.The result should have 
exactly two decimal places.*/

function convertion(euro) {
  const rate = 3.31;
  return Number.parseFloat((euro * rate).toFixed(2));
}

console.log(convertion(500));

/*Create a function that simulates the roll of a six-sided dice 
and returns a random integer between 1 and 6.*/

function dice() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

console.log(dice());

/*  Body Mass Index (BMI) Calculator
🔹 Create a function that calculates BMI given a person's weight (in kg) and height (in meters). Return the BMI rounded to one decimal place and categorize it as:

"Underweight" if BMI < 18.5
"Normal weight" if 18.5 ≤ BMI < 25
"Overweight" if 25 ≤ BMI < 30
"Obese" if BMI ≥ 30 

function calculateBMI(weight, height) {
    // Your code here
}

console.log(calculateBMI(70, 1.75)); // Output: "22.9 (Normal weight)"
console.log(calculateBMI(95, 1.8));  // Output: "29.3 (Overweight)"

*/
