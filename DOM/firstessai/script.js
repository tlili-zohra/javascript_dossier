console.log("Hiiiiiiiiiiiii");
const title = document.querySelector("div");
console.log(title);
const soustitre = document.getElementsByClassName("sous");
console.log(soustitre.textContent);
const soustitre2 = document.querySelector(".sous");
console.log(soustitre2.textContent);
const soustitre3 = document.querySelector(".sous");
console.log(soustitre3.innerHTML);
const soustitre4 = document.querySelector(".sous");
soustitre4.textContent = "Dom Elements";

soustitre4.style.color = "red";
soustitre4.style.fontSize = "48px";
soustitre4.addEventListener("mouseover", function () {
  soustitre4.style.color = "gray";
});
soustitre4.addEventListener("mouseleave", function () {
  soustitre4.style.color = "red";
});

const img1 = document.querySelector("img");

img1.src = "";
img1.alt = "product";

const img2 = document.querySelector("img");

img2.src = "product.png";
img2.alt = "product";
img2.style.width = "50px";
img2.style.flex = "flex";
img2.style.alignItems = "center";

const heading = document.createElement("h1");
heading.textContent = "DOM";
heading.style.color = "blue";
const parent = document.getElementById("parent");

parent.appendChild(heading); //ajouter un element
parent.removeChild(img2);

const newelemnt = document.createElement("div");
newelemnt.textContent = "Well";
const sec = parent.children[2];

parent.insertBefore(newelemnt, sec); // ajout un elment dans un position befor or after autre elemnt dans le document

const btn = document.createElement("button");
btn.textContent = "Click me";

parent.appendChild(btn);

btn.addEventListener("click", function () {
  soustitre4.textContent = "Button clicked";
  soustitre4.style.color = "blue";
  parent.removeChild(newelemnt);
});
