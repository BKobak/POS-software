const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.route('/add_user').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const role = req.body.role;
    const id = req.body.id;
    const pin = req.body.pin;

    const newUser = new User({firstName, lastName, role, id, pin});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/add_user').get((req, res) => {
    User.find()
        .then(users => res.json(users))
});
module.exports = router;