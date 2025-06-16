console.log('Hello!');
const shoppingList = [];
const listElement = document.getElementById("shoppingList");
const input = document.getElementById("itemInput");
const message = document.getElementById("message");
const filterInput = document.getElementById("filterInput");

function updateList(filter = "") {
  listElement.innerHTML = "";

  const filteredList = shoppingList.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredList.length === 0) {
    message.textContent = shoppingList.length === 0
      ? "Handlelisten er tom."
      : "Ingen varer matcher filteret.";
    return;
  }

  message.textContent = "";
  filteredList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function addItemEnd() {
  const value = input.value.trim();
  if (!value) {
    message.textContent = "Du må skrive inn en vare!";
    return;
  }
  shoppingList.push(value);
  input.value = "";
  updateList(filterInput.value);
}

function addItemStart() {
  const value = input.value.trim();
  if (!value) {
    message.textContent = "Du må skrive inn en vare!";
    return;
  }
  shoppingList.unshift(value);
  input.value = "";
  updateList(filterInput.value);
}

function removeItemEnd() {
  if (shoppingList.length === 0) {
    message.textContent = "Ingen varer å fjerne.";
    return;
  }
  shoppingList.pop();
  updateList(filterInput.value);
}

function removeItemStart() {
  if (shoppingList.length === 0) {
    message.textContent = "Ingen varer å fjerne.";
    return;
  }
  shoppingList.shift();
  updateList(filterInput.value);
}

function clearList() {
  shoppingList.length = 0;
  updateList();
}

function sortList() {
  if (shoppingList.length === 0) {
    message.textContent = "Ingen varer å sortere.";
    return;
  }
  shoppingList.sort((a, b) => a.localeCompare(b));
  updateList(filterInput.value);
}

function filterList() {
  updateList(filterInput.value);
}