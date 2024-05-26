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

        inputBox.value = "";
    }
}