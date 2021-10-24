const express = require("express");

const UserController = require("../controllers/UserController");
const Auth = require('../middleware/Auth');

const {check} = require("express-validator");


const router = express.Router();

//? api/users

router.post("/",[
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email","Agrega un email valido").isEmail(),
    check("password", "El password debe ser de minimo 6 caracteres").isLength({min: 6})
],
    UserController.createUser
);

router.get('/:id', Auth, UserController.getUser);



module.exports = router;