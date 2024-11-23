const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

'


deswqeqwqewnioqewionqewionqewnioeqwnioeqwnioqewion

app.get("/getjobs", (req,res) => {
    res.send("Jobs");
})
app.listen(4000, ()=> {
    console.log(`App is listening to 4000`);
})
