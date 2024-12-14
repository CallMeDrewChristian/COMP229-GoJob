const jwt = require('jsonwebtoken');
   const User = require('../models/user');
   require('dotenv').config();



 

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

   const logoutAuth = async (req, res, next) => {
      const token = req.cookies.jwt;
      if (token) {
          jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
              if (err) {
                  res.status(401).json({ message: "Unauthorized!" });
              } else {
                  res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'strict' });
                  res.clearCookie('name', { httpOnly: true, secure: true, sameSite: 'strict' });
                  res.clearCookie('type', { httpOnly: true, secure: true, sameSite: 'strict' });
                  res.clearCookie('id', { httpOnly: true, secure: true, sameSite: 'strict' });
                  res.status(200).json({ message: "Logged out successfully!" });
              }
          });
      } else {
          res.status(401).json({ message: "Unauthorized! No token provided." });
      }
  };
  


   module.exports = { createToken, requireAuth, logoutAuth }