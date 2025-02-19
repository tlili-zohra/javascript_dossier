let str = " hello, i'm web h i developer";

console.log(str.length - 1);
console.log(str[str.length - 1]);
console.log(str[7]);
console.log(str.charAt(7));

console.log(str.indexOf("i"));
console.log(str.indexOf("i", 8)); // start 8 indice
console.log(str.lastIndexOf("e"));

strh = str.replace(str[1], str[1].toUpperCase());
console.log(strh);

stri = str.replaceAll("i", "I");
console.log(stri);
stri = str.replaceAll(str[1], str[1].toUpperCase());
console.log(stri);

const slice = str.slice(str.indexOf("i"), str.length);
slice;

let str2 = "and i'm work with js";

let str3 = str.concat(" ", str2);
str3;

let arrayofstr = str3.split(",");
arrayofstr;

let arrayofstr2 = str3.split(" ");
arrayofstr2;

str4 = arrayofstr2.toString();
str4;

str4 = arrayofstr2.join(" ");
str4;
console.log(str4.includes("js"));

console.log(typeof str4);
console.log(typeof arrayofstr2);

console.log(str4.search("developer"));
console.log(str.indexOf("developer"));

ch = "hfhgf ghjgjhgj";
console.log(typeof ch);
