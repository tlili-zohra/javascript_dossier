const fullname = document.getElementById("name");
const fullnameError = document.getElementById("fullnameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const dob = document.getElementById("dob");
const dobError = document.getElementById("dobError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirm = document.getElementById("confirm");
const confirmError = document.getElementById("confirmError");
const form = document.getElementById("registration-form");
const message = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  if (fullname.value.length < 3) {
    fullnameError.classList.remove("hidden");
    isValid = false;
  } else {
    fullnameError.classList.add("hidden");
  }

  /*fullname.value.length < 3
    ? (fullnameError.classList.remove("hidden"), (isValid = false))
    : fullnameError.classList.add("hidden");
*/
  let isEmailvalid =
    email.value.includes("@") &&
    email.value.includes(".", email.value.indexOf("@"));

  if (!isEmailvalid) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }
  /*const isValidPhone = (phone) => {
    const start = phone.startsWith("+216");
    const check = phone.slice(4).trim().length == 8;
    return start && check;
  };*/
  let isValidPhone =
    phone.value.startsWith("+216") && phone.value.slice(4).trim().length == 8;

  if (!isValidPhone) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }
  const isAgeValid = (dob) => {
    const today = new Date();
    const dobDate = new Date(dob);

    let age = today.getFullYear() - dobDate.getFullYear();

    if (dobDate.getMonth() > today.getMonth()) {
      age -= 1;
    }
    if (
      dobDate.getMonth() == today.getMonth() &&
      today.getDate() < dobDate.getDate()
    ) {
      age -= 1;
    }
    return age > 18;
  };

  if (!isAgeValid(dob.value)) {
    dobError.classList.remove("hidden");
    isValid = false;
  } else {
    dobError.classList.add("hidden");
  }
  const regPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPass = regPass.test(password.value.trim());

  if (!isValidPass) {
    passwordError.classList.remove("hidden");
    isValid = false;
  } else {
    passwordError.classList.add("hidden");
  }
  if (confirm.value !== password.value) {
    confirmError.classList.remove("hidden");
    isValid = false;
  } else {
    confirmError.classList.add("hidden");
  }

  if (isValid) {
    message.classList.remove("hidden");
    isValid = false;
  }
});
