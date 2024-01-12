const addNewButton = document.getElementById("add-new-btn");
const newTaskInput = document.getElementById("new-task-input");
const tasksList = document.getElementById("tasks-list");
const clearButton = document.getElementById("clear");
const title = document.getElementById("title");
const taskNumTitle = document.getElementById("task-num-title");

const d = new Date();
let day = d.getDay();
let dayOfWeek = "";

let tasks = [];

switch(day){
    case 0:
        dayOfWeek = "Sunday";
        break;
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
    default:
        break;                    
}

function AddTask(){
    if (newTaskInput.value != ""){
        tasks.push(newTaskInput.value);
        taskNumTitle.textContent = `You've got ${tasks.length} tasks for today`;
        let taskDivs = document.getElementsByClassName("task-div");
        let taskListItems = document.getElementsByClassName("task-text");
        for (let i=0; i<tasks.length; i++){
            taskDivs[i].classList.remove("hidden");
            taskListItems[i].textContent = tasks[i];

            // let randomNum = Math.round(Math.random()*3)+1;
            // taskDivs[i].classList.add(`colour-${randomNum}`);
        }
        newTaskInput.value = "";
    }else{
        alert("You need to enter a task!");
    }    
}

function ClearTasks(){
    tasks = [];
    taskNumTitle.textContent = `You've got ${tasks.length} tasks for today`;
    let taskDivs = document.getElementsByClassName("task-div");
    let checkboxes = document.getElementsByClassName("checkbox");
    for (let i=0; i<taskDivs.length; i++){
        taskDivs[i].classList.add("hidden");
        checkboxes[i].removeAttribute("checked");
    }

}

console.log(dayOfWeek);
title.textContent = `Hi, it's ${dayOfWeek}!`;


addNewButton.addEventListener("click", AddTask);

document.addEventListener("keydown", (event) =>{
    if(event["key"] === "Enter"){
        AddTask();
    }
})

clearButton.addEventListener("click", ClearTasks);







