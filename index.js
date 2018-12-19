// include dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const { mongoose } = require('./db.js');

var userController = require('./controllers/userController.js');
var examController = require('./controllers/examController.js');

// express app
const app = express();

// body-parser middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors({ 
    origin : 'http://localhost:4200',
    optionsSuccessStatus: 200
}));

// port number
const port = 8080

// index route
app.get('/', (req, res) => {
    res.send("backend ka dummy route")
});

// listen port. server start
app.listen(port, () => console.log("Server started on port : " + port));

app.use('/user', userController);
app.use('/exam', examController);