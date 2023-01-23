const express = require("express");
const path = require("path")

const User = require('../models/User')

const router = express.Router();

router.get('/users', async (req, res) => {
    try{
        const users = await User.find()
        console.log(users)
    }
    res.render('../views/index');
})

router.get('/login', (req, res) => {
    res.render('../views/login');
})

router.post('/login', (req, res) => {
    res.render('../views/login');
})

router.get('/register', (req, res) => {
    res.render('../views/register');
})

module.exports = router