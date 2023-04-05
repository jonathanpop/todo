const inputTask = document.getElementById('inputTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task to the list
function addTask() {
    const taskValue = inputTask.value.trim();
    if (taskValue) {
        const newTask = document.createElement('li');
        newTask.textContent = taskValue;
        newTask.addEventListener('click', () => {
            newTask.classList.toggle('completed');
        });
        newTask.addEventListener('dblclick', () => {
            taskList.removeChild(newTask);
        });
        taskList.appendChild(newTask);
        inputTask.value = '';
    }
}

addTaskBtn.addEventListener('click', addTask);

// Add task with Enter key
inputTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});
