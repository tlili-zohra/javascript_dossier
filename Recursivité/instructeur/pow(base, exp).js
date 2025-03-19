function pow(base, exp) {
  if (exp == 0) {
    return 1;
  }
  return pow(base, exp - 1) * base;
}

/*
Stack : 
pow(2,0) => 1  
pow(2,1) => pow(2,0) * 2 = 1 * 2
pow(2,2) => pow(2,1) * 2 = 1 * 2 * 2
pow(2,3) => pow(2,2) * 2 =  1 * 2 * 2 * 2 = 8
*/

console.log(pow(2, 3));
