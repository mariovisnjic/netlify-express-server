const mongoose = require('mongoose')

//SCHEMA
const Schema = mongoose.Schema
const UserSchema = new Schema({
    fullname: String,
    date: {
        type: String,
        default: Date.now()
    }
})

//MODEL
const User = mongoose.model('User', UserSchema)

module.exports = User
