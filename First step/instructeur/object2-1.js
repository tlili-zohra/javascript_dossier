const person = {
  firstname: "youssef",
  lastname: "gmati",
  age: 20,
  isGraduated: false,
  sayHello: function () {
    return "hello " + this.firstname + " " + this.lastname;
  },
  fullname1: function () {
    return (
      "firstname is : " + this.firstname + " and lastname is : " + this.lastname
    );
  },
  fullname2: function () {
    return `firstname is : ${this.firstname} and lastname is : ${this.lastname}`;
  },
};

console.log(person.firstname);
/*Object.defineProperty(person, "firstname", {
  writable: false,
});*/

Object.defineProperties(person, {
  firstname: { writable: false },
  lastname: { writable: false },
});
delete person.firstname;
delete person.lastname;

console.log(Object.keys(person));
person.firstname = "mazen";
person.lastname = "chaouch";

console.log(person.firstname);
console.log(person.lastname);

console.log(person.fullname2());
person;

console.log(person.hasOwnProperty("age"));

person;

console.log(person.sayHello());

console.log(person.age);
console.log(person["age"]);

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

person.lastname = "ben amor";

console.log(person.lastname);

Object.keys(person).forEach(function (prop) {
  Object.defineProperty(person, prop, {
    writable: false,
    enumerable: false,
    configurable: false,
  });
});

person.age = 30;

console.log(person.age);

//Object.freeze(person); // on peut pas modifier ou supprimer

person.age;

console.log(person.age);

console.log(Object.getOwnPropertyDescriptor(person, "age"));
console.log(Object.getOwnPropertyDescriptor(person, "firstname"));

console.log(Object.is("2", 2));
console.log(Object.is(NaN, NaN));
console.log(Object.is(2, 2));

person;

let Arr = Object.entries(person);
let obj = Object.fromEntries(Arr); //return a table to object
console.log(obj);

let arrperson = [
  ["fullname", "Tlili Zohra"],
  ["age", 25],
];
let objectPerson = Object.fromEntries(arrperson);

objectPerson;

Object.preventExtensions(objectPerson); //on peut pas ajouter
objectPerson.isGraduated = true;
objectPerson;

console.log(Object.isExtensible(objectPerson));
console.log(Object.isExtensible(person));

const cart = [
  { name: "Laptop", price: 1000 }, //0
  { name: "Mouse", price: 50 }, //1
  { name: "Keybord", price: 80 }, //2
];

console.log(cart[1].price);
/*sum = 0;
cart.forEach((item) => {
  let sum = cart.reduce((item) => {
    return (sum = sum + item.price);
  });
  console.log(sum);
});*/
