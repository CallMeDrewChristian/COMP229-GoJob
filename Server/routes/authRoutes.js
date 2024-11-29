const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user');
const { createToken } = require('../utils/utils');



router.get('/signup', (req,res)=>res.render('signup'))

router.post('/signup', async (req,res) => {

        try{
            const {email, password, role} = req.body
        const user = await User.create({email, password, role})
        console.log("User Created");
        const token = createToken(user._id)
        console.log("Token Created");
        res.cookie('jwt', token, {httpOnly: true, maxAge: 3*24*60*60*1000})
        res.status(201).json({user: user._id})

    }
    catch(err)
    {
        console.log(`Error: ${err}`)
        res.send(`Error: ${err}`)
    }
})

router.get("/login", (req,res)=>{res.render("login")})

router.post('/login', async (req,res) => {
    try{
        const {email, password} = req.body
        console.log(email, password)
        const user = await User.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: 3*24*60*60*1000})
        res.status(201).json({user: user._id})
        

    }
    catch(err)
    {
        console.log(`Error: ${err}`)
        res.send(`Error: ${err}`)

    }
})

router.patch("/changepassword", async(req, res) => {
    try{
        const {email, oldpassword, newpassword} = req.body
        const user = await User.findOne({email});
        if (!user) {return res.status(404).json({error: "User Not Found"})}
        await user.changePassword(email, oldpassword, newpassword);
        console.log("Password has changed")
        res.send("Successfully changed password!")
    }
    catch(err) {
        console.error(`Error: ${err}`)
        res.send(`Error: ${err}`)
    }
})

router.delete("/deleteaccount", async(req,res) => {
    try{
        const {email,password} = req.body
        const user = await User.findOne({email});
        if (!user) {return res.status(404).json({error: "User Not Found"})}
        console.log(email, password)
        await user.deleteAccount(email,password);
        res.send("Successfully Deleted!")
    }
    catch(err) {
        console.error(`Error: ${err}`)
        res.send(`Error: ${err}`)
    }
})

module.exports = router