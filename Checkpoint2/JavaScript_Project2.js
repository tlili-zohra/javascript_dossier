//                               String Manipulation Functions:                    ///

//Reverse a String:
function Reverse(str) {
  let inverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverse += str[i];
  }
  return inverse;
}

console.log(Reverse("Zohra"));

//Count Characters:
function count_characters(str) {
  return str.length;
}
console.log(count_characters("Zohra"));

//Capitalize Words:
function Capitalize_word(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(Capitalize_word("zohra tlili"));

//                                 Array Functions:                                //

//Find Maximum and Minimum:

function max_min(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(max_min([3, 2, 7, 9, -1, 0]));

//Sum of Array:
function Sum_Array(arr) {
  return arr.reduce((sum, value) => (sum += value));
}

console.log(Sum_Array([3, 2, 7, 9, -1, 0]));

//Filter Array:

function filter_array(arr, condition) {
  return arr.filter(condition);
}

console.log(filter_array([3, 2, 7, 9, -1, 0], (num) => num > 2));

//                                 Mathematical Functions:                             //
//Factorial:
function factorial(num) {
  let fac = 1;
  if (num == 0 || num == 1) {
    fac = 1;
  }
  while (num > 1) {
    fac = fac * num;
    num = num - 1;
  }
  return fac;
}
console.log(factorial(6));

// Prime Number Check
function prime_checker(num) {
  let is_prime;
  if (num === 1) {
    is_prime = false;
  } else if (num === 2 || num === 3) {
    is_prime = true;
  } else if (num % 2 === 0) {
    is_prime = false;
  } else {
    let x = Math.floor(num / 2);
    while (x > 1) {
      if (num % x === 0) {
        is_prime = false;
        break;
      }
      x = x - 1;
      is_prime = true;
    }
  }
  return is_prime;
}
console.log(prime_checker(5));
console.log(prime_checker(7));
console.log(prime_checker(3));
console.log(prime_checker(2));
console.log(prime_checker(1));

//Fibonacci Sequence
function Fibonacci_Sequence(n) {
  let x = 1,
    y = 0,
    temp;
  if (n === 0) {
    return y;
  }
  while (n >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    n = n - 1;
  }
  return y;
}

console.log(Fibonacci_Sequence(5));
