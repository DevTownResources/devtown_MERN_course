// document.querySelector("button").addEventListener("click", () => {
//   console.log("this is callback func");
// });

// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// greet("Priya", () => {
//   console.log("I am a software developer");
// });
// greet("Kartik", () => {
//   console.log("I am a consultant, and I have good life");
// });

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
