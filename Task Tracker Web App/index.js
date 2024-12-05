const uuidv4 = () => '_' + Math.random().toString(36).substring(2, 9); // Simple unique ID

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        addTaskToDOM(task)
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskContent = input.value;
        if (!taskContent) {
            return;
        }

        const task = {
            id: uuidv4(),
            content: taskContent,
            completed: false
        };

        tasks.push(task);
        saveTasksToLocalStorage();
        addTaskToDOM(task);

        input.value = '';
    });

    function addTaskToDOM(task) {
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        task_el.dataset.id = task.id;

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task.content;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_checkbox_el = document.createElement('input');
        task_checkbox_el.type = 'checkbox';
        task_checkbox_el.classList.add('task-checkbox');
        task_checkbox_el.checked = task.completed;

        task_actions_el.appendChild(task_checkbox_el);

        task_checkbox_el.addEventListener('change', () => {
            task.completed = task_checkbox_el.checked;
            saveTasksToLocalStorage();
        });

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        task_delete_el.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasksToLocalStorage();
            list_el.removeChild(task_el);
        });
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});

