const itemInput = document.querySelector("#item-input");
const priorityInput = document.querySelector("#priority-input");
const checkboxInput = document.querySelector("#checkbox");
const form = document.querySelector("#item-form");

const onInput = (e) => {
  console.log(e.target.value);
  //   console.log(itemInput.value);
};

const onCheckbox = (e) => {
  console.log(e.target.checked);
};

const onSubmit = (e) => {
  e.preventDefault();
  //   console.log("submit");
  //   console.log(itemInput.value);
  //   console.log(priorityInput.value);
  //   console.log(checkboxInput.checked);
  const formData = new FormData(form);

  const itemName = formData.get("item");
  if (itemName === "") {
    alert("Please enter an item");
    return;
  }

  console.log(itemName);
  console.log(formData.get("priority"));
  console.log(formData.get("check"));
};

// itemInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);
// checkboxInput.addEventListener("input", onCheckbox);
form.addEventListener("submit", onSubmit);
