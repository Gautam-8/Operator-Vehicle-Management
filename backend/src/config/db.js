const mongoose = require('mongoose');

const connect = () => {

    return mongoose.connect('mongodb+srv://gautamh8:gautamh8@cluster0.zgrdc.mongodb.net/vehicle_os',{useNewUrlParser:true , useUnifiedTopology:true})
}

module.exports = connect;