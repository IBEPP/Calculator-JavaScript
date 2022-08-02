document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (const item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText, "bien clicke");
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });

  document.addEventListener("keydown", (e) => {
    console.log("voici event", e);

    if (e.code == "Digit1" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Digit2" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Digit3" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Digit4" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (
      (e.code == "Digit5" && e.shiftKey == true) ||
      (e.code == "Digit5" && e.ctrlKey == false && e.altKey == false)
    ) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (
      (e.code == "Digit6" && e.shiftKey == true) ||
      (e.code == "Digit6" && e.ctrlKey == false && e.altKey == false)
    ) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Digit7" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (
      (e.code == "Digit8" && e.shiftKey == true) ||
      (e.code == "Digit8" && e.ctrlKey == true && e.altKey == true)
    ) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Digit9" && e.shiftKey == true) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (
      (e.code == "Digit0" && e.shiftKey == true) ||
      (e.code == "Period" && e.shiftKey == true)
    ) {
      screenValue = e.key;
      screen.value = screenValue;
    } else if (e.code == "Equal") {
      //   screenValue += e.key;
      screen.value = e.key;
    } else if (e.code == "Enter") {
      screen.value = eval(screenValue);
    }
  });
}
