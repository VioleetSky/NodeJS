let tasks = [];

function addTask(...task) {
    task.forEach(item => {
        item.id = tasks.length + 1;
        item.createdAt = new Date().toISOString();
        tasks.push(item);
    });
    console.log("Завдання успішно додане")
    return tasks;
}

function getTasks() {
    return tasks;
}

function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return false;
    }

    task.completed = true;
    return true;
}

function deleteTask(id) {
    tasks = tasks.filter(isTask => isTask.id !== id);
    return true;
}

module.exports = {deleteTask, getTasks, addTask, completeTask};




