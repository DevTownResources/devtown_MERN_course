// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({ name: "Priya", age: 21 });
//     } else {
//       reject("Error in fetching user");
//     }
//   }, 1000);
// });

// getUser
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//     return name.length;
//   })
//   .then((nameLength) => {
//     console.log(nameLength);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("Hey, I am not async");

// Using promises to rectify callback hell
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const authors = [
  { name: "John Doe", age: 40 },
  { name: "Jane Doe", age: 30 },
  { name: "Jane Doe", age: 30 },
];

const comments = [
  { postID: 1, body: "This is comment one" },
  { postID: 2, body: "This is comment two" },
  { postID: 3, body: "This is comment three" },
  { postID: 3, body: "This is comment three" },
];

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
function getAuthors() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(authors);
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getPosts()
  .then((posts) => {
    console.log(posts);
    return getAuthors();
  })
  .then((authors) => {
    console.log(authors);
    return getComments();
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((err) => {
    console.log(err);
  });
