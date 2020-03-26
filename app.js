const express = require('express');
const app = express();
const pool = require('./dbConnection');

app.use('/' , function(req, res) {
  var sql = "SELECT * FROM collagetable";
    //pool.connect();
    console.log("pool connected");
    console.log(process.env.DATABASE_URL);
    pool.query(sql, function(err, result) {
        if(err) {
            console.log(err.code);
            console.log(err.message);
            console.log(err.stack);
            res.status(404).send('Not Finding Orion');
        }
        console.log(result);
        res.send(result.rows);
    });

   //pool.end();
   //console.log("pool ended");
});

module.exports = app;
