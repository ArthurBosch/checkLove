const fisrtName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const form = document.querySelector("#form");
const result = document.querySelector("#result");
const percentage = document.querySelector("#percentage");

fisrtName.addEventListener("change", firstChangeHandler);
secondName.addEventListener("change", secondChangeHandler);
form.addEventListener("submit", submitHandler);

let firstNameValue = "";
let secondNameValue = "";

function firstChangeHandler(e) {
  firstNameValue = e.target.value;
}

function secondChangeHandler(e) {
  secondNameValue = e.target.value;
}

function submitHandler(e) {
  e.preventDefault();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b3a0b68617msh5031df14e92543bp1c10a0jsn92a599a97dfc",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstNameValue}&fname=${secondNameValue}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      result.innerHTML = response.result;
      percentage.innerHTML = response.percentage;
      percentage.className = "bad";
      if (response.percentage > 40) percentage.className = "notgood";
      if (response.percentage > 70) percentage.className = "good";
    })
    .catch((err) => console.error(err));
}
