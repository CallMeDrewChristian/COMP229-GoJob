const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mongoose= require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/authRoutes')
const {requireAuth} = require("./utils/utils");

/*
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())


//viewing engine for ejs files in ../views
app.set('view engine', 'ejs')


app.get('/', (req,res)=> res.render('home'))
app.get('/employees', requireAuth, (req,res)=> {
    res.render('employees')
})
app.use(authRoute) */
