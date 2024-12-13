// import mongoose 
const mongoose = require('mongoose')

// getconnectionstring
const connect = process.env.connectionstring

// define connection

mongoose.connect(connect).then(res=>{
    console.log("Connected To MONGODB");
    
}).catch(e=>{
    console.error("error"+e);
    
})