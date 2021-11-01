const express = require("express");
const router = express.Router();
const diplomeController=require('../../controllers/evenementiel/diplome')

const { checkToken } = require("../../middleware/token_validation")

router.get("/", checkToken, diplomeController.getListDiplomes);
module.exports = router;