const AudioMeditation = require('../models/AudioMeditation');

const { validationResult } = require("express-validator");


exports.createAudioMeditation = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let audioMeditation = new AudioMeditation(req.body);

        audioMeditation.save();

        res.json({audioMeditation});
    } catch (error) {

        console.log(error);

        res.status(500).json({ msg: "Error creating new audio meditation" });

    }


}

exports.getAudioByMedidations = async (req, res) => {

}