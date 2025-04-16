function printN(n) {
  if (n == 0) {
    return;
  }
  printN(n - 1);
  console.log(n);
}

/*
Stack : 
printN(1) => console.log(1) 1
printN(2) => console.log(2) 2
printN(3) => console.log(3) 3
printN(4) => console.log(4) 4
printN(5) => console.log(5) 5
*/

printN(5);
