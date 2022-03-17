const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

// middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect('mongodb://localhost:27017/blogdb', ()=> console.log("connected to DB"))
// mongoose.connect('mongodb://localhost:27017/blogdb', 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }, ()=> console.log("connected to DB")
// )

// routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['RS256'] }))
app.use("/posts", require("./routes/postRouter"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnathorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// PORT
app.listen(8000, () => {
    console.log('Server is running on PORT 8000')
})