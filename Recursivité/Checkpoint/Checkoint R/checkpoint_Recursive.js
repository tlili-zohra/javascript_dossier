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
//for exemple
//change the age
const age = 15;
const price = TicketPrice(age);
console.log("Ticket price :", price, "DT");

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

  if (isRaining) {
    advice += " || And don't forget your umbrella or raincoat!";
  } else {
    advice += " || No Need the umbrella or raincoat !";
  }

  return advice;
}
const temperature = 25; //change the number
const isRaining = true; //or change it to : true
console.log(clothingAdviser(temperature, isRaining));

////////////////////////////////////////////////////////////////

//Recursion: ( choose at least 2 tasks from below)

//1st task: Fibonacci Sequence:
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const n = 6;
console.log("Fibonacci number at position " + n + " is " + fibonacci(n));

//2nd task : Power Function:
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
const base = 2;
const exponent = 5;
console.log(`the Power of ${base} ^ ${exponent} = ${power(base, exponent)}`);
