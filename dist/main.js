/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let counter = 0;\n\nconst titleInput = document.getElementById('titleInput');\nconst descInput = document.getElementById('descInput');\nconst dateInput = document.getElementById('dateInput');\nfunction Item(title, desc, date, priority, id) {\n    this.title = title;\n    this.desc = desc;\n    this.date = date;\n    this.priority = priority;\n    this.id = id;\n}\n\nlet items = [];\n\nlet input = document.getElementById('input');\ninput.addEventListener(\"click\", addItem);\n\n\n\nfunction addItem() {\n    titleText = titleInput.value.toString();\n    descText = descInput.value.toString();\n    dateText = dateInput.value.toString();\n    currentItem = new Item(titleText, descText, dateText, null, counter);\n    items.push(currentItem);\n    counter++;\n    pushItem(currentItem);\n}\n\nfunction pushItem(currentItem) {\n    const masterList = document.getElementById(\"list\");\n    let currentList = document.createElement(\"li\");\n    let currentDesc = document.createElement(\"p\");\n    let currentButton = document.createElement(\"button\");\n    masterList.appendChild(currentList);\n    currentList.innerHTML = currentItem.title.toString();\n    currentList.setAttribute(\"id\", currentItem.id);\n    currentList.appendChild(currentDesc);\n    currentList.appendChild(currentButton);\n    currentDesc.innerHTML = currentItem.desc.toString();\n    currentButton.innerHTML = \"X\";\n    currentButton.setAttribute(\"onclick\", \"removeItem(\" + currentItem.id.toString() + \")\");\n\n\n}\n\nfunction removeItem(id) {\n    let removedItem = document.getElementById(id);\n    removedItem.remove();\n}\n\nfunction storeItems() {\n\n}\n\nsetInterval(function() {\n    save();\n}, 15000);\n\nfunction save() {\n    let saveSlot = {\n        counter: counter\n    };\n    localStorage.setItem(\"saveSlot\", JSON.stringify(saveSlot));\n    localStorage.setItem(\"itemsList\", JSON.stringify(items))\n}\n\ndocument.addEventListener(\"keydown\", function(addEventListener) {\n    if (event.ctrlKey && event.which == 83) {\n        event.preventDefault();\n        save();\n        }\n}, false);\n\nfunction load() {\n    let currentSave = JSON.parse(localStorage.getItem(\"saveSlot\"));\n    let currentItems = JSON.parse(localStorage.getItem(\"itemsList\"));\n    if (typeof currentItems !== \"undefined\") items = currentItems;\n    if (typeof currentSave.counter !== \"undefined\") counter = currentSave.counter;\n    if (counter > 0) {\n        for (let i = 0; i < currentItems.length; i++) {\n            currentItem = new Item(currentItems[i].title, currentItems[i].desc, currentItems[i].date, null, currentItems[i].id);\n            pushItem(currentItem);\n        }\n    }\n}\n\nfunction reset() {\n    if (confirm(\"Are you sure you want to reset?\")) {\n        saveSlot = {};\n        currentItems = {};\n        localStorage.setItem(\"saveSlot\", JSON.stringify(saveSlot));\n        localStorage.setItem(\"itemsList\", JSON.stringify(currentItems));\n        location.reload();\n    }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;