const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');
var examController = require('./controllers/examController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200'}));

const port = 8080

app.get('/', (req, res) => {
    res.send("backend ka dummy route")
});
app.listen(port, () => console.log("Server started on port :" + port));

app.use('/user', userController);
app.use('/exam', examController);