const express = require("express");
const router = express.Router();
const demandeMasterController=require('../../controllers/evenementiel/demandeMaster')
const { checkToken } = require("../../middleware/token_validation")

//Storage file in database -------------
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './demande-master/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'application/pdf'){
    cb(null, true);
  }else {
    cb(new Error("Extension de fichier non pdf"), false);
  }
}
const upload = multer({
  storage: storage,
  limits: {
  fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//------------------------------


router.post("/", checkToken, upload.single('fichier'), demandeMasterController.createDemandeMaster);

router.get("/", checkToken, demandeMasterController.getListDemandeMaster);
router.get("/Adminmaster/:id", demandeMasterController.getListDemandeByMaster);

router.get("/:id", checkToken, demandeMasterController.getDemandeMasterById);

router.patch("/", checkToken, upload.single('fichier'), demandeMasterController.updateDemandeMaster);
router.patch("/etat", checkToken, demandeMasterController.ChangerEtatDemandeMaster);

router.delete("/:id", checkToken, demandeMasterController.deleteDemandeMaster);
router.patch("/noteDemande",checkToken,demandeMasterController.addNoteDemande);
module.exports = router;
