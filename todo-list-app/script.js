let taskList = document.getElementById('task-list');
let addTaskBtn = document.getElementById('add-task-btn');
let taskInput = document.getElementById('task-input');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let taskRow = document.createElement('tr');
        taskRow.innerHTML = `
            <td><input type="checkbox" class="complete-task"></td>
            <td>${taskText}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        taskList.appendChild(taskRow);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', (e) => {
    if (e.target.className === 'delete-btn') {
        e.target.parentNode.parentNode.remove();
    } else if (e.target.className === 'complete-task') {
        let taskCell = e.target.parentNode.nextSibling;
        taskCell.classList.toggle('completed');
    }
});