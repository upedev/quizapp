const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');
var examController = require('./controllers/examController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200'}));



app.listen(8080, () => console.log("Server started at port : 8080"));

app.use('/user', userController);
app.use('/exam', examController);