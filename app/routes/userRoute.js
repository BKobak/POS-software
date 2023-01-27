{/*
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.route('/create_user').post((req, res) => {
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const role = req.body.role;
    const userId = req.body.id;
    const PIN = req.body.pin;

    const newUser = new User({first_name, last_name, role, userId, PIN});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/create_user').get((req, res) => {
    User.find()
        .then(users => res.json(users))
});

module.exports = router;
*/}