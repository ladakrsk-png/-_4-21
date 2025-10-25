document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskName = this.taskName.value.trim();
        const taskDescription = this.taskDescription.value.trim();

        if (!taskName) {
            alert('Пожалуйста, введите название задачи.');
            return;
        }

        // Создаем карточку задачи
        const card = document.createElement('div');
        card.classList.add('task-card');

        const title = document.createElement('h3');
        title.textContent = taskName;
        card.appendChild(title);

        if (taskDescription) {
            const desc = document.createElement('p');
            desc.textContent = taskDescription;
            card.appendChild(desc);
        }

        // Кнопка удалить
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(card);
        });

        card.appendChild(deleteBtn);

        // Добавляем в список
        taskList.appendChild(card);

        // Очищаем форму
        this.reset();
    });
});
