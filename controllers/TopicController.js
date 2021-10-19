const Topic = require("../models/Topic");


const { validationResult } = require("express-validator");


exports.createTopic = async (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {

        let topic = new Topic(req.body);

        topic.save();

        res.json(topic);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error creating topic" });

    }

}


exports.getTopics = async (req, res)=>{
    try {
        
        const topics = await Topic.find({});

        res.json({topics});

    } catch (error) {

        console.log(error);

        res.status(500).json({ msg: "Error getting tools" });

    }
}