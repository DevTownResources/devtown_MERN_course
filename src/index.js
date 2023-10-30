// Replace

function replace(index) {
  const li = document.querySelectorAll("li")[index - 1];
  //   const element = document.createElement("li");
  //   element.innerText = "Replaced li";

  //   li.replaceWith(element);
  //   console.log(li.innerHTML);
  //   console.log(li.outerHTML);
  li.outerHTML = "<li>Replaced with outer html</li>";
}

// replace(2);

// Removing Elements

function removeClearButton() {
  document.querySelector("#clear").remove();
}

removeClearButton();

function removeItem(itemNum) {
  const ele = document.querySelectorAll("li")[itemNum - 1];
  ele.remove();
}

removeItem(2);
