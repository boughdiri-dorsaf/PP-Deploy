const express = require('express')
const morgan = require('morgan')
const app = express()

const dotenv = require('dotenv');
dotenv.config();
var client = require('./db_connection');

/******************************************************/
/***************import routes here*********************/
/*******************************************************/

/********************************/
/***group evenementiel routers***/
/********************************/
const adminRouter = require('./api/routes/evenementiel/admin');
const classeRouter = require('./api/routes/evenementiel/classe');
const demandeMasterRouter = require('./api/routes/evenementiel/demandeMaster');
const departementRouter = require('./api/routes/evenementiel/departement');
const domaineRouter = require('./api/routes/evenementiel/domaine');
const etablissementRouter = require('./api/routes/evenementiel/etablissement');
const etudiantRouter = require('./api/routes/evenementiel/etudiant');
const masterRouter = require('./api/routes/evenementiel/master');
const niveauRouter = require('./api/routes/evenementiel/niveau');
const responsableGroupRouter = require('./api/routes/evenementiel/responsableGroup');
const roleRouter = require('./api/routes/evenementiel/role');
const specialiteRouter = require('./api/routes/evenementiel/specialite');
const userRouter = require('./api/routes/evenementiel/user');
const situationRouter = require('./api/routes/evenementiel/situationEtudiant');
const etatRouter = require('./api/routes/evenementiel/etatDemandeMaster');
const paysRouter = require('./api/routes/evenementiel/pays');
const gouvernRouter = require('./api/routes/evenementiel/gouvernerat');
const villeRouter = require('./api/routes/evenementiel/ville');
const AdminMaster = require('./api/routes/evenementiel/adminMaster');

const cursusRouter = require('./api/routes/evenementiel/cursus');
const bacRouter = require('./api/routes/evenementiel/bacclaureat');
const CursusGRouter = require('./api/routes/evenementiel/cursusG');
const diplomeRouter = require('./api/routes/evenementiel/diplome');


/********************************/
/***group stage pfe routers******/
/********************************/

/********************************/
/***group scolarite routers******/
/********************************/
const add_file= require('./api/routes/scolarite/AddFile')
/********************************/
/**group administration routers**/
/********************************/

/********************************/
/****group admision routers******/
/********************************/

/********************************/
/**group communication routers***/
/********************************/




  /***************************************/
  /*************cors handler**************/
  /***************************************/
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    )
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
      return res.status(200).json({})
    }
    next()
  })
  app.use(express.urlencoded({extended: true}));
  app.use(express.json())
  app.use(morgan('dev'))
/*************************************************/
/****************use routes here******************/
/*************************************************/


/************************************/
/***use group evenementiel routers***/
/************************************/

/* pour l'affichage de fichier importee  */
app.use(express.static('public'));
app.use('/demande-master', express.static('demande-master'));
app.use('/etablissement_logo', express.static('etablissement_logo'));
/************************************/

app.use('/admin', adminRouter);
app.use('/classe', classeRouter);
app.use('/demandeMaster', demandeMasterRouter);
app.use('/departement', departementRouter);
app.use('/domaine', domaineRouter);
app.use('/etablissement', etablissementRouter);
app.use('/etudiant', etudiantRouter);
app.use('/master', masterRouter);
app.use('/niveau', niveauRouter);
app.use('/responsableGroup', responsableGroupRouter);
app.use('/role', roleRouter);
app.use('/specialite', specialiteRouter);
app.use('/users', userRouter);
app.use('/situation', situationRouter);
app.use('/etatDemande', etatRouter);
app.use('/pays', paysRouter);
app.use('/ville', villeRouter);
app.use('/gouvernerat', gouvernRouter);
app.use('/adminMaster', AdminMaster);
app.use('/diplome', diplomeRouter);



app.use('/cursus', cursusRouter);
app.use('/bacclaureat', bacRouter);
app.use('/cursusG', CursusGRouter);

/************************************/
/***use group stage pfe routers******/
/************************************/

/************************************/
/***use group scolarite routers******/
/************************************/
app.use("/addfile",add_file)
/************************************/
/**use group administration routers**/
/************************************/

/************************************/
/****use group admision routers******/
/************************************/

/************************************/
/***use group communication routers**/
/************************************/




  //if api not found will return
  app.use((req, res) => {
    res.status(404).json({ error: 'api not found' })
  })


module.exports = app
