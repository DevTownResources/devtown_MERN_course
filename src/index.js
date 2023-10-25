const age = 25;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

age >= 18 ? console.log("You are an adult") : console.log("You are a child");

const canVote = age >= 18 ? true : false; // ternary operator

console.log(canVote);

// for loops

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     console.log("lucky number 7");
//   } else {
//     console.log("Number ", i);
//   }
// }

// Nested loops

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(`i is ${i} and j is ${j} : ${i * j}`);
//   }
// }

// Looping through arrays

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
