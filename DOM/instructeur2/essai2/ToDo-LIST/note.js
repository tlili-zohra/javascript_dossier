const btn = document.getElementById("Add");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputUser = document.getElementById("NoteInput");
  if (inputUser.value.trim() !== "") {
    const items = document.getElementById("items");
    const item = document.createElement("li");
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "remove";
    item.textContent = inputUser.value.trim();
    item.appendChild(remove);
    items.appendChild(item);
    remove.addEventListener("click", function () {
      items.removeChild(item);
    });
    item.addEventListener("click", function () {
      if (item.style.textDecoration == "line-through") {
        item.style.textDecoration = "none";
        item.style.color = "black";
      } else {
        item.style.textDecoration = "line-through";
        item.style.cursor = "pointer";
        item.style.color = "gray";
      }
    });

    inputUser.value = "";
  }
});
