let toDoList = ['Make a To Do List App','Make a Video of it'];
let tasks = document.querySelector('.tasks');
let toDoInput = document.querySelector('#toDo');
let error = document.querySelector('#error')
let taskCount = document.querySelector('#remTaskCount')
let countValue = toDoList.length;
let delete_button = document.querySelectorAll('#delete')

updateTasks()

function addToDo() {
    let toDoItem = toDoInput.value;
    if(toDoItem !== ""){
        error.style.display = "none"
        toDoList.push(toDoItem);
        // tasks.innerHTML = toDoItem
        countValue++;
        updateCount(countValue);
        updateTasks()
        toDoInput.value = ''
    }
    else{
        error.style.display = "block"
        setInterval(() => {
            error.style.display = "none"
        },2000)
        return
    }
}

function updateTasks() {
    // Clear the current list of tasks
    tasks.innerHTML = '';

    // Loop through the to-do list and display each item
    for (let i = 0; i < toDoList.length; i++) {
        // <input type="checkbox" id="task-check" onChange="isChecked()">
        let mainTask = `
        <div class="task">
        <span id="task-${i} task-name">${toDoList[i]}</span>
        <button id="edit" onclick="update(${i})">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button id="delete" onclick="deleteTask(${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
        tasks.innerHTML += mainTask;
    }
    updateCount(countValue)
}

function update(index) {
    const changed = prompt("Enter new task:", toDoList[index]);

    if (changed !== null) {
        toDoList[index] = changed;
        updateTasks();
    }
}

function deleteTask(index) {
    toDoList.splice(index, 1);
    countValue--;
    updateTasks();
}

function isChecked(){
    countValue--;
    updateCount(countValue);
}

function updateCount(value) {
    taskCount.innerHTML = value;
}