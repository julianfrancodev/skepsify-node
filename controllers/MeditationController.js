const Meditation = require("../models/Meditation");

const { validationResult } = require("express-validator");


exports.createMeditation = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {


        let meditation = new Meditation(req.body);

        meditation.save();

        res.json(meditation);


    } catch (error) {
        
        console.log(error);
        res.status(500).json({ msg: "Error creating new meditation" });

    }

}

exports.getHomeMedidations = async (req, res) => {

    try {


        await Meditation.findRandom({}, {}, {limit: 10}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }

}

exports.getTodayMeditations = async (req, res) => {
    try {

        await Meditation.findRandom({}, {}, {limit: 6}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }
}

exports.getForYouMeditations = async (req, res) => {
    try {

        await Meditation.findRandom({}, {}, {limit: 6}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }
}

exports.getMeditationsByTool = async (req, res) => {

    try {

        let tool = req.params.id;

        let toolsMeditation = await Meditation.find({tool: tool});

        res.json({toolsMeditation});

    } catch (error) {
        console.log(error);
    }

}


exports.getMeditationsByTopic = async (req, res) => {
    try {

        let topic = req.params.id;

        let topicMeditations = await Meditation.find({topic: topic});

        res.json({topicMeditations});

    } catch (error) {
        console.log(error);
    }
}

exports.getMoreCoursesForYou = async (req, res)=>{
    try {

        await Meditation.findRandom({}, {}, {limit: 11}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }
}

exports.getRightNowMeditation = async (req, res)=>{
    try {

        await Meditation.findRandom({}, {}, {limit: 1}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }
}


exports.getInsterestMeditation = async (req, res)=>{
    try {

        await Meditation.findRandom({}, {}, {limit: 1}, function(err, meditations) { 
            res.json({meditations});
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting home random meditations" });

    }
}