const express = require("express");

const TopicController = require("../controllers/TopicController");

const Auth = require('../middleware/Auth');

const { check } = require("express-validator");


const router = express.Router();


router.post('/', Auth, [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('phrase', "La frase es obligatorio").not().isEmpty(),
    check('image', "La imagen es obligatoria").not().isEmpty()
], TopicController.createTopic);


router.get('/', Auth, TopicController.getTopics);

module.exports = router;