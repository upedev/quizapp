var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    var db = client.db('quizapp');
    var cursor  = db.collection('user').find();
    cursor.forEach((doc, err) => {
        console.log(doc);
    })
    client.close();
});
