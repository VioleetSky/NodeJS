const fs=require("fs");
const path=require("path");

function readTasks(){
const pathToFile=path.join(__dirname, "..", "data", "tasks.json");
const tasks=fs.readFileSync(pathToFile, "utf8");
return JSON.parse(tasks);
}

module.exports=readTasks;