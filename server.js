const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./Routes/userRoute')

const app = express()
app.set('view engine', 'ejs')

mongoose.connect(process.env.DBURi,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)
    .then((result) => app.listen(7000))
    .catch((err) => console.log("DB connect err"));

app.use('/', userRouter)
