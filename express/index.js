const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})


<<<<<<< HEAD
<<<<<<< HEAD
app.get("/getjobs", (req,res) => {
    res.send("Jobs");
})
app.get("/getjewqeqwqewqewobs", (req,res) => {
    res.send("Jobs");
})
=======
>>>>>>> parent of c5faa67b (Added getJobs)
=======
>>>>>>> parent of c5faa67b (Added getJobs)
app.listen(4000, ()=> {
    console.log(`App is listening to 4000`);
})
