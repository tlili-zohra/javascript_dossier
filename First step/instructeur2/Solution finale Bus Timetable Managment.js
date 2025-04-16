/* Problem: Bus Timetable Manager

Imagine you're building an app for a city's public transportation system.
The app manages bus schedules for different routes and helps users know
which buses are currently running. Each bus schedule is represented 
as an object containing the route name, departure time, and arrival time.

Questions:

1)Each bus schedule should be represented as an object with the following properties:
routeName (string): The identifier or name of the bus route.
departureTime (string): The scheduled departure time in "HH:MM" format.
arrivalTime (string): The scheduled arrival time in "HH:MM" format.

Since times are provided as strings, convert them into Date objects 
(using the current date) to perform time comparisons and arithmetic.
Hint: Use the .split(":") method to extract hours and minutes,
then set these on a new Date object.

2) Create a function addSchedule(timetable, schedule) that:
Validates the schedule (ensure the departure time is before the arrival time).
Converts the time strings into proper Date objects (keeping the same date
for all schedules).
Adds the schedule object to a timetable array.
Handles edge cases, such as invalid time formats (non-numeric values or
wrong format).

3) Create a function displayTimetable(timetable) that:
Sorts the bus schedules by departure time using the .sort() array method.
Iterates over the sorted array using a loop or array method (like .forEach()).
For each schedule:
Uses string methods to format the route name (e.g., capitalizing the first
letter of each word).
Uses math operations to calculate the travel duration in minutes by 
subtracting the departure time from the arrival time.
Uses date methods (e.g., .toLocaleTimeString()) to display departure 
and arrival times in a user-friendly format.
Logs a formatted list to the console. For example:

Route: Downtown Express
Departs: 08:30 AM | Arrives: 09:15 AM | Duration: 45 minutes

4) Create a function checkActiveBuses(timetable) that:
Retrieves the current system time.
Loops through the timetable array and compares the current time with 
each schedule's departure and arrival times.
Logs the details of buses that are currently en route (i.e., current 
time is between departure and arrival). */

const timetable = [];

// 2) Create a function addSchedule(timetable, schedule)

function addSchedule(timetable, schedule) {
  let [departureHour, departureMinute] = schedule.departureTime
    .split(":")
    .map(Number);
  let [arrivalHour, arrivalMinute] = schedule.arrivalTime
    .split(":")
    .map(Number);

  if (
    departureHour < 0 ||
    departureHour >= 24 ||
    arrivalHour < 0 ||
    arrivalHour >= 24 ||
    departureMinute < 0 ||
    departureMinute >= 60 ||
    arrivalMinute < 0 ||
    arrivalMinute >= 60
  ) {
    return "time format invalid";
  }

  let departureTime = new Date();

  departureTime.setHours(departureHour);
  departureTime.setMinutes(departureMinute);

  let arrivalTime = new Date();
  arrivalTime.setHours(arrivalHour);
  arrivalTime.setMinutes(arrivalMinute);

  schedule.departureTime = departureTime;
  schedule.arrivalTime = arrivalTime;

  console.log(schedule);
  if (departureTime < arrivalTime) {
    timetable.push(schedule);
    return timetable;
  } else return "departureTime must be before arrivalTime";
}
addSchedule(timetable, {
  routeName: "nabeul,menzel tmim",
  departureTime: "09:00",
  arrivalTime: "11:10",
}),
  addSchedule(timetable, {
    routeName: "nabeul, korba",
    departureTime: "16:30",
    arrivalTime: "17:30",
  }),
  addSchedule(timetable, {
    routeName: "nabeul, zaghouen",
    departureTime: "10:00",
    arrivalTime: "12:00",
  }),
  console.log(timetable);
// 3) Create a function displayTimetable(timetable)

function capitalize(text) {
  return text
    .split(",")
    .map(function (word) {
      word = word.trim();
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function calcDuration(time1, time2) {
  return Math.floor(
    Math.abs((time1.getTime() - time2.getTime()) / (1000 * 60)),
  );
}

function displayTimetable(timetable) {
  let sortedTimetable = timetable.sort(function (a, b) {
    return a.departureTime - b.departureTime;
  });
  return sortedTimetable.map(function (ele) {
    return `Route : ${capitalize(ele.routeName)}
        Departs : ${ele.departureTime.toLocaleTimeString("en-EN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })} | Arrives : ${ele.arrivalTime.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })} | Duration : ${calcDuration(ele.departureTime, ele.arrivalTime)} minutes`;
  });
}
console.log(displayTimetable(timetable));

// 4) Create a function checkActiveBuses(timetable)

function checkActiveBuses(timetable) {
  const now = new Date();
  const ActiveBuses = timetable.filter(function (bus) {
    return bus.departureTime <= now && bus.arrivalTime > now;
  });
  return ActiveBuses.map(function (ele) {
    return `Route : ${capitalize(ele.routeName)}
        Departs : ${ele.departureTime.toLocaleTimeString("en-EN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })} | Arrives : ${ele.arrivalTime.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })} | Duration : ${calcDuration(ele.departureTime, ele.arrivalTime)} minutes`;
  });
}
console.log(checkActiveBuses(timetable));
