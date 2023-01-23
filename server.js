const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./routes/userRoute')

const app = express()
app.set('view engine', 'ejs')

mongoose.connect(process.env.DBURi)
    .then((result) => app.listen(7000))
    .catch((err) => console.log("DB connect err"));

app.use(express.urlencoded({extended:false}))
app.use('/', userRouter)
