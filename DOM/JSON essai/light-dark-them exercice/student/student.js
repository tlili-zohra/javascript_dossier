/*const nameinput = document.getElementById("name");
const ageinput = document.getElementById("age");
const degreeinput = document.getElementById("degree");

const listesli = document.getElementById("listes");
const students = JSON.parse(localStorage.getItem("student")) || [];*/
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
  removes(student) {
    // this.listestudent.splice(index, 1);
    // Removes a book from borrowedBooks.
    const existstudent = this.listestudent.filter((st) => st === student);
    //const existBook = this.borrowedBooks.includes(book);
    console.log(existstudent);
    if (existstudent) {
      this.listestudent.splice(this.listestudent.indexOf(student), 1);
    }
  }
  loadfromstorage() {
    //const savedNotes = students;
    /*this.listestudent = savedNotes.map(
      (noteObj) => new StudentClass(noteObj.name, noteObj.age, noteObj.degree)
    );
    return this.listestudent;*/
    return this.listestudent.map(
      (noteObj) => new StudentClass(noteObj.name, noteObj.age, noteObj.degree)
    );
  }
  saveToLocalStorage() {
    // localStorage.setItem("student", JSON.stringify(this.listestudent));
    return this.listestudent;
  }
}

const st1 = new StudentClass("zohra", 25, "100%");
const st2 = new StudentClass("zohra", 30, "50%");
const st3 = new StudentClass("zohra", 40, "80%");

const listestudent = new ListeStudent();
listestudent;
listestudent.Ajouter(st2);
listestudent.Ajouter(st3);

console.log(listestudent);
console.log(listestudent.saveToLocalStorage());
console.log(listestudent.loadfromstorage());
listestudent.removes(st2);
console.log(listestudent.saveToLocalStorage());
console.log(listestudent);
/*document.getElementById("form-student").addEventListener("click", (e) => {
  e.preventDefault();
});
*/
