const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const databaseCon = require('./db/dbConfig');
const Student = require('./models/Student');

// middleware for json
app.use(express.json());

//implement cors
app.use(cors());

// database connection

databaseCon.sync({
    alter: true
})


app.get("/students", async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
})

app.post("/students", async (req, res) => {
    const { name, age } = req.body;
    await Student.create({ name, age });
    res.json({ message: "Student added successfully" });
});

app.delete("/students/:id", async (req, res) => {
    const id = req.params.id;
    await Student.destroy({
        where: {
            id: id
        }
    });
    res.json({ message: "Student deleted " });
})

app.put("/students/:id", async (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    await Student.update({ name, age }, {
        where: {
            id: id
        }
    });
    res.json({ message: "Student updated " });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

