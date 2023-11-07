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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function showError(error) {
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode(error));
  document.body.appendChild(h3);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(showError);
