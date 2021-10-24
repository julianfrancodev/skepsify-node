const express = require("express");

const ToolsController = require("../controllers/ToolController");

const Auth = require("../middleware/Auth");

const { check } = require("express-validator");


const router = express.Router();

//? /api/tools


router.post('/', Auth, [
    check("name", "El nombre de la herramienta es obligatorio").not().isEmpty(),
    check("phrase", "La frase de la herramienta es obligatorio").not().isEmpty(),
    check("icon", "El icono es obligatorio").not().isEmpty(),
    check("color", "El color es obligatorio").not().isEmpty()
], ToolsController.createTool);

router.get('/', Auth, ToolsController.getTools);


module.exports = router;