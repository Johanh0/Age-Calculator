const form = document.getElementById("form");

// Div Elements
const errorDiv = document.getElementById("errorDiv");
const dayDiv = document.getElementById("dayDiv");
const monthDiv = document.getElementById("monthDiv");
const yearDiv = document.getElementById("yearDiv");

// Inputs Elements
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Result Elements
const yearResult = document.getElementById("result-years");
const monthResult = document.getElementById("result-months");
const dayResult = document.getElementById("result-days");

// Functions to handle inputs
function inputToNumber() {
  dayValue = parseInt(dayInput.value);
  monthValue = parseInt(monthInput.value);
  yearValue = parseInt(yearInput.value);

  if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
    inputErrorMessage(errorDiv, "All Fields Are Required");
  } else {
    deleteErrorMessage(errorDiv);
    inputConditions(dayValue, monthValue, yearValue);
  }
}

function inputConditions(day, month, year) {
  const date = new Date();
  const yearNow = date.getFullYear();

  if (day < 1 || day > 31) {
    console.log("Days are not correct");
    inputErrorMessage(dayDiv, "Days not correct");
  } else if (month < 1 || month > 12) {
    console.log("Month is not correct");
    inputErrorMessage(monthDiv, "Month not correct");
  } else if (year > yearNow) {
    console.log("Year is not correct");
    inputErrorMessage(yearDiv, "Year not correct");
  } else {
    console.log("Ok");
    deleteErrorMessage(dayDiv);
    deleteErrorMessage(monthDiv);
    deleteErrorMessage(yearDiv);
    calculateAge(month, year);
  }
}

function calculateAge(month, year) {
  const date = new Date();
  const yearNow = date.getFullYear();
  const monthNow = date.getMonth();
  const dayNow = date.getDate();

  const yearCalculated = yearNow - year;
  const monthCalculated = 12 * yearCalculated;
  const dayCalculated = 365 * yearCalculated;

  console.log(yearCalculated + " Years");
  console.log(monthCalculated + " Months");
  console.log(dayCalculated + " Days");
  console.log(dayNow);
  console.log(monthNow);

  showAgeResult(dayCalculated, monthCalculated, yearCalculated);
}

function showAgeResult(day, month, year) {
  yearResult.innerText = year;
  monthResult.innerText = month;
  dayResult.innerText = day;
}

// Functions to hanlde Errors
function inputErrorMessage(div, errorMessage) {
  deleteErrorMessage(div);

  if (div instanceof Element) {
    const errorElement = document.createElement("p");
    errorElement.textContent = errorMessage;
    const classElement =
      "text-[10px] text-red-400 bg-red-200 p-2 rounded-md".split(" ");
    classElement.forEach((tailwindClass) =>
      errorElement.classList.add(tailwindClass)
    );
    div.appendChild(errorElement);
  } else {
    console.error("Invalid DIV Element");
  }
}

function deleteErrorMessage(div) {
  if (div instanceof Element) {
    const existingErrorMessage = div.parentNode.querySelectorAll("p");
    existingErrorMessage.forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }
}

// Function to Tracking Inputs
function trackingInput(input) {
  console.log(input);
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    inputToNumber();
    // alert("e");
  }
});

// Tracking All Inputs
// dayInput.addEventListener("input", () => {
//   console.log(dayInput.value);
// });
