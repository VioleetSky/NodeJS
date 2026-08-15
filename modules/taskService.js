const emitter=require("./eventLogger");
const crypto=require("crypto");
const fs=require("fs");
const path=require("path");

const pathToFile=path.join(__dirname, "..", "data", "tasks.json");
let tasks = JSON.parse(fs.readFileSync(pathToFile, "utf8"));
console.log(tasks);

function addTask(...task) {
    task.forEach(item => {
        item.id = tasks.length+1;
        item.createdAt = new Date().toISOString();
        item.hash=crypto
            .createHash('sha256')
            .update(`${item.title}-${item.id}-${item.createdAt}`)
            .digest("hex");
        tasks.push(item);
        emitter.emit("addTask", item);
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
    emitter.emit("completeTask", task);
    return true;
}

function deleteTask(task) {
    tasks = tasks.filter(isTask => isTask.id !== task.id);
    emitter.emit("deleteTask", task);
    return true;
}

module.exports = {deleteTask, getTasks, addTask, completeTask};




