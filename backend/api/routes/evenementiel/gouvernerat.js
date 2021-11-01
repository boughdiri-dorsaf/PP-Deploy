const express = require("express");
const router = express.Router();
const gouverneratController = require('../../controllers/evenementiel/gouvernerat')

router.get("/", gouverneratController.getListGouvern);


module.exports = router;
 