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

    let errors = [];

    // Reset styles before validation
    fullNameInput.style.outline = "";
    emailInput.style.outline = "";
    phoneInput.style.outline = "";
    birthdayInput.style.outline = "";
    passwordInput.style.outline = "";
    confirmPasswordInput.style.outline = "";

    // Validate full name
    if (
      fullName.length < 3 ||
      /[0-9]/.test(fullName) ||
      /[@$!%*?&]/.test(fullName) ||
      fullName.startsWith(" ")
    ) {
      errors.push("Full Name must be at least 3 characters.");
      //fullNameInput.style.borderBottom = "none";
      fullNameInput.style.outline = "1px solid red";
    }

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      errors.push("Invalid email format.");
      emailInput.style.outline = "2px solid red";
    }
    if (!email.includes("@") || email.indexOf(".") < email.indexOf("@")) {
      errors.push("Invalid email format. '.' must be after '@'.");
      emailInput.style.outline = "2px solid red";
    }

    // Validate phone number (+216 format)
    if (
      !phone.startsWith("+216") ||
      phone.length !== 12
      //||!/[^\+216\s?\d{8}$]/.test(phone) //regex
    ) {
      errors.push("Phone number must be in format +216 XXXXXXXX.");
      phoneInput.style.outline = "1px solid red";
    }

    // Validate age (at least 18 years old)
    if (new Date().getFullYear() - new Date(birthday).getFullYear() < 18) {
      errors.push("User must be at least 18 years old.");
      birthdayInput.style.outline = "1px solid red";
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
      errors.push(
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character."
      );
      passwordInput.style.outline = "1px solid red";
    }

    // Validate password match
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
      confirmPasswordInput.style.outline = "1px solid red";
    }

    // Show errors or submit form
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Registration Successful!");
      document.getElementById("registrationForm").reset();
    }
  });
