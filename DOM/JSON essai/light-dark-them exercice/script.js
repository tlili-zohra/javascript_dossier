document.addEventListener("DOMContentLoaded", themechange);
//const btn = document.getElementById("theme");
function themechange() {
  const btn = document.getElementById("theme-btn");
  const body = document.body;

  // Check LocalStorage for saved theme
  const savedTheme = JSON.parse(localStorage.getItem("theme"));

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  // Toggle theme on button click
  btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save the new theme in LocalStorage
    if (body.classList.contains("dark-mode")) {
      parslocalStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  });
}
