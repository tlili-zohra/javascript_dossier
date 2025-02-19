/*
You are a teacher managing student attendance in a digital system. You need to:

- Store student information (name, ID, and attendance status).
- Mark a student as present.
- Get a list of all students who are present.
- Count how many students are present.
- Get a list of absent students.
- Remove a student from the system if they leave the class.
- Add a new student to the class.
- Update a student’s name if they change it.
*/

const students = [
  { id: 10, name: "marwen", att: false },
  { id: 11, name: "youssef", att: false },
  { id: 12, name: "zahra", att: false },
  { id: 13, name: "marwen", att: false },
  { id: 14, name: "youssef", att: false },
  { id: 15, name: "zahra", att: false },
];
console.log();
//Mark a student as present.
function markAttendence(id) {
  const student = students.find(function (student) {
    return student.id == id;
  });
  if (student) {
    student.att = true;
  }
}

students.forEach(function (s) {
  let id = s.id;
  if (id == 11 || id == 15) markAttendence(id);
});
students;
//Get a list of all students who are present.
function presentStudents() {
  return students.filter(function (student) {
    return student.att;
  });
}

const presentStudent = presentStudents();
presentStudent;
//Count how many students are present.

let countPresents = 0;
students.forEach(function (s) {
  if (s.att === true) {
    countPresents++;
  }
});
countPresents;
function countPresence() {
  return students.reduce(function (present, s) {
    if (s.att) {
      return present + 1;
    }
    return present;
  }, 0);
}
const counter = countPresence();
counter;
//Get a list of absent students.
function absentStudents() {
  return students.filter(function (s) {
    return !s.att;
  });
}
const absentStudent = absentStudents();
absentStudent;
//Remove a student from the system if they leave the class.
function removeS(id) {
  const student = students.findIndex(function (s) {
    return s.id == id;
  });
  students.splice(student, 1);
}
removeS(15);

students;
//Add a new student to the class.
function addStudent(student) {
  let isThere = false;
  students.forEach(function (s) {
    if (s.id == student.id) {
      isThere = true;
    }
  });
  if (!isThere) {
    students.push(student);
    return " student added succesfully";
  } else {
    student.id = students[students.length - 1].id + 1;
    students.push(student);
    return " student added succesfully";
  }
}
students;
addStudent({ id: 17, name: "ali", att: false });
students;
//Update a student’s name if they change it.
function changeName(id, name) {
  students.forEach(function (s) {
    if (s.id === id) {
      s.name = name;
    }
  });
}
students;
changeName(17, "islem");
students;
