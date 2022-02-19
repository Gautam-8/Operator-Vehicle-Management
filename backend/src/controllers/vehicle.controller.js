const express = require('express');

const Vehicle = require('../models/vehicle.model');

const router = express.Router();

router.get('/particular/:num', async (req ,res) => {

    try{
      const vehicle = await Vehicle.findOne({reg_NO : req.params.num}).lean().exec();
      //console.log(vehicle);
      if(!vehicle || vehicle.length === 0) {
          return res.status(400).json('NA')
      }
        return res.status(200).json( vehicle);
        }
        catch(e){
           return res.status(500).json(e.message);
        }
}
);



router.get('/:type' , async(req , res) => {

    try{

    if(req.params.type === 'all'){

        const page = +req.query.page || 1;
        const size = +req.query.size || 4;
        const skip = (page - 1) * size;
    
        const vehicles = await Vehicle.find().skip(skip).limit(size).lean().exec();
    
        const totalPages = Math.ceil(
            ( await Vehicle.find().countDocuments() )/size
        );

        return res.send( {vehicles , totalPages} );
    }

    else{

        const page = +req.query.page || 1;
        const size = +req.query.size || 2;
        const skip = (page - 1) * size;
    
        const vehicles = await Vehicle.find({type : req.params.type}).skip(skip).limit(size).lean().exec();
    
        const totalPages = Math.ceil(
            ( await Vehicle.find({type : req.params.type}).countDocuments() )/size
        );

        return res.send( {vehicles , totalPages} );

    }
       
        }
        catch(e){
           return res.status(500).send(e.message);
        }
} );




module.exports = router;