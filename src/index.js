// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Priya", age: 21 });
//   }, 1000);
// });

// promise.then((data) => console.log(data));

// async function consumePromise() {
//   const data = await promise;
//   console.log(data);
// }

// consumePromise();

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers();

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getPosts();

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
};

getTodos();

console.log("Hello");
