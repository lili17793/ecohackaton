const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../secure/jwtSecret');
const router = express.Router();
const models = require('../models');

router.post('/signup', (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) res.sendStatus(500);
    else {
      const userData = {
        ...req.body,
        passwordHash: hash
      };
      models.user.create(userData).then(user => {
        res.status(200).send(user);
      });
    }
  }); 
});

router.post('/signin', (req, res) => {
  const { password, email } = req.body;
  models.user.findOne({where : {
    email
  }}).then(user => {
    if (user) {
      bcrypt.compare(password, user.passwordHash, (err, match) => {
        if (err || !match) res.sendStatus(403)
        else {
          const tokenInfo = {
            id: user.id,
            pseudo : user.name,
          };
          const token = jwt.sign(tokenInfo, jwtSecret);
          res.header("Access-Control-Expose-Headers", "x-access-token");
          res.set("x-access-token", token);
          res.status(200);
          res.send(user);
        }
      });
    } else {
      res.sendStatus(404)
    }    
  })
})

module.exports = router;