const express = require('express');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../secure/jwtSecret');
const router = express.Router();
const models = require('../models');
const getToken = require('../helpers/getToken');

router.route('/')
  .get((req, res) => {
    models.fact.findAll({
      order: Sequelize.literal('RANDOM()'),
      limit: 1
    }).then(fact => {
      res.send(fact)
    })
  })

  .post((req, res)=>{
    models.fact.create(req.body).then(fact => {
      res.status(200).send(fact);
    });
  })

  module.exports = router;


