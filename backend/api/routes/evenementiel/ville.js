const express = require("express");
const router = express.Router();
const villeController = require('../../controllers/evenementiel/ville')

router.get("/", villeController.getListville);


module.exports = router;
 