let n = 10;
{
  let n = 2; // Block-scoped variable
  console.log(n);
}
console.log(n);

// Traditional function
const fn1 = function addFn(a, b) {
  return a + b;
};

// Arrow function
const fn2_1 = (a, b) => a + b;

const fn2_2 = (a, b) => {
  let A = a + 1;
  let B = b + 1;
  return A + B;
};

console.log(fn1(1, 2));
console.log(fn2_1(1, 2));
console.log(fn2_2(1, 2));

// Destructuring Assignment Obj

const obj1 = { name: "Raj", age: 25, cin: "14526325" };
const obj2 = { cin: "1526325", fullname: "Arrow" };
const { name, age, cin } = obj1;

const { cin: cin2, fullname } = obj2;
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(name, age, cin);
console.log(cin2, fullname);

// Destructuring Assignment Array

const a = ["red", "blue", "green"];
const [first, , green] = a;

const second = a[1];
console.log(first, green);

// Array of PC objects

const pcs = [
  { brand: "Dell", model: "XPS 15", price: 1500 },
  { brand: "HP", model: "Spectre x360", price: 1400 },
];
// Extracting properties from pc1 and phone1
pcs.forEach((pc, i) => {
  const { brand, model, price } = pc;
  console.log(`PC ${i}: ${brand} ${model} costs $${price}`);
});

// Array of Phone objects
const phones = [
  { brand: "Samsung", model: "Galaxy S21", price: 800 },
  { brand: "Apple", model: "iPhone 13", price: 1000 },
];

// Destructuring the first PC and first Phone object
const [phone1, phone2] = phones; // Destructure Phone objects

const { brand: phoneBrand1, model: phoneModel1, price: phonePrice1 } = phone1;
const { brand: phoneBrand2, model: phoneModel2, price: phonePrice2 } = phone2;

console.log(`Phone 1: ${phoneBrand1} ${phoneModel1} costs $${phonePrice1}`);
console.log(`Phone 2: ${phoneBrand2} ${phoneModel2} costs $${phonePrice2}`);

const n1 = [1, 2, 3];
const n2 = [...n1, 4, 5];
console.log(n2);

function greetfn(name = "Guest") {
  return `Hello, ${name}!`;
}
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Youssef"));

let str = "Welcome to GeeksforGeeks.";
let check = str.includes("Geeks");
console.log(check);

let str1 = "Welcome to GeeksforGeeks. The code checks if the string";
let check1 = str1.includes("if", str1.indexOf("The"));
console.log(check1);

let str3 = "Welcome to GeeksforGeeks.";
let check3 = str3.startsWith("Welcome to GeeksforGeeks");
console.log(check3);

let str4 = "Welcome to GeeksforGeeks";
let check4 = str4.endsWith("GeeksforGeeks");
console.log(check4);

// (condition) ? (if true, do this) : (otherwise, do this)
/* condition1 ? result1 
  : condition2 ? result2 
  : condition3 ? result3 
  : defaultResult;
*/

const score = 85;

const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(`Grade: ${grade}`);

const userRole = "admin";
const login = false;
const accessLevel =
  userRole === "admin" && login === true
    ? "Full Access"
    : userRole === "editor" && login === true
    ? "Edit Access"
    : userRole === "viewer"
    ? "Read-Only Access"
    : "No Access";

console.log(`Access Level: ${accessLevel}`);

const sum = n2.reduce((sum, num) => sum + num);
console.log(sum);
