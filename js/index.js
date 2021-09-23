let taskInpute = document.querySelector("textarea"); //task input text
let taskList = document.querySelector(".tasks"); //select sakt list DOM
let title = document.querySelector(".title"); //select title for changing it in future

let taskNumber = 0;
//buttons variables

let doneAll = document.querySelector(".doneAll");
let clearQuest = document.querySelector(".clearQuest");
let addQuest = document.querySelector(".addQuest");
let deleteAll = document.querySelector(".deleteAll");

let dels = document.querySelectorAll(".DeleteButton");
//buttons listeners

addQuest.addEventListener("click", onAddQuestClick);

function onAddQuestClick() {
    if (taskInpute.value == "") {
        title.innerText = "Cannot wright empty task. Enter text please";
    } else {
        taskList.appendChild(newtask());
    }
}

//new task creating function
function newtask() {
    let newLi = document.createElement("li"); //creating new LI for task
    newLi.setAttribute("id", "task_" + taskNumber); //setting task id
    let newChekBox = document.createElement("input");
    newChekBox.setAttribute("type", "checkbox"); //new checkbox for setting Done attribute
    newChekBox.setAttribute("id", "checkNumber_" + taskNumber);
    let newSpan = document.createElement("span");
    newSpan.innerText = taskInpute.value; // extracting task value
    let newDelete = document.createElement("button");
    newDelete.setAttribute("id", "deleteTask_" + taskNumber);
    newDelete.innerText = "Delete";
    newDelete.setAttribute("class", "DeleteButton");
    newLi.appendChild(newChekBox);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDelete);

    taskInpute.value = "";
    taskNumber++; //increasing next task number
    return newLi;
}

//deleting curent task function

function DeleteMe() {
    dels.forEach();
}
