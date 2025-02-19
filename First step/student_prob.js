const students = [
  { name: "Zohra", ID: 1, attendance: false }, //0
  { name: "S2", ID: 2, attendance: false }, //1
  { name: "S3", ID: 3, attendance: false }, //2
];

function markPresent(id) {
  const student = students.find((student) => student.ID === id);
  if (student) {
    student.attendance = true;
  }
}

students;

markPresent(2);
markPresent(3);

//
students.forEach(function (s) {
  let id = s.id;
  if (id == 1 || id == 2) markPresent(id);
});
//present student
/*students.forEach((element) => {
  let id = element.ID;
  if (element.attendance == true) console.log(element, id);
});*/
const result = students.filter((students) => students.attendance); //filter return students true ou false (non return)
result;

//count present student
let presentCount = 0;
students.forEach((student) => {
  if (student.attendance) {
    presentCount++;
  }
});
presentCount;

//2éme essai
/*
const presentcount = students.reduce(function(present,s){
  if (s.attendance){ //par defaut s.attendance ==true
    return persent ++;
  }
  return present; 
},0)
presentcount;
*/

//absent student
students.forEach((element) => {
  let id = element.ID;
  if (element.attendance == false) console.log(element, id);
});

//remove a student from the system if they leave the class
/*function remove_system(id) {
  //const result = students.find(({ result }) => students.ID == id);
  const result = students.filter((students) => students.ID == id);
  let student_remove = result;
  student_remove
  return students.splice(student_remove.indexOf(..student_remove), 1);
  //return student_remove;
  //return student_remove.splice(student_remove.indexOf(id), 1);
}*/

/***** NOt trueeeeee */
/*function remove_system(id) {
  const result = students.filter((students) => students.ID == id);
  let student_remove = result;
  return students.splice(student_remove.indexOf(id), 1);
}
console.log(remove_system());
students;*/

/*Same erreur */
/*function remove_system(id) {
  const result = students.filter((students) => students.ID == id);
  let student_remove = result;
  return students.splice(student_remove.indexOf(id), 1);
}
console.log(remove_system());
students;*/
/*function remove_system(id) {
  const result = students.filter((students) => students.ID == id);
  let student_remove = result;
  student_remove;
  let index = students.indexOf(...student_remove);
  index;
  return students.splice(index, 1);
}
console.log(remove_system());
students;*/

/*True one */

function remove_system(id) {
  const result = students.filter((s) => s.ID == id); // find : un seul element (1st elmenet) and filter return tous les elements
  // on peut utliser findindex plus facile et supprimer indexof (...student_remove)
  let student_remove = result;
  student_remove;
  let index = students.indexOf(...student_remove); //sous forme objet
  index;
  return students.splice(index, 1);
}
console.log(remove_system(1));
students;

//add a new student to the class

//simple version
/*newobject = { name: "Zohra Tlili", ID: 4, attendance: true };
students.push(newobject);
students;*/

//par fonction
function addstudent(students) {
  let isthere = false;
}

//update a student's name if they change it
function update_name(id, name) {
  const student = students.find((student) => student.ID == id); //students.foreach(function(s){ if s.ID==id})
  if (student) {
    student.name = name;
  }
}
students;
update_name(4, "Tlili");
update_name(2, "s22");
students;
