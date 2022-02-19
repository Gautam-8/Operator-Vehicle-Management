

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    Reg_NO: {type: String, required: true,},
    capacity: { type: Number, required: true,},
    from:{type:String , required:true},
    to:{type:String , required:true}
   
  
},{
    versionKey:false,
    timestamps:true
});


module.exports = mongoose.model('trip' , tripSchema );