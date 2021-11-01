const express = require("express");
const router = express.Router();
const specialiteController=require('../../controllers/evenementiel/specialite')

const { checkToken } = require("../../middleware/token_validation")

router.post("/", checkToken, specialiteController.createSpecialite);

router.get("/", checkToken, specialiteController.getListSpecialite);

router.get("/:id", checkToken, specialiteController.getSpecialiteById);

router.patch("/", checkToken, specialiteController.updateSpecialite);

router.delete("/:id", checkToken, specialiteController.deleteSpecialite);

module.exports = router;
