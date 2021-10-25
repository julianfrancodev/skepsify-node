const express = require("express");

const AudioMeditationController = require("../controllers/AudioMeditationController");
const Auth = require("../middleware/Auth");

const { check } = require("express-validator");


const router = express.Router();

//? /api/audiomeditations


router.post('/', Auth, [
    check("name", "El nombre del audio es obligatorio").not().isEmpty(),
    check("meditation", "La meditacion es obligatoria").not().isEmpty(),
    check("status", "El status es obligatorio").not().isEmpty(),
    check("level", "El nivel es obligatorio").not().isEmpty(),
    check("plan", "El plan es obligatorio").not().isEmpty(),
    check("audio", "El audio es obligatorio").not().isEmpty(),
], AudioMeditationController.createAudioMeditation);


router.get('/getaudiobymeditation/:id/:level', Auth, AudioMeditationController.getAudiosByMedidation);

module.exports = router;