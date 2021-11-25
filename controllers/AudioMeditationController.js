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

exports.getAudiosByMedidation = async (req, res) => {

    try {
        

        let meditation = req.params.id;
        let level = req.params.level;

        let meditationAudio = await AudioMeditation.find({meditation: meditation, level: level});

        res.json({meditationAudio});

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error getting audios from  meditations" });

    }

}


exports.getPodcastsAudios = async (req, res)=>{


    try {

        let podcats = await AudioMeditation.find({plan: 'PODCAST'});

        res.json({podcats});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error getting podcasts from audios" });
    }

}