const express = require("express");
const router = express.Router();
const masterController=require('../../controllers/evenementiel/master')

const { checkToken } = require("../../middleware/token_validation")

router.post("/", checkToken, masterController.createMaster);

router.get("/", checkToken, masterController.getListMaster);

router.get("/:id", checkToken, masterController.getMasterById);

router.patch("/", checkToken, masterController.updateMaster);

router.delete("/:id", checkToken, masterController.deleteSpecialite);

router.get("/applicants/:id", masterController.getnbApplicantsById);

module.exports = router;
