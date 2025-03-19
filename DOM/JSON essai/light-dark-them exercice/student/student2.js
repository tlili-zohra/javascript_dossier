const nameinput = document.getElementById("name");
const ageinput = document.getElementById("age");
const degreeinput = document.getElementById("degree");

const listesli = document.getElementById("listes");
const students = JSON.parse(localStorage.getItem("student")) || [];

class StudentClass {
  constructor(name, age, degree) {
    this.name = name;
    this.age = age;
    this.degree = degree;
  }
}
class ListeStudent {
  constructor(listestudent = []) {
    this.listestudent = listestudent;
  }
  Ajouter(student) {
    this.listestudent.push(student);
  }
  removes(index) {
    this.listestudent.splice(index, 1);
    console.log(this.listestudent);
    // Removes a book from borrowedBooks.
    /*const existstudent = this.listestudent.filter((st) => st === student);
    console.log(existstudent);
    if (existstudent) {
      this.listestudent.splice(this.listestudent.indexOf(student), 1);
    }*/
  }
  loadfromstorage() {
    const savedNotes = students;
    this.listestudent = savedNotes.map(
      (noteObj) => new StudentClass(noteObj.name, noteObj.age, noteObj.degree)
    );
    return this.listestudent;
    /*return this.listestudent.map(
        (noteObj) => new StudentClass(noteObj.name, noteObj.age, noteObj.degree)
      );*/
  }
  saveToLocalStorage() {
    localStorage.setItem("student", JSON.stringify(this.listestudent));
    //return this.listestudent;
  }
  displayStudents() {
    listesli.innerHTML = ""; // Clear previous list
    this.listestudent.forEach((student, index) => {
      const li = document.createElement("li");
      li.textContent = `${student.name} - Age: ${student.age} - Degree: ${student.degree}`;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", () => {
        this.listestudent.splice(index, 1);
        li.remove();
        this.saveToLocalStorage();
      });
      // this.removes(index));

      li.appendChild(deleteBtn);
      listesli.appendChild(li);
    });
  }
}
const studentapp = new ListeStudent();
studentapp.loadfromstorage();
document.addEventListener("DOMContentLoaded", () => {
  // Charger les étudiants depuis le stockage local
  studentapp.loadfromstorage();
  studentapp.displayStudents();
  document.getElementById("form-student").addEventListener("submit", (e) => {
    e.preventDefault();
    const student = new StudentClass(
      nameinput.value.trim(),
      ageinput.value.trim(),
      degreeinput.value.trim()
    );
    studentapp.Ajouter(student);
    studentapp.saveToLocalStorage();
    studentapp.displayStudents();
    nameinput.value = "";
    ageinput.value = "";
    degreeinput.value = "";
  });
});
