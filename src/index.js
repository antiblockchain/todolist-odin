let counter = 0;

const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const dateInput = document.getElementById('dateInput');
function Item(title, desc, date, priority, id) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.id = id;
}

let items = [];

let input = document.getElementById('input');
input.addEventListener("click", addItem);



function addItem() {
    titleText = titleInput.value.toString();
    descText = descInput.value.toString();
    dateText = dateInput.value.toString();
    currentItem = new Item(titleText, descText, dateText, null, counter);
    items.push(currentItem);
    counter++;
    pushItem(currentItem);
}

function pushItem(currentItem) {
    const masterList = document.getElementById("list");
    let currentList = document.createElement("li");
    let currentDesc = document.createElement("p");
    let currentButton = document.createElement("button");
    masterList.appendChild(currentList);
    currentList.innerHTML = currentItem.title.toString();
    currentList.setAttribute("id", currentItem.id);
    currentList.appendChild(currentDesc);
    currentList.appendChild(currentButton);
    currentDesc.innerHTML = currentItem.desc.toString();
    currentButton.innerHTML = "Remove";
    currentButton.setAttribute("onclick", "removeItem(" + currentItem.id.toString() + ")");


}

function removeItem(id) {
    let removedItem = document.getElementById(id);
    removedItem.remove();
}

function storeItems() {

}

