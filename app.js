const express = require('express');
const app = express();
const pool = require('./dbConnection');

app.use('/' , function(req, res) {
  var sql = "SELECT * FROM cats";
    //pool.connect();
    console.log("pool connected");

    pool.query(sql, function(err, result) {
        if(err) {
            console.log(err.code);
            console.log(err.message);
            console.log(err.stack);
            console.log(process.env.DATABASE_URL);
            res.status(404).send('Not Finding Orion');
        }
        res.send(result);
    });

   //pool.end();
   //console.log("pool ended");
});

module.exports = app;
