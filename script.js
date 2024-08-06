
// Get access to add btn and input field
// To add a click event listener on the btn 
// And get the value of the input feld
// Then get the ul list to add the li item that will hold the task 
// Created by the user

let addBtn = document.getElementById("add-btn");
let inputText = document.getElementById("input-text");
let list = document.querySelector(".tasks");


// We get the curr input filed text size
function inputLength(){
    return inputText.value.length;
}

function createTask (){
    // Execute code only if the curr input field text size is not 0 .i.e. there is text and not empty
    if (inputLength() > 0){
        
        // Creating the elements that make a task container li element
        let li = document.createElement("li"); // 
        let taskTitle = document.createElement("span");
        let actionsDiv = document.createElement("div");
        let delBtn = document.createElement("button");
        let modifyBtn = document.createElement("button");

        let taskTitleText = document.createTextNode(inputText.value); // Put the text inputed by user in a nodeText

        taskTitle.appendChild(taskTitleText); // Add the textNode to the span
        taskTitle.className = "task-title"; // Put a class of task-title on this span

        delBtn.className = "btn del"; // Put btn and del classes on the button
        delBtn.textContent = "Del"; // Add "Del" as a content to this btn
        actionsDiv.appendChild(delBtn); // add the button to the div
        modifyBtn.className = "btn mod"; // Put btn and mod classes on the button
        modifyBtn.textContent = "Modify" // add the Modify content to button
        actionsDiv.appendChild(modifyBtn); // add the button to the div

        li.appendChild(taskTitle); // Add the span to the li
        li.appendChild(actionsDiv); // Add the div with the two buttons to the li
        li.className = "task-container"; // Add a class of task-container to the li

        list.insertAdjacentElement("beforeend", li); // Add the li as the last child of list
        inputText.value = ""; // Earase the content of the input field
    }
}

// On the btn Listen to click event if fired execute the createTask function 
addBtn.addEventListener("click", createTask); 


// Get a list of current delete a task buttons
let delBtns = document.querySelectorAll(".tasks .task-container div .del");
// Get a list of current modify a task buttons
let modifyBtns = document.querySelectorAll(".tasks .task-container div .mod");

const checkTasks = () => {

    // Update the delete and modify a task buttons list 
    delBtns = document.querySelectorAll(".tasks .task-container div .del");

    // Put a click event listener on each delete button
    delBtns.forEach(function(delBtn) {
        delBtn.addEventListener("click", function(){        
            // Get the task container where the delete button is
            let task = delBtn.parentElement.parentElement;
            // Remove the task container with all its chidlren
            task.remove();
        });
    });

}

// function taskInput(){
    
//     let text ;
//     text = prompt("Enter the new task ");

//     return newTask;
// }

// const checkToRemTasks = () => {
    
//     modifyBtns = document.querySelectorAll(".tasks .task-container div .mod");

//     modifyBtns.forEach(function(modBtn) {
//         modBtn.addEventListener("click", function(){

//             let taskTxt = modBtn.parentElement.previousElementSibling;

//             taskTxt.textContent = "Modified";
//         });
//     });
// };

// For every 1 second checkTasks
const intervalID1 = setInterval(checkTasks, 1000);
// const intervalID2 = setInterval(checkToRemTasks, 1000);

// The problem is that it take the list of btns at 1st load but the 
// others added not included so i need a way to tackle this issue

// Also the another similar is that the script runs onces and if i use a loop
// It overloads the webpage