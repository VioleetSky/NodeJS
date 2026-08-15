const {getTasks, addTask, completeTask, deleteTask}=require("./modules/taskService");
const taskFormatter =require("./modules/taskFormatter");
const initStorage=require("./modules/initStorage");
const saveTasks=require("./modules/saveTasks");
const readTasks=require("./modules/readTasks");
const systemInfo=require("./modules/systemInfo");
const emitter=require("./modules/eventLogger")

emitter.emit("appStart", systemInfo);
console.log(initStorage());
addTask({
        title: 'Learn Node.js modules',
        completed: true
}, {
    title: 'Cooking',
    completed: false,
},
    {
        title: 'Work',
        completed: true,
    },
    {
        title: '1234',
        completed: false,
    },
    {
        title: '54545',
        completed: true,
    });

console.log("readTask \n",readTasks());
saveTasks(getTasks());
console.log(readTasks());
taskFormatter(readTasks());






