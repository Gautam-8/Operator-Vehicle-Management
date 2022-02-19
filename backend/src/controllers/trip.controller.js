const express = require('express');

const Trip = require('../models/trip.model');

const router = express.Router();

router.get('/:num', async (req ,res) => {

    //console.log(req.params.num);

try{

    const trip = await Trip.find({Reg_NO : req.params.num}).lean().exec();

    return res.status(200).json(trip)

}catch(e){
    return res.status(400).json('Something went wrong')
}
});


module.exports = router;