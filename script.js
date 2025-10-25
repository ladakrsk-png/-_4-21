document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  const list = document.getElementById('taskList');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = form.taskName.value.trim();
    const desc = form.taskDescription.value.trim();

    if (!title) {
      alert('Пожалуйста, введите название задачи.');
      return;
    }

    // Создаём элемент li — это "карточка задачи"
    const li = document.createElement('li');
    li.className = 'task-card';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-card-title';
    taskTitle.textContent = title;
    li.appendChild(taskTitle);

    if (desc) {
      const taskDesc = document.createElement('div');
      taskDesc.className = 'task-card-desc';
      taskDesc.textContent = desc;
      li.appendChild(taskDesc);
    }

    // Кнопка удалить
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Удалить';
    delBtn.onclick = () => list.removeChild(li);
    li.appendChild(delBtn);

    // Добавляем карточку в список
    list.appendChild(li);

    // Очищаем форму
    form.reset();
  });
});
