const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const config = require('../config/db');

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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) {
            throw err;
        }
        if(!user) {
            return res.json({success: false, msg: "User Not Found"})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err){
                throw err;
            }
            if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                   expiresIn: 10800 // 3 hours. 
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    name: user.name,
                    username: user.username,
                    email: user.email
                });
            } else {
                return res.json({success: false, msg: "Incorrect Password"});
            }
        });
    });
});

// profile route
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.send({user: req.user});
});

// users list route
router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in fetching user'); }
    });
});

module.exports = router;