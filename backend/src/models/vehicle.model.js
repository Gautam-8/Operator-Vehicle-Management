

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({

    type: { type: String, required: true,},
    reg_NO: {type: String, required: true,},
    capacity: { type: Number, required: true,},
    totalTrips: { type: Number,required: true,},
  
},{
    versionKey:false,
    timestamps:true
});


module.exports = mongoose.model('vehicle' , vehicleSchema );