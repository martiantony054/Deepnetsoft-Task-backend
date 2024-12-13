// load env
require('dotenv').config()

// import express 
const exp = require('express')

// import cors 
const cors = require('cors')

// import DB 
const db = require('./DB/Connection')

// import router
const router = require('./Routes/router')

// create an app using express

const app = exp()

// middleware config

app.use(exp.json())
app.use(cors())
app.use(router)

const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Running on PORT ",+PORT);
})

app.get('/',(req,res)=>{
    res.send('welcome to deepsoftnet server')
}) 