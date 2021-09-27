let taskInpute = document.querySelector("textarea"); //task input text
let taskList = document.querySelector(".tasks"); //select sakt list DOM
let title = document.querySelector(".title"); //select title for changing it in future

let taskNumber = 0;
let allChecked = false;
//buttons variables

let doneAll = document.querySelector(".doneAll");
let clearQuest = document.querySelector(".clearQuest");
let addQuest = document.querySelector(".addQuest");
let deleteAll = document.querySelector(".deleteAll");

doneAll.addEventListener("click", onDoneAllClick);
addQuest.addEventListener("click", onAddQuestClick);
clearQuest.addEventListener("click", onClearQuestClick);
deleteAll.addEventListener("click", onDeleteAllClick);

function onAddQuestClick() {
    if (taskInpute.value == "") {
        title.innerText = "Cannot wright empty task. Enter text please";
    } else {
        taskList.appendChild(newtask());
        let NewHr = document.createElement("hr"); // creating horizontal line
        taskList.appendChild(NewHr);
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
    let newDelete = document.createElement("button"); // creating Delete Button
    newDelete.setAttribute("id", "deleteTask_" + taskNumber); //setting id for del button
    newDelete.innerText = "Delete"; //setting text for del button
    newDelete.setAttribute("class", "DeleteButton"); //setting class for del button
    newLi.appendChild(newChekBox);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDelete);

    taskInpute.value = ""; //clear input field
    taskNumber++; //increasing next task number
    title.innerText = "Task added";
    newDelete.addEventListener("click", DeleteMe);

    return newLi;
}

//deleting curent task function

function DeleteMe(clickedButtonObject) {
    let clickedButton = clickedButtonObject.currentTarget;

    //add delete animation for curent object
    clickedButton.parentElement.classList.add("deleted");
    clickedButton.parentElement.nextSibling.classList.add("deleted");

    function pingDelete() {
        //removing task and line under it
        clickedButton.parentElement.nextSibling.remove();
        clickedButton.parentElement.remove();
        taskNumber--;
    }
    setTimeout(pingDelete, 1000);
}

function onDoneAllClick() {
    let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
    if (allChecked == false) {
        allCheckboxes.forEach(
            (currentElement) => (currentElement.checked = true)
        );
        allChecked = true;
    } else {
        allCheckboxes.forEach(
            (currentElement) => (currentElement.checked = false)
        );
        allChecked = false;
    }
}

function onClearQuestClick() {
    taskInpute.value = "";
}

function onDeleteAllClick() {
    let DeleteButtons = document.querySelectorAll(".DeleteButton");
    DeleteButtons.forEach((CurrentButton) => CurrentButton.click());
}
