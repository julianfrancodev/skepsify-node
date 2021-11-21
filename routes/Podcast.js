const express = require("express");


const PodcastController = require('../controllers/PodcastController');

const Auth = require('../middleware/Auth');


const { check } = require("express-validator");


const router = express.Router();

//? /api/podcasts

router.post('/', Auth, [

    check('name', 'Es obligatorio el nombre del podcast').not().isEmpty(),
    check('image', 'Es obligatorio una imagen para el podcast').not().isEmpty(),
    check('audio', 'Es obligatorio un audio para el podcast').not().isEmpty(),
    check('duration', 'Es obligatorio la duracion del podcast').not().isEmpty(),

], PodcastController.createPodcast);

router.get('/randompodcasts', Auth, PodcastController.getRandomPodcasts);



module.exports = router;
