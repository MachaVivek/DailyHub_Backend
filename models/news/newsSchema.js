const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    conclusion:{
        type:String,
        required:true
    }
})

const News = mongoose.model('NEWS',newsSchema)
module.exports = News