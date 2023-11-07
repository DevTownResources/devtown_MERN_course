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

function getPosts(cb) {
  setTimeout(() => {
    console.log(posts);
    cb();
  }, Math.floor(Math.random() * 3000) + 1000);
}
function getAuthors(cb) {
  setTimeout(() => {
    console.log(authors);
    cb();
  }, Math.floor(Math.random() * 3000) + 1000);
}
function getComments() {
  setTimeout(() => {
    console.log(comments);
  }, Math.floor(Math.random() * 3000) + 1000);
}

getPosts(() => {
  getAuthors(() => {
    getComments();
  });
});
