const express = require("express");
const path = require("path")

const router = express.Router();

router.get('/users', (req, res) => {
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