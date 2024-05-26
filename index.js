const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");
const errorMessage = document.querySelector(".error-message-text")

const addTask = () => {
    if (inputBox.value === '') {
        errorMessage.classList.remove("hidden")
    } else {
        if (!errorMessage.classList.contains("hidden")) {
            errorMessage.classList.add("hidden");
        }

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener('click', e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();