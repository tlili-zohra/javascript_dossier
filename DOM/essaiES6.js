let n = 10;
{
  let n = 2; // Block-scoped variable
  console.log(n);
}
console.log(n);

// si on change let to var

/*let x = 10;
{
  var x = 2; // Block-scoped variable
  console.log(x);
}
console.log(x);

*/
// Traditional function
function addfn(a, b) {
  return a + b;
}

// Arrow function
const addarrow = (a, b) => a + b;

//autre methode
//with founction
const fn = function addfn(a, b) {
  return a + b;
};
//with arrow
const fnar = (a, b) => a + b;

console.log(addfn(1, 2));
console.log(addarrow(1, 2));

console.log(fn(1, 2));
console.log(fnar(1, 2));
// avec arrow function
const fnar2 = (a, b) => {
  let A = a + 1;
  let B = b + 1;
  return A + B;
};

console.log(fnar2(1, 2));

//Destructuring Assignment object
const obj1 = { name: "Raj", age: 25, cin: "12345678" };
const obj2 = { cin: "12345678", fullname: "Arrrow" };
const { name, age, cin } = obj1;
const { cin: cin2, fullname } = obj2; //cin:rename with other name
console.log(name, age, cin);
console.log(cin2, fullname);

//Destructuring Assignment Array

const a = ["red", "blue", "green"];
const [first, second] = a;
const [first1, , third] = a; //ou bien  const [first1, _, third] = a;
console.log(first, second);
console.log(first1, third);

//The Spread (…) Operator
//with array
const n1 = [1, 2, 3];
const n2 = [...n1, 4, 5];
console.log(n2);

//with object
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // choisir cin of the last object
console.log(obj3.name);
console.log(obj3.fullname);
console.log(obj3.cin);
const obj4 = { ...obj1 };
obj4.cin2 = obj2.cin;
const obj5 = { ...obj1, ...obj2, ...obj4 };

console.log(obj5);

//Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet());
const greet1 = (name = "Guest") => `Hello, ${name}!`;
console.log(greet1("Zohra"));
//string.includes(searchvalue, start)
let str1 = "Welcome to GeeksforGeeks.";
let check = str1.includes("Geeks");
console.log(check);

//indexof
//let check2 = str1.includes("Geeks", indexOf("to"));
//console.log(check2);

//boolean startsWith(String prefix)
let str2 = "Welcome to GeeksforGeeks. The code is strat with";
let check3 = str2.startsWith("Geeks");
console.log(check3);

/*let check4 = str2.startsWith("code", indexOf("."));
console.log(check4);*/

//str.endsWith(searchString, length)
// Original string
let str = "Geeks for Geeks";

// Finding the search string in the
// given string
let value = str.endsWith("for", 9);
console.log(value);

//Oubien
let value2 = str.endsWith("for");
console.log(value2);

//oubien
//Oubien
let value3 = str.endsWith("Geeks."); // point erreur
console.log(value3);

//Find ()
//array.find(function(currentValue, index, arr), thisValue)
// Input array contain some elements.
let array = [-10, -0.2, 0.3, -40, -50];

// Method (return element > 0).
let found = array.find(function (element) {
  return element > 0;
});

// Printing desired values.
console.log(found);

//findindex
//array.findIndex(function(currentValue, index, arr), thisValue);
// input array contain some elements.
let array1 = [-10, -0.2, 0.3, -40, -50];

// function (return element > 0).
let found1 = array1.findIndex(function (element) {
  return element > 0;
});

// Printing desired values.
console.log(found1);

//if{} else {} with simple symbole if = ? else= :

/*if (str.startsWith("Welcom")) {
  return true;
} else {
  return false;
}*/
//condition simple : condition ? (if true ,do this ):(otherwise, do this)
const starts1 = str2.startsWith("Welcom") ? true : false;
console.log(starts1);

//condition multiple :
/*condition1 ? result1
:condition2 ? resulat2 
:condition3 ? resulat3
:defaultresulat; 
*/
const starts2 = str2.startsWith("Welcom")
  ? true
  : str.startsWith("is")
  ? true
  : str.endsWith("with")
  ? true
  : false;
console.log(starts2);
//condition multiple :
/*condition1 && condition2 ? result1
:condition3 || condition 4 ? resulat2 
:condition5 ? resulat3
:defaultresulat; 
*/
