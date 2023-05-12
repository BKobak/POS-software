// Import packages.
const express = require("express");
const cors = require("cors");

// Create express app.
var app = express();

// Create a variable that'll enable a connection to our database.
const db = require('../services/db');
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
// Apply JSON middleware to parse the JSON from frontend.
app.use(express.json());

// Satisfy the POST request from the AddUser form.
app.post("/addUser", (req, res) => {
    // Initialize variables from the input attributes.
    const { forename } = req.body;
    const { surname } = req.body;
    const { role } = req.body;
    const {id} = req.body;
    const { pin } = req.body;

    // Write query that'll be executed in MySQL.
    var sql = "INSERT INTO User (userForename, userSurname, userRole, userPin, userId) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [forename, surname, role, pin, id]).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/milk", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Milk";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/syrup", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Syrup";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/topping", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Topping";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/preparation", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Preparation";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

//
// Queries for Drink category.
//
app.get("/espresso", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Drinks WHERE category='espresso'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/iced", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Drinks WHERE category='frappe'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/brewed", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Drinks WHERE category='brewed'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/tea", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Drinks WHERE category='tea'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/other", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Drinks WHERE category='other'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

//
// Queries for Pastry category.
//
app.get("/breakfast_pastry", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='breakfast pastry'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/cookies", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='cookie'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/cakes", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='cake'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/loafcakes", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='loaf cake'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/muffins", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='muffin'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

//
// Queries for Chilled category.
//
app.get("/breakfast_chilled", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='breakfast chilled'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/toasties", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='toastie'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/paninis", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='panini'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/pots", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Food WHERE category='pot'";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});

app.get("/others", (req, res) => {
    // Write query that'll be executed in MySQL.
    var sql = "SELECT * FROM Others";
    db.query(sql).then(results => {
        console.log(results);
        // Send the results to the database.
        res.send(results);
    });
});


// Handle a request to the login endpoint
app.post('/login', (req, res) => {
    const { id, pin } = req.body;
  
    // Execute the query to retrieve the user with the given ID
    db.query('SELECT * FROM User WHERE userId = ? and userPin = ?', [id, pin], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else if (results.length === 0) {
        res.status(401).send('Invalid ID or PIN');
      } else {
        // Authentication successful, redirect to the display page
        return res.redirect('/display');
      }
    });
  });


// Start server on port 3001.
app.listen(3001,function(){
    console.log(`Server running at http://localhost:3001`);
});