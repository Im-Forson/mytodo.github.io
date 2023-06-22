const toggle= document.querySelector(".toggle");
const body = document.querySelector(".body");
const toggleBtn = document.querySelector(".toggle-btn");
const myText = document.querySelector(".my");
const toDoText = document.querySelector(".to-do");
const listText = document.querySelector(".list");
const underline = document.querySelector(".underline");
const inputMode = document.getElementById("text-input");
const addMode = document.querySelector(".addBtn");
const listMode =document.getElementsByTagName("li");
const paraMode = document.getElementsByTagName("p");
const checkedIcons = document.getElementsByClassName("fa-check");
const filterButton = document.querySelector(".filter");
const clearButton = document.querySelector(".clear");
const emptyText = document.querySelector(".empty-light-mode");
var isLight = true;

function toggleButton(){
    if(isLight) {
        body.classList.add("dark-mode");
        toggleBtn.classList.add("btn-dark-mode");
        toggleBtn.classList.remove("btn-light-mode");
        toggleBtn.textContent = "light mode";
        myText.classList.add("my-dark-mode");
        toDoText.classList.add("to-do-dark-mode");
        listText.classList.add("list-dark-mode");
        myText.classList.remove("my-light-mode");
        toDoText.classList.remove("to-do-light-mode");
        listText.classList.remove("list-light-mode");
        underline.classList.remove("underline-light-mode");
        underline.classList.add("underline-dark-mode");
        inputMode.classList.remove("input-light-mode");
        inputMode.classList.add("input-dark-mode");
        addButton.classList.remove("add-light-mode");
        addButton.classList.add("add-dark-mode");
        filterButton.classList.remove("filter-light-mode");
        filterButton.classList.add("filter-dark-mode");
        clearButton.classList.remove("clear-light-mode");
        clearButton.classList.add("clear-dark-mode");
        emptyText.classList.add("empty-dark-mode");

        // Changing the background color of list in dark mode
        for(let i = 0; i < listMode.length; i++) {
            listMode[i].classList.remove("item-light-mode");
            listMode[i].classList.add("item-dark-mode");
        }

        // Changing the background color of paragraph in dark mode
        for(let i = 0; i < listMode.length; i++) {
            paraMode[i].classList.remove("p-light-mode");
            paraMode[i].classList.add("p-dark-mode");
        }

        // Changing the background color of check button in dark mode
        for(let i = 0; i < listMode.length; i++) {
            checkedIcons[i].classList.remove("check-light-mode");
            checkedIcons[i].classList.add("check-dark-mode");
        }
        isLight = false;
    }

    else {
        body.classList.remove("dark-mode");
        toggleBtn.classList.add("btn-light-mode");
        toggleBtn.classList.remove("btn-dark-mode");
        toggleBtn.textContent = "dark mode";
        myText.classList.remove("my-dark-mode");
        toDoText.classList.remove("to-do-dark-mode");
        listText.classList.remove("list-dark-mode");
        myText.classList.add("my-light-mode");
        toDoText.classList.add("to-do-light-mode");
        listText.classList.add("list-light-mode");
        underline.classList.remove("underline-dark-mode");
        underline.classList.add("underline-light-mode");
        inputMode.classList.remove("input-dark-mode");
        inputMode.classList.add("input-light-mode");
        addButton.classList.remove("add-dark-mode");
        addButton.classList.add("add-light-mode");
        filterButton.classList.remove("filter-dark-mode");
        filterButton.classList.add("filter-light-mode");
        clearButton.classList.remove("clear-dark-mode");
        clearButton.classList.add("clear-light-mode");
        emptyText.classList.remove("empty-dark-mode");

        // Changing the background color of list in light mode
        for(let i = 0; i < listMode.length; i++) {
            listMode[i].classList.remove("item-dark-mode");
            listMode[i].classList.add("item-light-mode");
        }

        // Changing the background color of paragraph in light mode
        for(let i = 0; i < listMode.length; i++) {
            paraMode[i].classList.remove("p-dark-mode");
            paraMode[i].classList.add("p-light-mode");
        }

        // Changing the background color of check button in light mode
        for(let i = 0; i < listMode.length; i++) {
            checkedIcons[i].classList.remove("check-dark-mode");
            checkedIcons[i].classList.add("check-light-mode");
        }
        isLight = true;
    }
}

// Adding new to-do to the list
const emptyList = document.getElementById("empty");
const clearFilterTab = document.querySelector(".clear-filter");
const addButton = document.querySelector(".addBtn");
let totalList = 0;

addButton.addEventListener("click", function() {
    const li = document.createElement("li");
    const paragraph = document.createElement("p");
    const font = document.createElement("i");
    const inputValue = document.getElementById("text-input").value;
    const text = document.createTextNode(inputValue);

    if (inputValue === '') {
        alert("You cannot add an empty list!");
    } else {
        emptyList.style.display = "none";
        li.classList.add("item");
        li.draggable = "true";
        li.value = 0;
        li.classList.add("item-light-mode");
        font.className = "fa-solid fa-check icon-uncheck";
        font.classList.add("check-light-mode");
        paragraph.append(text);
        paragraph.classList.add("p-light-mode");
        li.append(paragraph);
        li.append(font);
        document.querySelector(".sortable-list").appendChild(li);
        clearFilterTab.style.visibility = "visible";
        totalList++;
    }
    document.getElementById("text-input").value = "";
});



// Checking completed list
const activity = document.getElementById("activity");
const list =document.querySelector("ul");
const item = document.querySelector(".item");
let totalChecked = 0;
list.addEventListener("click", function(ev) {
        
    if (ev.target.classList.contains("icon-uncheck")) {
        
        ev.target.style.opacity = "100%";
        var parent = ev.target.parentElement;
        var children = parent.children;
        parent.classList.add("checked");
        parent.value = 1;
        children[0].style.opacity = "50%";
        children[0].style.textDecoration = "line-through";
        ev.target.classList.remove("icon-uncheck");
        ev.target.classList.add("icon-checked");
        totalChecked += 1;
        
    }

    else if (ev.target.classList.contains("icon-checked")) {
        ev.target.style.opacity = "40%";
        var parent = ev.target.parentElement;
        var children = parent.children;
        parent.classList.remove("checked");
        parent.value = 0;
        children[0].style.opacity = "100%";
        children[0].style.textDecoration = "none";
        ev.target.classList.remove("icon-checked");
        ev.target.classList.add("icon-uncheck");
        totalChecked -= 1;
        
    }

});

// Deleting completed items from the list
const clear = document.querySelector(".clear");
const checked = document.getElementsByClassName("checked");
clear.addEventListener("click", function() {
    
    if (totalChecked < 1) {
        alert("No list has been completed");
    }

    else if(totalChecked > 0) {
        for(let i = 0; i < totalList; i++) {
            checked[i].style.display = "none";
        }
        
        if(totalList == totalChecked) {
            emptyList.style.display = "block";
            clearFilterTab.style.visibility = "hidden";
        }
    }
});

// Filtering the list: undone on-top of done
const filter = document.querySelector(".filter");

filter.addEventListener("click", function() {
    const listParent = document.getElementById("u-list");
    const listItem = listParent.getElementsByTagName("LI");
    const sortableList = document.getElementsByClassName(".sortable-list");
    
    if(totalChecked > 0) {
        for(let i = 0; i < (listItem.length - 1); i++) {
            if(listItem[i].value > listItem[i+1].value) {
                listItem[i].parentNode.insertBefore(listItem[i+1], listItem[i]);
            }
        }
    }
    
    else {
        alert("No list has been completed");
    }
});

// Dragging items and positioning them
list.addEventListener("dragstart", function(ev) {
    setTimeout(() => ev.target.classList.add("dragging"), 0);

    ev.target.addEventListener("dragend", () => ev.target.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = list.querySelector(".dragging");

    const siblings = [...list.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    list.insertBefore(draggingItem, nextSibling);
}

list.addEventListener("dragover", initSortableList);
list.addEventListener("dragenter", e => e.preventDefault());
