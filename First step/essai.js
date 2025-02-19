console.log("5" != 3);
console.log("a" != "b");
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));

var x;
console.log(Boolean(x));
console.log(null === true);

var x = 1; // x is truthy
var y = 0; // y is falsey
var z = null; // z is falsey
console.log(x && y); // prints 0
console.log(z && y); // prints null
console.log(z || x); // prints 1
console.log(y || z); // prints null

console.log(!!NaN); // prints false
console.log(!!undefined); // prints false
console.log(!!Infinity); // prints true
console.log(!!5); // prints true

console.log(!!NaN);
console.log(6 >= !!Infinity);
console.log(!!NaN == !!undefined && 6 >= !!Infinity);

/*let x = 1 + 2 * 3;
let y = 2 * 3 + 1;

console.log(x);
console.log(y);
*/
