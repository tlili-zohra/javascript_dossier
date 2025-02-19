const add = document.querySelector("input");

const btn = document.getElementById("addtask");
const listes = document.getElementById("liste");

btn.addEventListener("click", function () {
  const divparent = document.getElementById("liste");
  const utlliste = document.createElement("ul");
  const newelemnt = document.createElement("li");
  const btnsupprimer = document.createElement("button");
  const btnediter = document.createElement("button");

  utlliste.style.display = "flex";
  utlliste.style.flexDirection = "colomun";
  divparent.appendChild(utlliste);
  divparent.appendChild(newelemnt);
  divparent.style.display = "flex-wrap";
  divparent.style.flexDirection = "colomun";
  divparent.style.alignItems = "center";
  divparent.style.justifyContent = "space-between";
  newelemnt.textContent = add.value;
  add.value = "";
  /*
  const remove=document.createElemnt("button");
  remove.classList.add("remove"); // pour ajouter dans html comme class
  remove.textcontent="remove";
  newelemnt.appendchild(remove)
  divparent.appendChild( newelemnt)

*/
  divparent.appendChild(btnsupprimer);
  //newelemnt.innerHTML = "<button>Remove</button>";
  btnsupprimer.textContent = "Remove";
  btnsupprimer.style.background = "red";
  btnsupprimer.style.color = "white";

  btnsupprimer.addEventListener("click", function () {
    divparent.removeChild(newelemnt);
    divparent.removeChild(btnsupprimer);
    divparent.removeChild(btnediter);
  });
  divparent.appendChild(btnediter);
  btnediter.textContent = "Edite";
  btnediter.style.background = "blue";
  btnediter.style.color = "white";
  btnediter.addEventListener("click", function () {
    add.value = newelemnt.textContent;
    // test de return sur la meme position
  });
  newelemnt.addEventListener("click", function () {
    if (newelemnt.style.textDecoration == "line-through") {
      newelemnt.style.textDecoration = "none";
      newelemnt.style.color = "black";
    } else {
      newelemnt.style.textDecoration = "line-through";
      newelemnt.style.cursor = "pointer";
      newelemnt.style.color = "gray";
    }
  });
});

listes.addEventListener("click", function () {});
