let addBtn = document.getElementById("add-todo-btn");
let inputText = document.getElementById("input-todo-text");
let todosList = document.querySelector(".todos");

let todoDay = document.querySelector(".todo-day");
let dateDay = document.querySelector(".day");
let dateMonth = document.querySelector(".month");
let dateYear = document.querySelector(".year");


// Update current todo list day and date
const updateTodoTime = () => {
    let currDate = new Date();
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const day = String(currDate.getDate());
    const month = String(currDate.getMonth() + 1);
    const year = String(currDate.getFullYear());

    const dayName = daysOfWeek[currDate.getDay() - 1]; // Turns the int returned by getDay into the correpondant day in the daysofWeek array
    todoDay.textContent = dayName;

    Number(day) > 9 ? dateDay.textContent = day : dateDay.textContent = "0" + day;
    Number(month) > 9 ? dateMonth.textContent = month : dateMonth.textContent = "0" + month;
    dateYear.textContent = year;
}

updateTodoTime();

// We get the curr input filed text size
function inputLength() {
    return inputText.value.length;
}

function createTask() {
    // Execute code only if the curr input field text size is not 0 .i.e. there is text and not empty
    if (inputLength() > 0) {

        // Creating the elements that make a task container li element
        let todo = document.createElement("li");
        let todoTitle = document.createElement("span");
        let btnsContainer = document.createElement("div");
        let delBtn = document.createElement("button");
        let modifyBtn = document.createElement("button");

        let todoTitleText = document.createTextNode(inputText.value); // Put the text inputted by user in a nodeText

        todoTitle.appendChild(todoTitleText); // Add the textNode to the span
        todoTitle.className = "todo-txt"; // Put a class of task-title on this span

        btnsContainer.className = "btns-container";

        delBtn.className = "btn todo-rm"; // Put btn and del classes on the button
        delBtn.textContent = "Delete"; // Add "Delete" as a content to this btn
        btnsContainer.appendChild(delBtn); // add the button to the div

        modifyBtn.className = "btn todo-mod"; // Put btn and mod classes on the button
        modifyBtn.textContent = "Modify"; // add the Modify content to the button
        btnsContainer.appendChild(modifyBtn); // add the button to the div

        todo.appendChild(todoTitle); // Add the span to the li
        todo.appendChild(btnsContainer); // Add the div with the two buttons to the li
        todo.className = "todo"; // Add a class of task-container to the li

        todosList.insertAdjacentElement("beforeend", todo); // Add the li as the last child of the list
        inputText.value = ""; // Clear the content of the input field

        // Attach event listeners to the newly created buttons
        delBtn.addEventListener("click", function () {
            todo.remove(); // Remove the task container with all its children
        });

        modifyBtn.addEventListener("click", function () {
            let userInput = prompt("Modify your todo:", todoTitle.textContent);
            
            if (userInput !== null && userInput.trim() !== "") {
                todoTitle.textContent = userInput;
            }
        });
    }
}

// On the button, listen to the click event and execute the createTask function
addBtn.addEventListener("click", createTask);