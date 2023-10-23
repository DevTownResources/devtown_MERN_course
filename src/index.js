// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

console.log(Boolean(x));

const blogPosts = ["one", "tow"];

if (blogPosts) {
  console.log("List Post");
} else {
  console.log("No Posts to List");
}

// Solution

if (blogPosts.length > 0) {
  console.log("List Post");
} else {
  console.log("No Posts to List");
}

const user = {};

if (user) {
  console.log("User Profile");
} else {
  console.log("No User Profile");
}

// solution

if (Object.keys(user).length > 0) {
  console.log("User Profile");
} else {
  console.log("No User Profile");
}

console.log(10 < 20 && 30 > 15);

console.log(10 < 20 || 30 < 15);

let a;

// Give us first falsy value or last value
a = 10 && 20;
a = 10 && 0 && 20 && 70;
a = 10 && 20 && 70 && false;

// blogPosts.length > 0 && console.log(blogPosts[0]);

//  || - will give us first truthy value or last value

a = 10 || 20;
a = 0 || 20;
a = 0 || "" || undefined || null;

console.log(a);
