const Favorite = require("../models/Favorite");


const { validationResult } = require("express-validator");


exports.createFavorites = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        let favorite = new Favorite(req.body);

        favorite.save();

        res.json(favorite);

        
    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Error creating new favorites" });

    }
}

exports.getFavoritesByUser = async (req, res) => {

}