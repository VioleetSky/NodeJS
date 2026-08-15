const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Main page");
})
app.get('/about', (req, res) => {
    res.send("About page");
})

app.get('/time', (req, res) => {
    res.send('Поточний час: ' + new Date().toLocaleString('uk-UA'));
})

app.get('/error', (req, res) => {
    res.status(500).send('Server error');
})

app.get("/user/:id", (req, res) => {
    res.send("User ID: " + req.params.id);
})

app.get("/search", (req, res) => {
    const query=req.query.q
    if(!query){
        res.status(400).send('No query found.');
    }
    res.send(`Search page ${query}`);
})


app.get("/user/:id/orders", (req, res) => {
    res.send("User ID: " + req.params.id+ " with status: "+ req.query.status);
})
app.use((req, res) => {
    res.status(404).send('Page Not Found');
})



app.listen(3000, ()=>{
    console.log('Server started on port 3000');
})