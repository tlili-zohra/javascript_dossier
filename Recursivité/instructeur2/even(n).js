function even(n) {
  if (n == 1) {
    return false;
  }
  if (n == 0) {
    return true;
  }
  return even(n % 2);
}

/*
stack:
even(0) => true
even(6) => even(0)
*/

console.log(even(700));
