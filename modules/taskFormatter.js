

function taskFormatter(tasks) {
    tasks.forEach(item=>console.log(`Task: ${item.title} \n Status: ${item.completed ? `Completed` : `In progress` }`))
}
module.exports= taskFormatter;