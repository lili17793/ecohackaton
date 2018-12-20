const express = require('express');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../secure/jwtSecret');
const bcrypt = require('bcrypt');
const router = express.Router();
const models = require('../models');
const getToken = require('../helpers/getToken');

router.route('/')
  .get((req, res) => {
    jwt.verify(getToken(req), jwtSecret, (err, decode) => {
      if (err) res.sendStatus(403);
      else {
        models.user.findOne({where : {
          id: decode.id
        }}).then(user => {
          res.status(200).send(user)
        });
      }
    });
  })

  .put((req, res) => {
    jwt.verify(getToken(req), jwtSecret, (err, decode) => {
      if (err) res.sendStatus(403);
      else {
        const {password} = req.body;
        const update = (body) => {
          models.user.update(body, {
            where: {
              id: decode.id
            }
          }).then(user => {
            if (user) res.sendStatus(204);
            else res.sendStatus(404);
          });
        }
        if(password) {
          bcrypt.hash(password, 10, (err, hash) =>  {
            update({
              ...req.body,
              passwordHash: hash,
            });
          });
        } else update(req.body);       
      }
    });
  })

module.exports = router;