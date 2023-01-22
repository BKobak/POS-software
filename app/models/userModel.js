const { stringifyRequest } = require('loader-utils');
const mongoose = require('mongoose');

const usersSchema = {
    firstName: String,
    lastName: String,
    role: String,
    id: Int32Array,
    pin: Int32Array
}

const User = mongoose.model('User', usersSchema);

module.exports = User;