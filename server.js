const http=require("http");
const {getTasks}=require("./modules/taskService")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Study Task Tracker API</h1>`)
        return;
    }
    if(req.url==="/tasks"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const tasks=getTasks();
        res.end(JSON.stringify(tasks, null, 2));
        return;
    }
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if(parsedUrl.pathname === "/tasks"){
        const status=parsedUrl.searchParams.get("status");
        const tasks=getTasks();

        if(status) {
            let tasksFilter;
            if (status === "completed") {
                tasksFilter = tasks.filter((task) => task.completed === true);
            }

            if (status === "active") {
                tasksFilter = tasks.filter((task) => task.completed === false);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(tasksFilter, null, 2));
            return;
        }
        const id=+parsedUrl.searchParams.get("id");
        let task=tasks.find((item)=>item.id===id);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        if(!task){
            res.statusCode=404;
            res.end(JSON.stringify({
                    "error": "Task not found"
                }
            ));
            return;
        }
        res.end(JSON.stringify(task, null, 2));
        return;
    }

})


server.listen(3000, ()=>{
    console.log("Server started on port 3000");
})