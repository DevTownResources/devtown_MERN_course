function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: "my-token",
    },
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

createPost({
  title: "foo",
  body: "bar lorem ipsum dolor sit amet",
});
