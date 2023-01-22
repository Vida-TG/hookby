const express = require("express");
const path = require("path")

const router = express.Router();

router.get('/users', (req, res) => {
    res.render('../Views/index');
})

router.get('/login', (req, res) => {
    res.render('../Views/login');
})

router.post('/login', (req, res) => {
    res.render('../Views/login');
})

module.exports = router