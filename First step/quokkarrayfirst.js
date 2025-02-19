let array = new Array();
array.push(1, 2, 3, 4, 5, 6, 7, 8);

console.log(array);

array.pop();

console.log(array);

array.shift();

console.log(array);

array.unshift(1);

console.log(array);

/*array.splice(1)

array.splice(start,deleteCount,item1,item2)

console.log(array)

let arr = array.slice(2,6);*/

console.log(array);

array.splice(2, 4, 2, 2, 2, 2);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(function (ele) {
  ele += 1;
});
console.log(array);

let array1 = array.map(function (ele) {
  return (ele += 1);
});
array = array1;
console.log(array);

array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);

array[2] = 4;

console.log(array);

array[2] = 3;

console.log(array);

let arrayDiv2 = array.filter(function (e) {
  return e % 2 == 0;
});
let fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];
let arr = fruits.reduce(function (res, e) {
  res["banana"] = (res[e] || 0) + 1;
  return res;
}, {});
console.log(arr);
