document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Остановить перезагрузку страницы

    const title = form.taskName.value.trim();
    const description = form.taskDescription.value.trim();

    if (!title) {
      alert('Пожалуйста, введите название задачи.');
      return;
    }

    // Создать элемент списка задачи
    const li = document.createElement('li');
    li.classList.add('task-card');

    // Заголовок задачи
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-card-title');
    taskTitle.textContent = title;
    li.appendChild(taskTitle);

    // Описание задачи (если есть)
    if (description) {
      const taskDesc = document.createElement('div');
      taskDesc.classList.add('task-card-desc');
      taskDesc.textContent = description;
      li.appendChild(taskDesc);
    }

    // Кнопка удаления задачи
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    // Добавить задачу в список
    taskList.appendChild(li);

    // Очистить форму
    form.reset();
  });
});
