//Decision Making (if-else and switch): ( choose at least 2 tasks from below)

//1st Task : Ticket Pricing
function TicketPrice(age) {
  /* if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else {
    return 20;
  }*/
  switch (true) {
    case age <= 12:
      return 10;
    case age >= 13 && age <= 17:
      return 15;
    default:
      return 20;
  }
}
//
//with simple prompt
/*
const age = parseInt(prompt("Enter You Age:"));
const price = TicketPrice(age);
console.log("Ticket price :", price, "DT");
*/
//affiche with html page
function handleTicketPrice() {
  const age = parseInt(prompt("Enter your age:"));
  if (!isNaN(age)) {
    const price = TicketPrice(age);
    alert(`Ticket price: ${price} DT `);
  } else {
    alert("Please enter a valid number.");
  }
}

//2nd Task : Weather Clothing Adviser
function clothingAdviser(temperature, isRaining) {
  let advice = "";

  if (temperature < 10) {
    advice = "Wear a heavy coat, scarf, and maybe gloves.";
  } else if (temperature >= 10 && temperature < 20) {
    advice = "Wear a jacket or a warm sweater.";
  } else if (temperature >= 20 && temperature < 30) {
    advice = "A t-shirt and jeans should be fine.";
  } else {
    advice = "It's hot! Wear light clothes and stay hydrated.";
  }

  if (isRaining === "true") {
    advice += " || And don't forget your umbrella or raincoat!";
  } else {
    advice += " || No Need the umbrella or raincoat !";
  }

  return advice;
}
/*
//exemple in js
const temperature = parseInt(prompt("Enter the Temperature:")); //change the number
const isRaining = prompt("Enter true or false"); //or change it to : true
console.log(clothingAdviser(temperature, isRaining));
*/
//affiche with html page
function handleClothingAdviser() {
  const temperature = parseInt(prompt("Enter the temperature:"));
  const isRaining = prompt("Is it raining? (true/false)").toLowerCase();

  if (!isNaN(temperature) && (isRaining === "true" || isRaining === "false")) {
    const advice = clothingAdviser(temperature, isRaining);
    alert(`Clothing Advice: ${advice}`);
  } else {
    alert("Invalid input. Try again.");
  }
}
////////////////////////////////////////////////////////////////

//Recursion: ( choose at least 2 tasks from below)

//1st task: Fibonacci Sequence:
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
/*
//exemple with js
const n = 6;
console.log("Fibonacci number at position " + n + " is " + fibonacci(n));
*/
//affiche with html page
function handleFibonacci() {
  const n = parseInt(prompt("Enter Fibonacci position:"));
  if (!isNaN(n) && n >= 0) {
    const result = fibonacci(n);
    alert(`Fibonacci(${n}) = ${result}`);
  } else {
    alert("Enter a valid non-negative number.");
  }
}

//2nd task : Power Function:
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
/*
//exemple with js
const base = parseInt(prompt("Base :"));
const exponent = parseInt(prompt("Exponent:"));
console.log(`the Power of ${base} ^ ${exponent} = ${power(base, exponent)}`);
*/
//affiche with html page
function handlePower() {
  const base = parseInt(prompt("Enter base:"));
  const exponent = parseInt(prompt("Enter exponent:"));
  if (!isNaN(base) && !isNaN(exponent)) {
    const result = power(base, exponent);
    alert(`${base} ^ ${exponent} = ${result}`);
  } else {
    alert("Please enter valid numbers.");
  }
}
