const express = require('express');
var router = express.Router();

var { User } = require('../models/user.js');


router.get('/list', (req, res) => {
    res.send('Hello!');
    // User.find((err, docs) => {
    //     res.send('success');
    //     //if(!err) { res.send(docs); }
    //     //else { console.log('Error in fetching user') }
    // });
});

module.exports = router;