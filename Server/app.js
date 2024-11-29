const express = require('express')
const app = express();
app.set('view engine', 'ejs')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/authRoutes');
const { requireAuth } = require('./utils/utils');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;
app.use(express.json())
app.use(cookieParser())
app.use(cors())
mongoose.connect(URL)
    .then(() => {
        console.log("Successfully logged into the database!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    })
    .catch((err) =>{
        console.log(`Error: ${err}`)
    })


app.get('/', (req, res) => {
    res.render('index');
});

app.get("/employees", requireAuth, (req,res) => {
    res.render("employees")
})

/*app.get('/signup', (req,res) => {
    res.render('signup')
})*/
app.get('/login', (req,res) => {
    res.render('login')
})


app.use(authRoute)