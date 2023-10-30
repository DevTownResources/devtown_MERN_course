// function onClear() {
//   console.log("onClear func");
// }

const clearBtn = document.querySelector("#clear");

// clearBtn.onclick = function () {
//   console.log("onclick");
// };
// clearBtn.onclick = function () {
//   console.log("onclick 2");
// };

function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  //   itemList.innerHTML = "";

  items.forEach((item) => item.remove());
}

// clearBtn.addEventListener("click", () => console.log("addEventListener"));
clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 4000);
