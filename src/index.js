// const div = document.createElement("div");

// div.className = "my-element";
// div.id = "my-element";
// div.setAttribute("title", "MY Element");

// // div.innerText = "Hello World";

// const text = document.createTextNode("Hello World from create text node");

// div.appendChild(text);

// // document.body.appendChild(div);
// document.querySelector("ul").appendChild(div);

// Quick and Dirty

function createItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item} 
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  document.querySelector(".items").appendChild(li);
}

createItem("Cheese");
createItem("Butter");
createItem("Noodles");

// Clean and performant

function createItem2(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-xmark");

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

createItem2("Grapes");
