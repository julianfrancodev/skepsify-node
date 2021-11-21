
const Podcast = require("../models/Podcast");

const { validationResult } = require("express-validator");


exports.createPodcast = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {


        let podcast = new Podcast(req.body);

        podcast.save();

        res.json(podcast);


    } catch (error) {
        
        console.log(error);
        res.status(500).json({ msg: "Error creating new meditation" });

    }

}


exports.getRandomPodcasts = async (req, res) => {

    try {


        await Podcast.findRandom({}, {}, {limit: 10}, function(err, podcasts) { 
            res.json({podcasts});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random podcasts" });

    }

}