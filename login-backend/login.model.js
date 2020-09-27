const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Login = new Schema({
    user_name: {
        type: String
    },
    password: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    gender: {
        type: String
    }
});
module.exports = mongoose.model('Login', Login);
