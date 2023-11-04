const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector("#filter");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //   Validate input
  if (newItem.trim() === "") {
    alert("Please enter an item");
    return;
  }

  // Add new item to list
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  itemList.appendChild(li);

  // Clear input
  itemInput.value = "";

  checkUI();
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
    checkUI();
  }
}

function clearItems(e) {
  const items = document.querySelectorAll("li");
  items.forEach((item) => item.remove());
  checkUI();
}

function filterItems(e) {
  const items = document.querySelectorAll("li");
  const searchText = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();

    if (itemName.indexOf(searchText) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filter.style.display = "block";
  }
}

// Event listeners
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filter.addEventListener("input", filterItems);

checkUI();

localStorage.setItem("name", "Priya");
console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
localStorage.setItem("country", "India");
localStorage.clear();
