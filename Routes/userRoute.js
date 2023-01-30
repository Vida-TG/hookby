const express = require("express");
const path = require("path")
const bcrypt = require("bcrypt")

const User = require('../models/User')

const router = express.Router();

router.get('/all-users', async (req, res) => {
    let users = []
    try{
        users = await User.find()
    } catch (err) {
        console.log(err)
    }
    res.render('../views/index', {users});
})

router.get('/login', (req, res) => {
    res.render('../views/login');
})

router.post('/login', (req, res) => {

    res.render('../views/login');
})

router.get('/register', async (req, res) => {
    res.render('../views/register');
})

router.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save()
        res.redirect('/login');
    } catch(err){
        res.render('../views/register');
    }
})

module.exports = router