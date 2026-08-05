const {getTasks, addTask, completeTask, deleteTask}=require("./modules/taskService");
const taskFormatter =require("./modules/taskFormatter");



addTask({
        title: 'Learn Node.js modules',
        completed: false
}, {
    title: 'Cooking',
    completed: false,
},
    {
        title: 'Work',
        completed: false,
    })

console.log(getTasks());
taskFormatter();
completeTask(2);
deleteTask(1);
console.log(getTasks());
taskFormatter();


