class Note {
  constructor(text, checked = false) {
    this.text = text;
    this.checked = checked;
  }
  toggleChecked() {
    /*if (this.checked === true) {
      return false;
    } else {
      return true;
    }*/
    this.checked = !this.checked;
  }
}
class NotesApp {
  /*constructor(notesList = []) {
    this.notesList = notesList;
  }*/
  constructor() {
    this.notesList = this.loadFromLocalStorage();
  }
  addNote(text) {
    if (text.trim() !== "") {
      this.notesList.push(new Note(text));
      this.saveToLocalStorage();
      //text = "";
    }
    this.renderNotes();
  }
  deleteNote(index) {
    this.notesList.splice(index, 1);
    this.saveToLocalStorage();
    this.renderNotes();
  }
  toggleNote(index) {
    this.notesList[index].toggleChecked();
    this.saveToLocalStorage();
    this.renderNotes();
  }
  saveToLocalStorage() {
    localStorage.setItem("notesList", JSON.stringify(this.notesList));
  }
  loadFromLocalStorage() {
    // this.notesList = JSON.parse(localStorage.getItem("notesList")) || [];
    const savedNotes = JSON.parse(localStorage.getItem("notesList")) || [];
    this.notesList = savedNotes.map(
      (noteObj) => new Note(noteObj.text, noteObj.checked)
    );
    return this.notesList;
  }
  renderNotes() {
    const notes = document.getElementById("notes");
    notes.innerHTML = "";
    /*this.notesList.forEach((note, index) => {
      const li = document.createElement("li");
      li.onclick = () => this.toggleNote(index);
      li.classList.add(
        "flex",
        "justify-between",
        "border",
        "px-2",
        "py-1",
        "rounded",
        "border-red-900"
      );
      li.innerHTML = `
        <span class="${note.checked ? "line-through" : ""}">${
        note.text
      }</span>`;*/
    this.notesList.forEach((note, index) => {
      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "border",
        "px-2",
        "py-1",
        "rounded",
        "border-red-900"
      );

      li.addEventListener("click", () => this.toggleNote(index));

      const span = document.createElement("span");
      span.textContent = note.text;
      if (note.checked) {
        span.classList.add("line-through");
      } else {
        span.classList.remove("line-through");
        li.classList.toggle;
        //li.appendChild(span);
      }
      li.appendChild(span);

      /*<button class='bg-red-500/90 py-0.5 px-2 rounded text-white text-xs cursor-pointer' 
                type='button' 
                onclick='deleteNote(${index})'>delete</button>
      `;*/
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.classList.add(
        "bg-red-500/90",
        "py-0.5",
        "px-2",
        "rounded",
        "text-white",
        "text-xs",
        "cursor-pointer"
      );
      deleteButton.addEventListener("click", () => {
        //event.stopPropagation();
        this.deleteNote(index);
        this.toggleNote(index);
      });

      li.appendChild(deleteButton);
      notes.appendChild(li);
    });
  }
}

/*
const noteInput = document.getElementById("note");
const notenew = new Note();
const NotesApp2 = new NotesApp(notenew);
NotesApp2.addNote(noteInput.value);

NotesApp2.loadFromLocalStorage();
document
  .getElementById("form")
  .addEventListener("submit", (event) => NotesApp2.addNote(event));
document.addEventListener("DOMContentLoaded", () => NotesApp2.renderNotes());
*/

//right one
const noteInput = document.getElementById("note");
const NotesApp2 = new NotesApp();

NotesApp2.loadFromLocalStorage();
NotesApp2.renderNotes();

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault(); //which stops the form submission
  NotesApp2.addNote(noteInput.value);
  noteInput.value = ""; // Vider le champ après ajout
});
