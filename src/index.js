const itemInput = document.querySelector("#item-input");

const onKeyPress = (e) => {
  console.log("key press");
};

const onKeyUp = (e) => {
  console.log("key up");
};

const onKeyDown = (e) => {
  //   console.log("key down");

  // Key
  if (e.key === "Enter") {
    alert("You press Enter");
  }

  // KeyCode
  // https://www.toptal.com/developers/keycode/table
  if (e.keyCode === 13) {
    alert("You press Enter");
  }

  // Code
  //   console.log(e.code);
  if (e.code === "Digit1") {
    console.log("You press 1");
  }

  // repeat
  if (e.repeat) {
    console.log("You press and hold " + e.key);
  }

  console.log("Shift " + e.shiftKey);
  console.log("Ctrl " + e.ctrlKey);

  if (e.shiftKey && e.key === "K") {
    console.log("You press shift + k");
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
