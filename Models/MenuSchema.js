// import mongoose

const mongoose = require('mongoose')

const menunameschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      
})

const menu = mongoose.model ('menuname',menunameschema)

module.exports=menu