let date1 = new Date(); // date time of date1
date1;

year = date1.getFullYear();
year;

month = date1.getMonth() + 1;
month;

day = date1.getDate();
day;

weekday = date1.getDay() + 1;
weekday;

hour = date1.getHours();
hour;

minute = date1.getMinutes();
minute;

second = date1.getSeconds();
second;

console.log(year + "-" + month + "-" + day);
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString("fr-FR"));
console.log(
  date1.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
);
// "Wed Feb 05 2025"
console.log(date1.toDateString());
console.log(
  date1.toLocaleTimeString("en-EN", { year: "numeric", hour12: true })
);
console.log(date1.toString());
console.log(date1.toUTCString());

time = date1.getTime();
time;

let d = new Date(time);

d;

let date2 = new Date("2025-01-01");

date2;

date2.setDate(date2.getDate() + 70);

date2;

date2.setMonth(date2.getMonth() + 7);

date2;

diff = date2 - date1;

function compareDate(date1, date2) {
  if (date1 > date2) {
    return "date1 is greater than date2";
  } else if (date1 < date2) {
    return "date2 is greater than date1";
  } else {
    return "2 given dates are equal";
  }
}

console.log(compareDate(date1, date2));

console.log(Math.trunc(diff / (1000 * 60 * 60 * 24)));

console.log(1000 * 60 * 60 * 24);

/* Countdown to a Specific Event
Create a function that calculates how many days are left 
until New Year (December 31st).

console.log(daysUntilNewYear()); 
// Output: "330 days left until New Year"
Hint: Use getTime(), getDate(), and simple arithmetic
to calculate the difference.
*/

function daysUntilNewYear() {
  return (
    Math.trunc(
      Math.abs(new Date() - new Date("2025-12-31")) / (1000 * 60 * 60 * 24)
    ) + " days left until New Year"
  );
}

console.log(daysUntilNewYear());

/*
Store Opening Hours Validator
Create a function that checks if a given time falls within the store's opening hours (e.g., 9 AM to 5 PM).

Problem:

javascript
Copy
Edit
function isStoreOpen(currentTime) {
    // Your code here
}

console.log(isStoreOpen('14:00')); // Output: true
💡 Hint: Convert time to hours and compare it with the opening and closing hours.

*/

function isStoreOpen(currentTime) {
  const [hours] = currentTime.split(":").map(Number);
  /* [hours]: valeur de array d'indice hours
  map(Number) : map(fnction(ele){return Number(ele)}) 
   */
  hours;
  return hours;
}

console.log(isStoreOpen("14:10"));

const times = [12, 30, 45];
const [hours, minutes, seconds] = times;
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(_, minutes);

function isStoreOpenSystemTime(currentTime) {
  currentTime = new Date(currentTime);
  let openingTime = new Date();
  openingTime.setHours(9); // pour changer la valeur openingTime comme heure 9 //setHours pour convert aussi string to date
  let closingTime = new Date();
  closingTime.setHours(17);
  return openingTime < currentTime && currentTime < closingTime;
}

console.log(isStoreOpenSystemTime("2025-02-07T06:15"));
