const {getTasks} = require("./taskService");

function taskFormatter() {
    const tasks = getTasks();
    tasks.forEach(item=>console.log(`Task: ${item.title} \n Status: ${item.complete ? `Completed` : `In progress` }`))
}
module.exports= taskFormatter;