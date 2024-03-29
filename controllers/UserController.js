const User = require("../models/User");

const bcryptjs = require("bcryptjs");

const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        user = new User(req.body);

        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET_KEY, {

            expiresIn: 10000000

        }, (error, token) => {
            if (error) throw error;

            res.json({ token: token, user: user.id });
        });

    } catch (e) {
        console.log(e);
    }

}

exports.getUser = async (req, res) => {



    try {

        let user = await User.findById(req.params.id);

        res.json({ user });

    } catch (error) {
        return res.status(400).json({ msg: "Error getting user" });

    }




}