const x = 5;
const y = 10;

// if (x === y) {
//   console.log("Hello");
// } else if (x > y) {
//   console.log("x is greater than y");
// } else {
//   console.log("x is less than y");
// }

// Nested if
const score = 60;

if (score <= 50) {
  console.log("You need to practice more");
  if (score < 30) {
    console.log("Failed");
  } else {
    console.log("Passed");
  }
} else if (score > 50 && score <= 75 && score !== 60) {
  console.log("Keep pushing");
} else {
  console.log("You are a genius");
}

const color = "blue";

if (color === "red" || color === "yellow" || color === "green") {
  console.log("color is red or yellow or green");
}

// Switch statements
switch (color) {
  case "red": // color === red
    console.log("color is red");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  case "green":
    console.log("color is green");
    break;
  default:
    console.log("Color is not supported");
}
