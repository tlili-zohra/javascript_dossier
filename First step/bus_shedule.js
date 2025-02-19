//1)Creat an object bus
const busTime = [
  { routeName: "B3", departureTime: "15:00", arrivalTime: "17:30" },
  { routeName: "B2", departureTime: "11:00", arrivalTime: "13:30" },
  { routeName: "B1", departureTime: "06:15", arrivalTime: "13:30" },
];

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
  if (departureHour < arrivalHour) {
    timetable.push(schedule);
    return timetable;
  } else if ((departureHour = arrivalHour) && departureMinute < arrivalMinute) {
    timetable.push(schedule);
    return timetable;
  }
}

addSchedule(busTime, {
  routeName: "B5",
  departureTime: "5:00",
  arrivalTime: "7:30",
});

busTime;

function displayTimetable_v1(busTime) {
  /*const sortedBusTime = busTime.sort(function (a, b) {
    //sort par defaut prendre 2 valeurs a=B3 et b=B2
    const getTime = function (time) {
      if (time instanceof Date) return time.getTime();
      const [hours, minutes] = time.split(":").map(Number);
      return new Date(2025, 1, 7, hours, minutes).getTime();
    };
    return getTime(a.departureTime) - getTime(b.departureTime);
 });
    }*/
  const sortedBusTime = busTime.sort((a, b) => {
    const getTime = (time) => {
      if (time instanceof Date) return time.getTime(); // إذا كان Date نستخدمه مباشرة
      const [hours, minutes] = time.split(":").map(Number); // تقسيم الوقت "hh:mm"
      return new Date(2025, 1, 7, hours, minutes).getTime(); // تحويل إلى كائن Date
    };

    return getTime(a.departureTime) - getTime(b.departureTime);
  });
}

console.log(displayTimetable_v1(busTime));

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
  return Math.abs((time1.getTime() - time2.getTime()) / (1000 * 60));
}

function displayTimetable(timetable) {
  let sortedTimetable = timetable.sort(function (a, b) {
    return a.departureTime - b.departureTime;
  });
  return sortedTimetable.map(function (ele) {
    return `Route : ${capitalize(ele.routeName)}
          Departs : ${ele.departureTime.toString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })} | Arrives : ${ele.arrivalTime.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })} | Duration : ${calcDuration(ele.departureTime, ele.arrivalTime)} minutes`;
  });
}
//console.log(displayTimetable(timetable));

displayTimetable(busTime);
busTime;
