const User = require('../models/user.model');

const login = async ( req , res ) => {

    try{

        const user = await User.findOne({email:req.body.email , password:req.body.password}).lean().exec();

        if(!user) {
            return res.status(400).json('invalid email or password')
        }

        return res.status(200).json(user);

    }

    catch(e){
       return res.status(500).json(e.message);
    }
}


const register = async ( req , res ) => {

    try{

        let user = await User.findOne({email:req.body.email}).lean().exec();

        if(user) {
            return res.status(400).json('user already exists')
        }

        user = await User.create(req.body);

        return res.status(200).json(user);

    }
    
    catch(e){

        return res.status(500).json(e.message);

    }
}


module.exports = { register , login};


