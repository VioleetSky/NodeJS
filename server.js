const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
    res.render('profile', {
        name: "Ваше ім'я",
        role: 'Студент курсу Node.js',
        hobbies: ['хобі 1', 'хобі 2', 'хобі 3', "55"],
        isOnline: true
    });
})
app.get("/students", (req, res) => {
    const students = [
        { name: 'Оля', level: 'junior' },
        { name: 'Максим', level: 'middle' },
        { name: 'Ірина', level: 'senior' }
    ];

    res.render('student', {students});
})

app.use(( req, res) => {
    res.status(404).render('not-found', { url: req.url });
})



app.listen(3000, () => console.log("Server started on port 3000"));