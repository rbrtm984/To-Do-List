document.getElementById('add-button').addEventListener('click', function() {
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        let newTask = document.createElement('li');
        newTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        newTask.textContent = taskInput.value;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});