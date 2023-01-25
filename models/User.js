const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 4,
        max: 15,
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
        min: 6,
        max: 40,
        require: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)