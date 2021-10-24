const express = require("express");


const FavoriteController = require('../controllers/FavoriteController');

const Auth = require('../middleware/Auth');


const {check} = require("express-validator");


const router = express.Router();

//? /api/favorites


router.post('/', Auth,[
    check('user','Relacionar el usuario el obligatorio').not().isEmpty(),
    check('meditation','Relacionar la meditacon es obligatorio').not().isEmpty(),
    check('topic','Relacionr un tema es obligatorio').not().isEmpty(),

],FavoriteController.createFavorites);



module.exports = router;
