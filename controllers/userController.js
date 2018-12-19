const express = require('express');
const router = express.Router();

var { User } = require('../models/user.js');

// register route
router.get('/register', (req, res, next) => {
    res.send("register route chala")
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