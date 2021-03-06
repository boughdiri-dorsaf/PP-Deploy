const connexion = require('../../../db_connection');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox8cbfcafa2ff54adfabcbdba4ce193360.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN })

const mailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
//fonction pour recupere toutes les users sans parametre
module.exports.getUsers = (req, res) => {

  connexion.query('select * from user, adresse, situation_professionnel, pays, ville,gouvernerat where user.id_user = adresse.id_user and adresse.pays = pays.id_pays and adresse.ville =ville.id_ville and adresse.gouvernorat_adresse = gouvernerat.id_gouvernerat and user.id_situation_professionnel= situation_professionnel.id_situation_professionnel and id_role=9',
    (err, results) => {
      if (err) {
        res.status(500).json({
          err: true,
          results: []
        });
      }

      if (results.length > 0)
        res.status(200).json({
          err: false,
          results: results,
        })
      else
        res.status(404).json({
          err: false,
          results: [],
          message: "choix n'existe pas",
        })
    }
  )
};

//fonction pour creation d'un utilisateur
//Permet de verifier si un email existe dans la base de donnees
//Parametre (nom, prenom,email, password, age, cin, sexe, num_passport, date_naissance,id_role,gouvern_naissance, id_situation_professionnel, verifie)
module.exports.create = (req, res) => {
  const data = req.body;
  const pass = data.password;
  const salt = bcrypt.genSaltSync(10);
  data.password = bcrypt.hashSync(data.password, salt);

  const sql = 'select * from user where email=?;';

  connexion.query(sql, [data.email], (erreur, row) => {
    if (row.length > 0) {
      res.status(200).json({
        erreur: true,
        message: "Vous avez déjà un compte",
      })
    }else {
    connexion.query('INSERT INTO user(nom, prenom,email, password, age, cin, sexe, num_passport, date_naissance,id_role,gouvern_naissance, id_situation_professionnel, verifie) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      data.nom,
      data.prenom,
      data.email,
      data.password,
      data.age,
      data.cin,
      data.sexe,
      data.num_passport,
      data.date_naissance,
      9,
      data.gouvern_naissance,
      data.id_situation_professionnel,
      0
    ],
    (erreur, results) => {
      if (erreur) {
        res.status(500).json({
          erreur: true,
          message: erreur.sqlMessage,
        });
      }

      if (results.affectedRows > 0) {
        createAdresse(data, results.insertId)
        const tokenInscri = jwt.sign({ _id: results._id }, process.env.INSCRI_KEY);
          confirmInscriPlatform(data.email, pass, tokenInscri).then(result => {
            res.status(200).json({
              result:result
          });
        }).catch(erreur => {
          res.status(404).json({
            result: erreur
          });
        })

        res.status(200).json({
          erreur: false,
          results: results,
        })

      } else {
        res.status(404).json({
          erreur: true,
          results: [],
          message: "echec lors du stockage",
        })
      }
    }
  )
    }
  });
};

//fonction appeler dans create user
//Permet d'ajouter les donnees d'adresse dans table adresse
function createAdresse(data, id_user) {
  connexion.query('INSERT INTO adresse( code_postale, rue, ville, gouvernorat_adresse, pays, id_user) VALUES (?,?,?,?,?,?)',
    [
      data.code_postale,
      data.rue,
      data.ville,
      data.gouvernorat_adresse,
      data.pays,
      id_user
    ]
  );
}

//fonction permet d'afficher tous les donnes d'un user a traver 'ID'

module.exports.getUserByUserId = (req, res, next) => {
  const id_user = req.params.id;
  const sql = 'select * from user, adresse, situation_professionnel, pays, ville,gouvernerat where user.id_user = adresse.id_user and adresse.pays = pays.id_pays and adresse.ville =ville.id_ville and adresse.gouvernorat_adresse = gouvernerat.id_gouvernerat and user.id_situation_professionnel= situation_professionnel.id_situation_professionnel and user.id_user=? and user.id_role!=4';

  connexion.query(sql, [id_user], (err, row, fields) => {
    if (!err) {
      if (row.length > 0)
        res.status(200).json({
          err: false,
          rows: row,
        })
      else
        res.status(404).json({
          err: true,
          rows: [],
          result: row,
          fields: fields,
          message: "user non enregistre",
        })
    }
    else
      res.status(500).json({
        err: true,
        message: err.sqlMessage
      });
  })
};

//permet de modifier les dnnees de user par 'ID'
module.exports.updateUser = (req, res) => {
  const data = req.body;
  const salt = bcrypt.genSaltSync(10);
  console.log(req)
  data.password = bcrypt.hashSync(data.password, salt);
  connexion.query(
    'Update user set email = ?, password = ?, id_role = 9, nom = ?, prenom = ?, age = ?, cin = ?, sexe = ?, num_passport = ?, date_naissance = ?, gouvern_naissance=? where id_user = ?',
    [
      data.email,
      data.password,
      data.nom,
      data.prenom,
      data.age,
      data.cin,
      data.sexe,
      data.num_passport,
      data.date_naissance,
      data.gouvern_naissance,
      data.id_user
    ], (err, results) => {
      if (err) {
        res.status(500).json({
          err: true,
          results: err
        });
      }

      if (results.affectedRows > 0) {
        updateAdresse(data)
        res.status(200).json({
          err: false,
          results: results.affectedRows,
        })
      } else {
        res.status(404).json({
          err: true,
          results: err,
          message: "echec lors du stockage",
        })
      }
    })
};

function updateAdresse(data) {
  connexion.query('update adresse set code_postale = ?, rue = ?, ville = ?, gouvernorat_adresse = ?, pays = ? where id_user = ?',
    [
      data.code_postale,
      data.rue,
      data.ville,
      data.gouvernorat_adresse,
      data.pays,
      data.id_user
    ]
  )
}

//Get info user par email
module.exports.getUserByUserEmail = (req, res) => {
  const body = req.body;
  connexion.query(
    'select * from user where email = ? and id_role!=4',
    [body.email],
    (errpblm, results) => {
      if (errpblm) {
        res.status(500).json({
          errpblm: true,
          results: []
        });
      }

      if (results.length > 0) {
        const result = bcrypt.compareSync(body.password, results[0].password);
        console.log(result)
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, process.env.JWT_KEY, {

          });

          res.status(200).json({
            errpblm: false,
            message: "login successfully",
            token: jsontoken,
            id_user: results[0].id_user,
            role: results[0].id_role,
          })
        } else {
          res.status(200).json({
            errpblm: false,
            message: "Mot de passe erroné",
          })
        }

      } else {
        res.status(200).json({
          errpblm: false,
          message: "Email n'est pas verifie",
        })
      }
    })
};

module.exports.forgotPassword = (req, res) => {
  const body = req.body;
  connexion.query(
    'select * from user where email = ? and id_role=2 or id_role=9 or id_role=10',
    [body.email],
    (prblm, results) => {
      if (prblm) {
        res.status(500).json({
          prblm: true,
          results: []
        });
      }
      if (results.length > 0) {
        const token = jwt.sign({ _id: results._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' });

        resetPasswordMail(body.email, token).then(result => {
          res.status(200).json({
            result: result
          });
        }).catch(prblm => {
          res.status(404).json({
            result: prblm
          });
        })

        res.status(200).json({
          prblm: false,
          Token: token,
        })

      } else {
        res.status(404).json({
          prblm: false,
          message: "User with this mail does not exist",
        })
      }
    })
};

module.exports.resetPassword = (req, res) => {
  const body = req.body;
  console.log(body)
  if (body.resetLink) {
    jwt.verify(body.resetLink, process.env.RESET_PASSWORD_KEY, (error, results) => {
      if (error) {
        return res.status(401).json({
          success: 0,
          data: "Incorrect token or it is expired"
        });
      }
      const salt = bcrypt.genSaltSync(10);
      body.newPassword = bcrypt.hashSync(body.newPassword, salt);
      updatePasswordUser(body.newPassword, body.email)
      return res.status(200).json({
        success: 1,
        data: "Your password has been changed"
      });
    });
  } else {
    return res.status(401).json({
      success: 0,
      data: "Authentication error"
    });
  }

};


module.exports.activeInscription = (req, res) => {
  const body = req.body;
  console.log(body)
  connexion.query(
    'update user set verifie = 1 where email = ?;',
    [
      body.email
    ], (erreuu, results) => {
      if (erreuu) {
        res.status(500).json({
          erreuu: true,
          results: erreuu
        });
      }

      if (results.affectedRows > 0) {
        res.status(200).json({
          erreuu: true,
          results: "etat changer"
        });
      }
    }
  );
};



function updatePasswordUser(password, email) {
  console.log(email)
  console.log(password);
  connexion.query(
    'update user set password = ? where email = ?',
    [
      password,
      email
    ], (pblm, results) => {
      console.log(results)
      console.log(pblm)
    }
  );
}

async function resetPasswordMail(email, token) {

  const transport = mailer.createTransport(
    smtp({
      host: 'in.mailjet.com',
      port: 2525,
      auth: {
        user: process.env.API_KEY,
        pass: process.env.API_SECRET,
      },
    })
  );

  return json = await transport.sendMail({
    from: process.env.EMAIL,
    to: [email],
    subject: 'Réinitialisation du mot de passe',
    html: `
            <h2>Pour changer votre mot de passe cliquer sur le lien ci-dessous : </h2>
        <p>http://localhost:4200/resetpassword/${token}</p>
        `
  });
}

async function confirmInscriPlatform(email, mdp, token) {
  const transport = mailer.createTransport(
    smtp({
      host: 'in.mailjet.com',
      port: 2525,
      auth: {
        user: process.env.API_KEY,
        pass: process.env.API_SECRET,
      },
    })
  );

  return json = await transport.sendMail({
    from: process.env.EMAIL,
    to: [email],
    subject: 'Confirmation d\inscription dans le platforme',
    html: 'Bonjour,<br>'
      + "Merci cher utilisateur d'avoir rejoint notre plateforme."
      + "<br> Nous aimerions vous confirmer que votre compte a été créé avec succès. Pour accéder à la plateforme, cliquez sur le lien ci-dessous."
      + `<br><a href="http://localhost:4200/verifierInscription/${email +"?"+ token}">Connexion</a>`
      + '<br>Voici Votre Identifiant & mot de passe'
      + '<br><label>Identifiant  : ' + email + '</label>'
      + '<br><label>Mot de passe : ' + mdp + '</label>'
      + '&nbsp;<br>'
      + '&nbsp;<br>'
      + 'Cordialement,'

  });
}
