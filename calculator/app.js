const display = document.querySelector(".input-text");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = '';

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    
      output = eval(output.replace("%", "/100"));

  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1); // Remove the last character
  } else {
    if (output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }
  // Update the display with the current output
  display.value = output;
};

buttons.forEach((item) => {
  item.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
