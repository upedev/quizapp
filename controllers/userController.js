const express = require('express');
var router = express.Router();

var { User } = require('../models/user.js');


router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in fetching user'); }
    });
});

module.exports = router;