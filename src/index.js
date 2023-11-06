function changeText() {
  const heading = document.querySelector("h1");
  heading.innerHTML = "changed by timer";
}
// const timerId = setTimeout(changeText, 4000);

let counter = 0;
const intervalId = setInterval(() => {
  console.log("Hey");
  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}, 3000);

document.querySelector("#stop").addEventListener("click", () => {
  // clearTimeout(timerId);
  clearInterval(intervalId);
  console.log("timer stopped");
});
