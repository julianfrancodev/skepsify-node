const Recent = require("../models/Recent");


const { validationResult } = require("express-validator");


exports.createRecent = async (req, res)=>{


    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        let recent = new Recent(req.body);

        recent.save();

        res.json(recent);


    } catch (error) {
        
        console.log(error);

        res.status(500).json({ msg: "Error creating new recents" });

    }

}

exports.getRecentsByUser = async (req, res)=>{

    try {

        let userId = req.params.id;

        let recents = await Recent.find({user: userId}).populate('meditation');

        res.json({recents});
        
    } catch (error) {
        return res.status(400).json({ msg: "Error getting recents" });

    }

}