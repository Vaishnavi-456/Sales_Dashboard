const mongoose = require('mongoose')
require('dotenv').config()

const mongodbURL = process.env.DB_URL_LOCAL

mongoose.connect(mongodbURL)

const db = mongoose.connection


db.on('connected', ()=>{
   console.log('Connected Successfully')
})

db.on('error', (err)=>{
    console.error(err)
})

db.on('disconnected', ()=>{
    console.log('Sorry!! Disconnected')
})

module.exports = db