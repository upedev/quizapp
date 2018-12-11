const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');

var app = express();
app.use(bodyParser.json);



app.listen(8080, () => console.log("Server started at port : 8080"));

app.use('/user', userController);