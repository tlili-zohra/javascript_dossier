/*const fullname = document.getElementById("fullName");
const fullnameError = document.getElementById("fullnameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const carType = document.getElementById("carType");
const optionCarType = carType.options[carType.selectedIndex]; // get valeur de option selecter
const carTypeError = document.getElementById("carTypeError");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const dateError = document.getElementById("dateError");
const message = document.getElementById("success-message");
const totalCost = document.getElementById("totalCost");
const form = document.getElementById("registration-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  //Full name validation
  if (fullname.value.length < 3 || fullname.split(" ").length < 2) {
    fullnameError.classList.remove("hidden");
    fullname.style.outline = "1px solid red";
    isValid = false;
  } else {
    fullnameError.classList.add("hidden");
  }

  //Email validation
  if (
    !(
      email.value.includes("@") &&
      email.value.includes(".", email.value.indexOf("@"))
    )
  ) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }
  //phone number validation
  if (
    !(
      phone.value.startsWith("+216") &&
      phone.value.slice(4).trim().length == 8 &&
      /[0-9]/.test(phone)
    )
  ) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }
  // Car Type validation
  if (optionCarType.value == "" || carType === "") {
    carTypeError.classList.remove("hidden");
    isValid = false;
  } else {
    carTypeError.classList.add("hidden");
  }

  // Date validation
  // const start=new Date(startDate);
  // const end=new Date(endDate);
  if (new Date(endDate.value) < new Date(startDate.value)) {
    dateError.classList.remove("hidden");
    isValid = false;
  } else {
    dateError.classList.add("hidden");
  }
  if (isValid) {
    message.classList.remove("hidden");
    isValid = false;
  }
  //cost calculation : Total Cost = (End Date - Start Date) * Price per Day
  let days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  let totalCostcalcul = days * parseInt(optionCarType.value);
  totalCost.textContent = totalCostcalcul;
});
*/
const fullname = document.getElementById("fullName");
const fullnameError = document.getElementById("fullnameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const carType = document.getElementById("carType");
const optionCarType = carType.options[carType.selectedIndex]; // get valeur de option selecter
const carTypeError = document.getElementById("carTypeError");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const dateError = document.getElementById("dateError");
const message = document.getElementById("success-message");
const totalCost = document.getElementById("totalCost");
const form = document.getElementById("registration-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Full name validation
  if (fullname.value.trim().split(" ").length < 2) {
    //return de split is array of 2 string separated by " " []
    fullnameError.classList.remove("hidden");
    isValid = false;
  } else {
    fullnameError.classList.add("hidden");
  }

  // Email validation
  if (
    !(
      email.value.includes("@") &&
      email.value.includes(".", email.value.indexOf("@"))
    )
  ) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Phone number validation
  if (
    !(
      phone.value.startsWith("+216") && phone.value.slice(4).trim().length === 8
    )
  ) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  // Car Type validation
  if (carType.value == "none") {
    carTypeError.classList.remove("hidden");
    isValid = false;
  } else {
    carTypeError.classList.add("hidden");
  }

  // Date validation
  // Date validation
  if (!startDate.value || !endDate.value) {
    dateError.textContent = "Both Start Date and End Date must be selected.";
    dateError.classList.remove("hidden");
    isValid = false;
  } else if (new Date(endDate.value) < new Date(startDate.value)) {
    dateError.textContent = "End Date must be later than Start Date.";
    dateError.classList.remove("hidden");
    isValid = false;
  } else {
    dateError.classList.add("hidden");
  }
  /*const start = new Date(startDate);
  const end = new Date(endDate);
  if (end < start && (!start || !end)) {
    dateError.classList.remove("hidden");
    isValid = false;
  } else {
    dateError.classList.add("hidden");
  }*/

  // If form is valid
  if (isValid) {
    message.classList.remove("hidden");

    // Calculate Total Cost
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    let days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    ); // end.getTime() date object bech traj3lek b aymet
    let totalCostCalcul = days * parseInt(carType.value);
    totalCost.textContent = totalCostCalcul;

    // Tableau insert
    const reservations = document.getElementById("reservations");

    const tr = document.createElement("tr");

    // Full Name
    const td1 = document.createElement("td");
    td1.textContent = fullname.value;
    tr.appendChild(td1);

    // Email
    const td2 = document.createElement("td");
    td2.textContent = email.value;
    tr.appendChild(td2);

    // Phone
    const td3 = document.createElement("td");
    td3.textContent = phone.value;
    tr.appendChild(td3);

    // Car Type
    const td4 = document.createElement("td");
    td4.textContent = carType.options[carType.selectedIndex].text;
    tr.appendChild(td4);

    // Start Date
    const td5 = document.createElement("td");
    td5.textContent = startDate.value;
    tr.appendChild(td5);

    // End Date
    const td6 = document.createElement("td");
    td6.textContent = endDate.value;
    tr.appendChild(td6);

    // Total Cost
    const td7 = document.createElement("td");
    td7.textContent = totalCost.textContent;
    tr.appendChild(td7);

    // Actions (Delete & Edit Buttons)
    const td8 = document.createElement("td");

    const btn_delete = document.createElement("button");
    btn_delete.textContent = "Delete";
    btn_delete.classList.add(
      "bg-red-500",
      "text-white",
      "p-2",
      "rounded",
      "mr-2"
    );
    td8.appendChild(btn_delete);

    const btn_edit = document.createElement("button");
    btn_edit.textContent = "Edit";
    btn_edit.classList.add("bg-yellow-500", "text-white", "p-2", "rounded");
    td8.appendChild(btn_edit);

    tr.appendChild(td8);

    // Append the new row to the reservations table
    reservations.appendChild(tr);
    btn_delete.addEventListener("click", function () {
      reservations.removeChild(tr);
      //tr.remove(); // Remove the row on delete
    });
    btn_edit.addEventListener("click", () => {
      // Fill the form with the data of the clicked row
      fullname.value = td1.textContent;
      email.value = td2.textContent;
      phone.value = td3.textContent;
      carType.text = carType.textContent;
      startDate.value = td5.textContent;
      endDate.value = td6.textContent;

      // Change Submit button behavior to Update
      const submitButton = document.querySelector("button[type='submit']");
      submitButton.textContent = "Update";

      // Update the row instead of adding a new one
      submitButton.removeEventListener("click", reservations.appendChild(tr)); // Remove the insert event
      submitButton.addEventListener("click", () => {
        td1.textContent = fullname.value;
        td2.textContent = email.value;
        td3.textContent = phone.value;
        td4.textContent = carType.options[carType.selectedIndex].text;
        td5.textContent = startDate.value;
        td6.textContent = endDate.value;
        td7.textContent = totalCost.textContent;

        // Reset the submit button to its original state
        submitButton.textContent = "Submit";
        submitButton.removeEventListener("click", () => {
          td1.textContent = fullname.value;
          td2.textContent = email.value;
          td3.textContent = phone.value;
          td4.textContent = carType.options[carType.selectedIndex].text;
          td5.textContent = startDate.value;
          td6.textContent = endDate.value;
          td7.textContent = totalCost.textContent;
        });
        submitButton.addEventListener("click", reservations.appendChild(tr)); // Restore the insert function
      });
    });
  }
});

//fonction isvalidName pour real time (real synchrone)
