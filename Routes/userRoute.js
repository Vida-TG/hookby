const express = require("express");
const path = require("path")

const router = express.Router();

router.get('/users', (req, res) => {
    res.sendFile('../Views/index.ejs');
})

module.exports = router