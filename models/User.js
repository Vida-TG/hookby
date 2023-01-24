const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 10,
        require: true,
        unique: true
    },
    email: {
        type: String,
        max: 50,
        require: true,
        unique: true
    },
    password: {
        type: String,
        min: 5,
        max: 50,
        require: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)