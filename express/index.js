const express = require('express');
const mongoose = require('mongoose')
const app = express();
const URL = `mongodb+srv://drakekirkos:1234@webdev.snrip.mongodb.net/`;

app.use(express.json());

mongoose.connect(URL)
.then(() => {
    console.log("Successfully logged into the database!");
    app.listen(4000, ()=> {
        console.log(`App is listening to 4000`);
    })
    
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/postjob", (req, res) => {
app.listen(4000, ()=> {
    console.log(`App is listening to 4000`);

    
})
