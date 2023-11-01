const logo = document.querySelector("img");

const onClick = (e) => {
  //   console.log("clicked");
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(e.type);
  //   console.log(e.timeStamp);
  console.log(e.clientX, e.clientY);
};

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});

document.querySelector("body").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// const onMouseOver = () => {
//   console.log("mouse is over");
//   if (document.body.style.backgroundColor === "purple") {
//     document.body.style.backgroundColor = "lightgray";
//   } else {
//     document.body.style.backgroundColor = "purple";
//   }
// };

// const onMouseOut = () => {
//   console.log("mouse is out");
//   //   document.body.style.backgroundColor = "lightgray";
// };

// const onMouseDown = () => {
//   console.log("mouse is down");
// };

// const onMouseUp = () => {
//   console.log("mouse is up");
// };

// Events listeners
logo.addEventListener("click", onClick);
// logo.addEventListener("mouseover", onMouseOver);
// logo.addEventListener("mouseout", onMouseOut);
// logo.addEventListener("mousedown", onMouseDown);
// logo.addEventListener("mouseup", onMouseUp);
