const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (event) => {
  alert("Button was clicked");
  //   event.stopPropagation();
});

div.addEventListener("click", (event) => {
  alert("Div was clicked");
  event.stopPropagation();
});

form.addEventListener("click", (event) => {
  alert("Form was clicked");
});

document.body.addEventListener("click", (event) => {
  alert("Body was clicked");
});
