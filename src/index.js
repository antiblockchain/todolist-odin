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
    currentButton.innerHTML = "X";
    currentButton.setAttribute("onclick", "removeItem(" + currentItem.id.toString() + ")");


}

function removeItem(id) {
    let removedItem = document.getElementById(id);
    removedItem.remove();
}

function storeItems() {

}

setInterval(function() {
    save();
}, 15000);

function save() {
    let saveSlot = {
        counter: counter
    };
    localStorage.setItem("saveSlot", JSON.stringify(saveSlot));
    localStorage.setItem("itemsList", JSON.stringify(items))
}

document.addEventListener("keydown", function(addEventListener) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        save();
        }
}, false);

function load() {
    let currentSave = JSON.parse(localStorage.getItem("saveSlot"));
    let currentItems = JSON.parse(localStorage.getItem("itemsList"));
    if (typeof currentItems !== "undefined") items = currentItems;
    if (typeof currentSave.counter !== "undefined") counter = currentSave.counter;
    if (counter > 0) {
        for (let i = 0; i < currentItems.length; i++) {
            currentItem = new Item(currentItems[i].title, currentItems[i].desc, currentItems[i].date, null, currentItems[i].id);
            pushItem(currentItem);
        }
    }
}

function reset() {
    if (confirm("Are you sure you want to reset?")) {
        saveSlot = {};
        currentItems = {};
        localStorage.setItem("saveSlot", JSON.stringify(saveSlot));
        localStorage.setItem("itemsList", JSON.stringify(currentItems));
        location.reload();
    }
}