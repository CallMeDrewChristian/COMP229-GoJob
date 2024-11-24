const express = require('express');
const mongoose = require('mongoose')
const app = express();
const URL = `mongodb+srv://drakekirkos:1234@webdev.snrip.mongodb.net/users?retryWrites=true&w=majority&appName=WebDev`;
const authRoute = require('../routes/authRoutes');
require('dotenv').config()
const { requireAuth } = require("../utils/utils");



app.use(express.json());
app.use(express.static('public'))
app.use(cookieParser())

app.set('view engine', 'ejs')

mongoose.connect(URL)
    .then(() => {
        console.log("Successfully logged into the database!");
        app.listen(4000, () => {
            console.log(`App is listening to 4000`);
        })

    })
    .catch((err) =>{
        console.log("failed to connect")
    })

app.post("/", (req, res) => {
    res.send("Bye!");
})
app.get("/", (req, res) => {
    res.send("Hello World");
})


app.post("/postjob", (req, res) => { })
app.listen(4000, () => {
    console.log(`App is listening to 4000`);


})

app.get('/', requireAuth, (req, res) => res.render('home'))
app.get('/', requireAuth, (req, res) => res.render('signup'))
app.get('/', requireAuth, (req, res) => res.render('login'))


app.use(authRoute)