// sum de n=5
function somme(n) {
  if (n == 1) {
    return 1; //return n;
  } else {
    return n + somme(n - 1);
  }
  /*if (n > 1) {
    return n + somme(n - 1);
  }*/
}
console.log(somme(5));

// print all number
function print(n) {
  if (n == 1) {
    return n;
  } else {
    return n + "," + print(n - 1);
  }
}
console.log(print(4));

// Reverse a String
function reverse(ch) {
  if (ch.length === 0) {
    return ch;
  } else {
    return ch[ch.length - 1] + reverse(ch.slice(ch, -1));
  }
}
console.log(reverse("hello"));

// Find the Power of a Number
function compter(base, exp) {
  if (base == 0) {
    return 0;
  } else if (exp == 0) {
    return 1;
  } else {
    return base * compter(base, exp - 1);
  }
}
console.log(compter(2, 4));

//number even
/*function even(n) {
  if (n > 0) {
    return even(n % 2 != 0);
  } else {
    return true;
  }
}
console.log(even());*/
//ou bien
//Check if a Number is Even
function even(n) {
  if (n == 0) return true;
  if (n == 1) return false;
  return even(n % 2);
}
console.log(even(14));

//Sum Elements in an Array
function sommearray(array) {
  if (array.length == 0) {
    return 0;
  } else {
    return array[array.length - 1] + sommearray(array.splice(array[0]));
  }
}
console.log(sommearray([1, 2, 3]));
