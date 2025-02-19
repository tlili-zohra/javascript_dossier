document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthday = document.getElementById("brithday").value;
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("confirpwd").value;

    let errors = [];

    // Reset styles before validation
    fullName.style.outline = "";
    email.style.outline = "";
    phone.style.outline = "";
    birthday.style.outline = "";
    password.style.outline = "";
    confirmPassword.style.outline = "";

    //if (fullName.value !=""){
    if (fullName.length < 3) {
      /*fullName.addEventListener("focus", function () {
        fullName.style.borderBottom = "none";
        fullName.style.outline = "2px solid red";
      });*/
      errors.push("Full Name must be at least 3 characters.");
      fullName.style.outline = "2px solid red";
    } else {
      fullName.style.outline = "2px solid green";
      /*fullName.addEventListener("focus", function () {
        fullName.style.borderBottom = "2px solid green";
      });*/
    }
    //  }
    if (!email.includes("@") || !email.includes(".")) {
      /* email.addEventListener("focus", function () {
        email.style.borderBottom = "2px solid red";
      });*/
      errors.push("Invalid email format.");
    } /*else {
      email.addEventListener("focus", function () {
        email.style.borderBottom = "2px solid green";
      });
    }*/

    if (!phone.startsWith("+216") || phone.length !== 12) {
      /*phone.addEventListener("focus", function () {
        phone.style.borderBottom = "2px solid red";
      });*/
      errors.push("Phone number must be in format +216 XXXXXXXX.");
    } /*else {
      phone.addEventListener("focus", function () {
        phone.style.borderBottom = "2px solid green";
      });
    }*/

    if (new Date().getFullYear() - new Date(birthday).getFullYear() < 18) {
      /*birthday.addEventListener("focus", function () {
        birthday.style.borderBottom = "2px solid red";
      });*/
      errors.push("User must be at least 18 years old.");
    } /*else {
      birthday.addEventListener("focus", function () {
        birthday.style.borderBottom = "2px solid green";
      });
    }*/

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[@$!%*?&]/.test(password)
    ) {
      errors.push(
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character."
      );
      /*password.addEventListener("focus", function () {
        password.style.borderBottom = "2px solid red";
      });*/
    } /*else {
      password.addEventListener("focus", function () {
        password.style.borderBottom = "2px solid green";
      });
    }*/

    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
      /*confirmPassword.addEventListener("focus", function () {
        confirmPassword.style.borderBottom = "2px solid red";
      });*/
    } /*else {
      confirmPassword.addEventListener("focus", function () {
        confirmPassword.style.borderBottom = "2px solid green";
      });
    }*/

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Registration Successful!");
      document.getElementById("registrationForm").reset();
    }
  });
