const jwt = require('jsonwebtoken');
   const User = require('../models/user');
   require('dotenv').config();



   //creating tokens(cookies) and verifying it
   //copied from lesson*

   const createToken = (id) => {
      return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 3 * 24 * 60 * 60} );
   }
   
   const requireAuth = async (req, res, next) => {
      const token = req.cookies.jwt;
      if(token)
      {
         jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken)=> {
            if(err)
            {
               res.status(401).json({message: "Unauthorized!"})
            }
            else
            {
               res.status(201).json({message: "Success!"})
            }
   
         })
   
      }
      else{
         res.status(401).json({message: "Unauthorized!"})
         return false
      }
   }


   module.exports = { createToken, requireAuth }