function sumN(n) {
  if (n == 1) return 1;
  return sumN(n - 1) + n;
}

/*
Stack : 
sumN(1) => 1
sumN(2) => 2 + sumN(1) = 2 + 1
sumN(3) => 3 + sumN(2) = 3 + 2 + 1
sumN(4) => 4 + sumN(3) = 4 + 3 + 2 + 1
sumN(5) => 5 + sumN(4) = 5 + 4 + 3 + 2 + 1 = 15
*/

console.log(sumN(5));
