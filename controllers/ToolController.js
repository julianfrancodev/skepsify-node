const Tool = require("../models/Tool");

const { validationResult } = require("express-validator");


exports.createTool = async (req, res)=>{
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        let tool = new Tool(req.body);

        tool.save();

        res.json(tool);
        
    } catch (e) {

        console.log(error);

        res.status(500).json({ msg: "Error creating tool" });

    }

}

exports.getTools = async( req, res)=>{
    

    try {

        const tools = await Tool.find({});

        res.json({tools});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error getting tools" });

    }


}