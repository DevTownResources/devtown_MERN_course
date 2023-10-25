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

const blogPosts = ["blog post 1", "Blog post 2", "Blog post 3"];

if (blogPosts) {
  console.log("List posts");
} else {
  console.log("No posts");
}

// solution

if (blogPosts.length > 0) {
  console.log("List posts");
} else {
  console.log("NO posts");
}

// &&, ||

console.log(10 > 20 && 10 > 5);
console.log(10 > 20 || 10 > 5);

let a;

// Give us first falsy value or last value
a = 10 && 20 && 70 && "";
a = 10 && 0 && 20;
a = 10 && 20 && false && 70;

blogPosts.length > 0 && console.log(blogPosts[0]);

// || - give us first truthy value or last value

a = 10 || 20 || 30;
a = 0 || 20 || 30;
a = 0 || "" || undefined || 30 || null;

console.log(a);
