const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector("#filter");

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDom(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //   Validate input
  if (newItem.trim() === "") {
    alert("Please enter an item");
    return;
  }

  if (checkIfItemExists(newItem)) {
    alert("Item already exists");
    return;
  }

  addItemToDom(newItem);
  addItemToStorage(newItem);

  // Clear input
  itemInput.value = "";

  checkUI();
}

function addItemToDom(item) {
  // Add new item to list
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  itemList.appendChild(li);
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
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
    if (confirm("Are you sure you want to delete this item?")) {
      // Remove item from DOM
      e.target.parentElement.parentElement.remove();

      // Remove item from storage
      removeItemFromStorage(e.target.parentElement.parentElement);

      checkUI();
    }
  }
}

function removeItemFromStorage(item) {
  const text = item.textContent;
  let itemsFromStorage = getItemsFromStorage();

  // filter the items
  itemsFromStorage = itemsFromStorage.filter((curItem) => curItem !== text);

  // set the new items to local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function clearItems(e) {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
    removeItemFromStorage(item);
  });
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

function checkIfItemExists(item) {
  const items = getItemsFromStorage();
  return items.includes(item);
}

// Event listeners
form.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);

checkUI();
