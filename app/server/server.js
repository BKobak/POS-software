// Import packages.
const express = require("express");
const cors = require("cors");

// Create express app
var app = express();

// Create a variable that'll enable a connection to our databse.
const db = require('../services/db');
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Apply JSON middleware to parse the JSON from frontend.
app.use(express.json());

// Satisfy the POST request from the AddUser form.
app.post("/addUser", (req, res) => {
    // Initialize variables from the input attributes.
    const { forename } = req.body;
    const { surname } = req.body;
    //const { role } = req.body;
    const { pin } = req.body;

    // Write query that'll be executed in MySQL.
    var sql = "INSERT INTO User (userForename, userSurname, userPin) VALUES (?, ?, ?)";
    db.query(sql, [forename, surname, pin]).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/milk", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM milk";
    
});

// Start server on port 3001
app.listen(3001,function(){
    console.log(`Server running at http://127.0.0.1:3001`);
});