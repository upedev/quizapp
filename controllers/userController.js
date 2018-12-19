const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

// register route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: "Registration Failed"})
        } else{
            res.json({success: true, msg: "Registration Successful"})
        }
    });
});

// auth route
router.post('/auth', (req, res, next) => {
    res.send("authentication route chala")
});

// profile route
router.get('/profile', (req, res, next) => {
    res.send("profile route chala")
});

// users list route
router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in fetching user'); }
    });
});

module.exports = router;