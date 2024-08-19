document.getElementById('addbutton').addEventListener('click', function() {
    const input = document.getElementById('todoinput');
    const task = input.value.trim();

    if (task) {
        const todoList = document.getElementById('todolist');

        const listItem = document.createElement('li');
        listItem.textContent = task;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            const newTask = prompt('Edit your task:', task);
            if (newTask !== null && newTask.trim() !== '') {
                listItem.firstChild.nodeValue = newTask.trim();
            }
        });

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        listItem.appendChild(buttonsDiv);
        todoList.appendChild(listItem);

        input.value = '';
    }
});
