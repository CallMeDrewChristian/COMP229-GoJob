const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user');
const { createToken, requireAuth, logoutAuth } = require('../utils/utils');
const Job = require('../models/job');


//REMEMBER TO ADD FIRST NAME LAST NAME COMPANY NAME!!!
router.get('/signup', (req,res)=>res.render('signup'))

router.post('/signup', async (req, res) => {
    const {
        email,
        password,
        role,
        firstName,
        lastName,
        address,
        dateOfBirth,
        phoneNumber,
        educationLevel,
        jobPosition,
        company,
        companyWebsite
    } = req.body;

    try {
        const newUser = new User({
            email,
            password,
            role,
            firstName,
            lastName,
            address,
            dateOfBirth,
            phoneNumber,
            educationLevel,
            jobPosition,
            company,
            companyWebsite
        });

        const user = await newUser.save();
        console.log('User created:', user);
        res.status(201).json({ user: user._id });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
});


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

router.get("/jobpost", async(req,res) => {
    try {
        const Jobs = await Job.find();
        res.status(201).json(Jobs)
    }

    catch(err){
        console.error(`Error: ${err}`)
        res.status(404).json({'message': `Error: ${err}`});
    }
})


router.post("/jobpost", async(req,res) => {
    try{
        console.log("Working")
        const {title, description, deadline, company} = req.body;
        //checkAuthentication
        const jobPost = await Job.create({
            'title': title,
            'description': description,
            'deadline': deadline,
            'company': company
        })

        await jobPost.save();
        console.log("Saved!")
        res.status(201).json({message: "Success!"})

    }
    catch(err){
        console.error(`Error: ${err}`)
        res.send(`Error: ${err}`)
    }
})
router.patch("/jobpost", async(req,res) => {
    try{
        const {title, company, newtitle,newdescription,newdeadline} = req.body;
        const updatedJob = await Job.findOneAndUpdate({title: title, company: company}, {'title':newtitle,'description':newdescription,'deadline':newdeadline}, {new: true, runValidators: true})
        res.status(201).json({message: "Successfully updated!", updatedJob})
    }
    catch(err){
        console.error(`Error: ${err}`)
        res.status(404).json({'message': `Error: ${err}`});
    }
})
router.delete("/jobpost", async(req,res) => {
    try{
        const {title, company} = req.body;
        const updatedJob = await Job.findOneAndDelete({title: title, company: company})
        res.status(201).json({message: "Successfully deleted!", updatedJob})
    }
    catch(err){
        console.error(`Error: ${err}`)
        res.status(404).json({'message': `Error: ${err}`});
    }
})

router.get("/auth", requireAuth)
router.get("/logout", logoutAuth)


module.exports = router