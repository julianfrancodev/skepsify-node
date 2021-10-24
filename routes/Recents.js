const express = require("express");


const RecentController = require('../controllers/RecentController');

const Auth = require('../middleware/Auth');


const { check } = require("express-validator");


const router = express.Router();

//? /api/recents


router.post('/', Auth, [

    check('user', 'Es obligatorio relacionar el usuario').not().isEmpty(),
    check('meditation', 'Es obligatorio relacionar la meditacion').not().isEmpty(),

], RecentController.createRecent);




module.exports = router;