require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const gravatar = require('gravatar')

//load models
// const User = require('../../models/user')
const db = require('../../models')


//API ROUTES
//GET api user already registered
    //if not registered, register user
// get log people in and check their creds against existing user data
//GET if already logged in, set user data to current

router.get('/', (req,res) => {
    db.User.find()
    .then(users => {
        res.send(users)
    })
    .catch(err => console.error(err))
})

router.get('/test', function(req,res) {
    console.log(`successfully connected to backend!!!!!!!!`)
})

// GET api/users/register (Public)
router.post('/register', (req, res) => {
    // Find User By Email
    db.User.findOne({ email: req.body.email })
      .then(user => {
        // If email already exists, send 400 response
        if(user) {
          return res.status(400).json({email: 'Email already exists'});
          // If email does not already exist, create new user
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200', // avatar size option
                r: 'pg', // avatar rating option
                d: 'mm', // default avatar option
              });
  
          // Create new user
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            DOB: req.body.DOB,
            zipCode: req.body.zipCode,
            avatar
          });
  
          // Salt and Hash password with bcryptjs, then save new user
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
    })
});

module.exports = router