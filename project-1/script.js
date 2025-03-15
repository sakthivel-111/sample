document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to create and append a task to the list
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Mark task as completed
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        // Delete task
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent triggering the completed toggle
            li.remove();
        });

        taskList.appendChild(li);
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Clear input field
        }
    });

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = ""; // Clear input field
            }
        }
    });
});
