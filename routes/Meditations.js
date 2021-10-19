const express = require("express");


const MeditationController = require("../controllers/MeditationController");

const Auth = require('../middleware/Auth');

const { check } = require("express-validator");


const router = express.Router();

//? /api/meditations

router.post('/', Auth, [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('image', "La imagen es obligatoria").not().isEmpty(),
    check('duration', "La duracion es requerida").not().isEmpty(),
    check('details', "La descripcion es obligatoria").not().isEmpty(),
    check('audio', "El audio es obligatorio").not().isEmpty(),
    check('instructor', "El instructor es obligatorio").not().isEmpty(),
    check('status', "El estado es obligatorio").not().isEmpty(),
    check('topic', 'El tema al que pertence es obligatorio').not().isEmpty(),
    check('tool', 'La herramienta a la que pertenece es obligatorio').not().isEmpty(),

], MeditationController.createMeditation);

router.get('/homelistrandom', Auth,
    MeditationController.getHomeRandomMedidations);

router.get('/getmorecoursesforyou', Auth, MeditationController.getMoreCoursesForYou);

router.get('/getforyoumeditations', Auth, MeditationController.getForYouMeditations);

router.get('/gettodaymeditations', Auth, MeditationController.getTodayMeditations);

router.get('/getmeditationsbytool/:id', Auth, MeditationController.getMeditationsByTool);

router.get('/getmeditationsbytopic/:id', Auth, MeditationController.getMeditationsByTopic);



module.exports = router;