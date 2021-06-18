const mongoose = require('../connection');
const schema = new mongoose.Schema({
    fullname: String,
    email: String,
    username: String,
    password: String
})
const model = mongoose.model('Users', schema);
module.exports = model;