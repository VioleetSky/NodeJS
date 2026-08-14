const EventEmitter=require("events");
const fs=require("fs");
const path=require("path");

const emitter=new EventEmitter();

 const pathToFile=path.join(__dirname, "..", "data", "events.log")

 emitter.on("addTask",(task)=>{
     const descriptionTask={
         title: JSON.stringify(task.title),
         date: new Date().toISOString(),
         hash: JSON.stringify(task.hash)
     }
fs.appendFileSync(pathToFile,`taskCreated: ${descriptionTask.title} | ${descriptionTask.date} | ${descriptionTask.hash} \n`)
 });

 emitter.on("completedTask",(task)=>{
     const descriptionTask={
         title: JSON.stringify(task.title),
         date: new Date().toISOString(),
         id: JSON.stringify(task.id),
         completed: task.completed,
     }
     fs.appendFileSync(pathToFile,`taskCompleted: ${descriptionTask.title} | ${descriptionTask.id} | ${descriptionTask.completed} | ${task.date} \n`);
 })

emitter.on("deleteTask",(task)=>{
    const descriptionTask={
        title: JSON.stringify(task.title),
        date: new Date().toISOString(),
        id: JSON.stringify(task.id),
        completed: task.completed
    }
    fs.appendFileSync(pathToFile,`taskDeleted: ${descriptionTask.title} | ${descriptionTask.id} | ${descriptionTask.completed} \n`);
})

emitter.once("appStart",(systemInfo)=>{
    fs.appendFileSync(pathToFile,`APP START! 
    
System Type: ${systemInfo.type} 
Free Memory: ${systemInfo.freeMemory} 
Hours: ${systemInfo.hours} 
CPU:  ${JSON.stringify(systemInfo.cpu)}\n`)
})

module.exports=emitter;