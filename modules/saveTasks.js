const fs=require("fs");
const path=require("path");

function saveTasks(tasks){
    const pathToFile=path.join(__dirname, "..", "data", "tasks.json");
    fs.writeFileSync(pathToFile, JSON.stringify(tasks, null, 2));
}


module.exports=saveTasks;