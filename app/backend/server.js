const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

var app = express();
const db = require('./backend/db.js');
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Apply JSON miiiddleware to parse the JSON from frontend
app.use(express.json());

// Satisfy the POST request from the frontend
app.post("/login", function(req, res) {
    // Initialise the variables from the input attributes
    const { userID, userPin } = req.body;

    // Write the MySQL query
    var sql = "INSERT INTO Login VALUES (?, ?)";
    db.query(sql, [userID, userPin]).then(results => {
        console.log(results);
        res.send(results);
    });
});

app.listen(3001, function() {
    console.log(`Server running at http://127.0.0.1:3001`);
});

{/*
// Create express app
var app = express();
//app.use(cors({ origin: true }));
// Apply JSON middleware to parse the JSON from frontend.
//app.use(express.json());

// Create a variable that'll enable a connection to our databse.
const db = require('../services/db');
app.use(express.urlencoded({ extended: true }));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

app.post("/login", function(req, res) {
    // Get the submitted value from the user.
    var params = req.body;

    // Obtain input information from the frontend 
    //to send to our database.
    const userID = params.userID;
    const userPin = params.userPin;

    var sqlStatement = "INSERT INTO Login VALUES (?, ?)";
    db.query(sqlStatement, [userID, userPin]).then(results => {
        console.log(results);
        res.send(results);
    });
});
*/}
