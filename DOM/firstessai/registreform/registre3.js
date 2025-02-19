document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input fields
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const birthdayInput = document.getElementById("brithday");
    const passwordInput = document.getElementById("pwd");
    const confirmPasswordInput = document.getElementById("confirpwd");

    // Get values and trim spaces
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const birthday = birthdayInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Error msg
    const parentfullNameError = document.getElementById("fullNameError");
    const parentemailError = document.getElementById("emailError");
    const parentphoneError = document.getElementById("phoneError");
    const parentbrithdayError = document.getElementById("brithdayError");
    const parentpasswordError = document.getElementById("passwordError");
    const parentconfirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );
    const parentsuccessMessage = document.getElementById("successMessage");
    //parent.appendChild(heading); //ajouter un element
    //const heading = document.createElement("h1");
    //heading.textcontent="ffff"

    //let errors = [];

    // Réinitialisation des erreurs et des styles
    /*parentfullNameError.innerHTML = "";
    parentemailError.innerHTML = "";
    parentphoneError.innerHTML = "";
    parentbrithdayError.innerHTML = "";
    parentpasswordError.innerHTML = "";
    parentconfirmPasswordError.innerHTML = "";
    parentsuccessMessage.innerHTML = "";
*/
    let hasErrors = false;

    // Reset styles before validation
    fullNameInput.style.outline = "";
    emailInput.style.outline = "";
    phoneInput.style.outline = "";
    birthdayInput.style.outline = "";
    passwordInput.style.outline = "";
    confirmPasswordInput.style.outline = "";

    // msg des erreurs

    const msgfullNameError = document.createElement("p");
    const msgemailError = document.createElement("p");
    const msgemailError2 = document.createElement("p");
    const msgphoneError = document.createElement("p");
    const msgebrithdayError = document.createElement("p");
    const msgpasswordError = document.createElement("p");
    const msgconfirmPasswordError = document.createElement("p");
    const msgsuccessMessage = document.createElement("h1");
    //if (hasErrors) {
    // Validate full name
    if (
      fullName.length < 3 ||
      /[0-9]/.test(fullName) ||
      /[@$!%*?&]/.test(fullName) ||
      fullName.startsWith(" ")
    ) {
      //errors.push("Full Name must be at least 3 characters.");
      const msgfullNameError = document.createElement("p");
      msgfullNameError.textContent = "Full Name must be at least 3 characters.";
      msgfullNameError.style.color = "red";
      if (!parentemailError.children[0]) {
        parentfullNameError.appendChild(msgfullNameError);
        //fullNameInput.style.borderBottom = "none";
        fullNameInput.style.outline = "1px solid red"; //fullNameInput.classList.add("") ou bien fullNameInput.classList.remove("")
      }
      hasErrors = true;
    } else {
      //parentfullNameError.remove(msgfullNameError.innerHTML);
      parentfullNameError.innerHTML = "";
    }

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      //errors.push("Invalid email format.");
      //const msgemailError = document.createElement("p");
      msgemailError.textContent = "Invalid email format.";
      msgemailError.style.color = "red";
      if (!parentemailError.children[0]) {
        parentemailError.appendChild(msgemailError);
        emailInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentemailError.innerHTML = "";
      //parentemailError.remove(msgemailError.innerHTML);
    }
    if (!email.includes("@") || email.indexOf(".") < email.indexOf("@")) {
      //errors.push("Invalid email format. '.' must be after '@'.");
      //const msgemailError = document.createElement("p");
      msgemailError2.textContent =
        "Invalid email format. '.' must be after '@'.";
      msgemailError2.style.color = "red";
      if (!parentemailError.children[0]) {
        parentemailError.appendChild(msgemailError2);
        emailInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentemailError.innerHTML = "";
      //parentemailError.remove(msgemailError2.innerHTML);
    }

    // Validate phone number (+216 format)
    if (
      !phone.startsWith("+216") ||
      phone.length !== 13
      //||!/[^\+216\s?\d{8}$]/.test(phone) //regex
    ) {
      //errors.push("Phone number must be in format +216 XXXXXXXX.");
      //const msgphoneError = document.createElement("p");
      msgphoneError.textContent =
        "Phone number must be in format +216 XXXXXXXX.";
      msgphoneError.style.color = "red";
      if (!parentphoneError.children[0]) {
        parentphoneError.appendChild(msgphoneError);
        phoneInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentphoneError.innerHTML = "";
      //parentphoneError.remove(msgphoneError.innerHTML);
    }
    /* if with ? and :
(!phone.startsWith("+216") ||
      phone.length !== 13) ? (msgphoneError.textContent =
        "Phone number must be in format +216 XXXXXXXX." ,
      msgphoneError.style.color = "red",
      parentphoneError.appendChild(msgphoneError),
      phoneInput.style.outline = "1px solid red",
      hasErrors = true,) : parentphoneError.innerHTML = "";
*/
    // Validate age (at least 18 years old)

    //date est un type object
    if (new Date().getFullYear() - new Date(birthday).getFullYear() < 18) {
      //errors.push("User must be at least 18 years old.");
      //const msgebrithdayError = document.createElement("p");
      msgebrithdayError.textContent = "User must be at least 18 years old.";
      msgebrithdayError.style.color = "red";
      if (!parentbrithdayError.children[0]) {
        parentbrithdayError.appendChild(msgebrithdayError);
        birthdayInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentbrithdayError.innerHTML = "";
      //parentbrithdayError.remove(msgebrithdayError.innerHTML);
    }

    // Validate password strength
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[@$!%*?&]/.test(password) ||
      password.startsWith(" ")
    ) {
      /*errors.push(
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character."
      );*/
      //const msgpasswordError = document.createElement("p");
      msgpasswordError.textContent =
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
      msgebrithdayError.style.color = "red";
      if (!parentpasswordError.children[0]) {
        parentpasswordError.appendChild(msgpasswordError);
        passwordInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentpasswordError.innerHTML = "";
      //parentpasswordError.remove(msgpasswordError.innerHTML);
    }

    // Validate password match
    if (password !== confirmPassword) {
      //errors.push("Passwords do not match.");
      //const msgconfirmPasswordError = document.createElement("p");
      msgconfirmPasswordError.textContent = "Passwords do not match.";
      msgconfirmPasswordError.style.color = "red";
      if (!parentconfirmPasswordError.children[0]) {
        parentconfirmPasswordError.appendChild(msgconfirmPasswordError);
        confirmPasswordInput.style.outline = "1px solid red";
      }
      hasErrors = true;
    } else {
      parentconfirmPasswordError.innerHTML = "";
      //parentconfirmPasswordError.remove(msgconfirmPasswordError.innerHTML);
    }

    // Show errors or submit form
    if (!hasErrors) {
      //const msgsuccessMessage = document.createElement("h1");
      msgsuccessMessage.textContent = "Registration Successful!.";
      msgsuccessMessage.style.color = "blue";
      parentsuccessMessage.appendChild(msgsuccessMessage);
      document.getElementById("registrationForm").reset();
    } else {
      parentsuccessMessage.innerHTML = "";
    }
  });
