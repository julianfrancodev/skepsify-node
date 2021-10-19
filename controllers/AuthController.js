const User = require("../models/User");

const bcryptjs = require("bcryptjs");

const { validationResult } = require("express-validator");


const jwt = require("jsonwebtoken");


exports.authUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (!user) return res.status(400).json({ msg: 'El usuario no existe' });

        const verifyPassword = await bcryptjs.compare(password, user.password);

        if (!verifyPassword) return res.status(400).json({ msg: "Password Incorrecto" });

        const payload = {
            user: {
                id: user.id
            }
        }

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



exports.authenticatedUser = async (req, res)=>{
    try {

        const user = await User.findById(req.user.id).select('-password');
        
        res.json({user});
        
    } catch (e) {
        console.log(e);
        res.status(500).json({ mag: "Hubo un error" });

    }
}