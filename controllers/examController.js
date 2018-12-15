const express = require('express');
var router = express.Router();

var { Exam } = require('../models/exam.js');


router.get('/:id', (req, res) => {
    Exam.findOne({"id" : req.params.id}, (err, docs) =>{
        if(err) res.status(400).send("No exam with given id");
        res.send(docs);
    });
});

router.post('/add', (req, res) => {
    var new_exam = new Exam({
        id: req.body.id,
        short_name: req.body.short_name,
        name: req.body.name,
        desc: req.body.desc
    });
    new_exam.save((err, doc) => {
        if(err) res.status(500).send("Error in saving new employee");
        res.status(200).send("SUCCESS");
    });
});

module.exports = router;