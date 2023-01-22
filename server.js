const express = require('express')

const userRouter = require('./Routes/userRoute')

const app = express()
app.set('view engine', 'ejs')

app.use('/', userRouter)

app.listen(7000, () => {
    console.log("Started");
})