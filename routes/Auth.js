const express = require("express");
const {check} = require("express-validator");

const AuthController = require("../controllers/AuthController");

const Auth = require("../middleware/Auth");


const router = express.Router();

// api/users

router.post('/',[
    check("email","Agrega un email valido").isEmail(),
    check("password","El password debe ser de minimo 6 caracteres").isLength({min: 6})
],

AuthController.authUser
);

router.get('/',Auth, AuthController.authenticatedUser);





module.exports = router;