const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const courseId = document.getElementById('courseId').value;
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;

    try {
        const response = await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ courseId, taskName, dueDate }),
        });

        if (response.ok) {
            document.getElementById('taskForm').reset();
            getTasks(courseId);
        } else {
            console.error('Failed to add task');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

async function getTasks(courseId) {
    try {
        const response = await fetch(`/courses/${courseId}/tasks`);
        const tasks = await response.json();

        taskList.innerHTML = '';

        if (tasks.length === 0) {
            taskList.innerHTML = '<p>No tasks found for this course.</p>';
        } else {
            const taskItems = tasks.map((task) => `<li>${task.taskName} (Due: ${task.dueDate})</li>`);
            taskList.innerHTML = `<ul>${taskItems.join('')}</ul>`;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('courseId').addEventListener('input', (e) => {
    getTasks(e.target.value);
});